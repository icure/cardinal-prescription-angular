import { Injectable } from '@angular/core';
import {
  fhcStsApi,
  fhcRecipeApi,
  UUIDType,
  Prescription,
  PrescriptionRequest,
  Patient,
  HealthcareParty,
  Code as FhcCode,
} from '@icure/be-fhc-api';
import { SamText, SamVersion } from '@icure/cardinal-be-sam-sdk';
import { SamlTokenResult } from '@icure/be-fhc-api/model/SamlTokenResult';

import { UploadPractitionerCertificateService } from '../certificate/upload-practitioner-certificate.service';
import { dateEncode } from '../../../internal/utils/date-helpers';

import {
  CertificateValidationResultType,
  PrescribedMedicationType,
  TokenStore,
} from '../../types';
import { TranslationService } from '../translation/translation.service';

// TODO: Replace with actual vendor information and package details

const vendor = {
  vendorEmail: 'support@test.be',
  vendorName: 'vendorName',
  vendorPhone: '+3200000000',
};

const usedPackage = {
  packageName: 'test[test/1.0]-freehealth-connector',
  packageVersion: '1.0-freehealth-connector',
};

@Injectable({
  providedIn: 'root',
})
export class FhcService {
  private language: keyof SamText;
  constructor(
    private certificateService: UploadPractitionerCertificateService,
    private translationService: TranslationService
  ) {
    this.language = this.translationService.getCurrentLanguage();
  }

  // Method to create a Free Health Connector Code
  createFhcFromCode(type: string, code: string, version?: string): FhcCode {
    return new FhcCode({
      id: `${type}:${code}:${version ?? '1.0'}`,
      type,
      code,
      version: version ?? '1.0',
    });
  }

  // Create the prescription request
  makePrescriptionRequest(
    samVersion: SamVersion,
    prescriber: HealthcareParty,
    patient: Patient,
    prescribedMedication: PrescribedMedicationType
  ): PrescriptionRequest {
    return new PrescriptionRequest({
      medications: [prescribedMedication.medication],
      patient: {
        firstName: patient.firstName,
        lastName: patient.lastName,
        ssin: patient.ssin,
        dateOfBirth: patient.dateOfBirth,
      },
      hcp: {
        firstName: prescriber.firstName,
        lastName: prescriber.lastName,
        ssin: prescriber.ssin,
        nihii: prescriber.nihii,
        addresses: prescriber.addresses,
      },
      feedback: false,
      vendorName: vendor.vendorName,
      vendorEmail: vendor.vendorEmail,
      vendorPhone: vendor.vendorPhone,
      packageName: usedPackage.packageName,
      packageVersion: usedPackage.packageVersion,
      vision: prescribedMedication.pharmacistVisibility,
      visionOthers: prescribedMedication.prescriberVisibility,
      samVersion: samVersion.version,
      deliveryDate:
        prescribedMedication.medication.beginMoment ?? dateEncode(new Date()),
      expirationDate:
        prescribedMedication.medication.beginMoment ??
        dateEncode(new Date(+new Date() + 1000 * 3600 * 24 * 90)),
      lang: this.language,
    });
  }

  async sendRecipe(
    samVersion: SamVersion,
    prescriber: HealthcareParty,
    patient: Patient,
    prescribedMedication: PrescribedMedicationType,
    passphrase: string,
    cache: TokenStore
  ): Promise<Prescription[]> {
    const prescription = this.makePrescriptionRequest(
      samVersion,
      prescriber,
      patient,
      prescribedMedication
    );

    if (!prescriber || !prescriber.ssin || !prescriber.nihii) {
      throw new Error('Missing prescriber information');
    }

    // Load and decrypt keystore
    const keystore = await this.certificateService.loadAndDecryptCertificate(
      passphrase,
      prescriber.ssin
    );
    if (!keystore) {
      throw new Error('Cannot obtain keystore');
    }

    const url = 'https://fhcacc.icure.cloud';

    const sts = new fhcStsApi(url, []);
    const recipe = new fhcRecipeApi(url, []);

    let storeKey = `keystore.${prescriber.ssin}`;

    const keystoreUuid =
      (await cache.get(storeKey)) ??
      (await sts
        .uploadKeystoreUsingPOST(keystore)
        .then(({ uuid }: UUIDType) => {
          if (!uuid) {
            throw new Error('Cannot obtain keystore uuid');
          }
          return cache.put(storeKey, uuid);
        }));

    const stsToken: SamlTokenResult = await sts.requestTokenUsingGET(
      passphrase,
      prescriber.ssin,
      keystoreUuid,
      'doctor',
      await cache.get(storeKey)
    );

    if (!stsToken.tokenId) {
      console.error('Cannot obtain token');
    }

    return Promise.all(
      prescription.medications?.map(m =>
        recipe.createPrescriptionV4UsingPOST(
          keystoreUuid,
          stsToken.tokenId!,
          passphrase,
          'persphysician',
          prescriber.nihii!,
          prescriber.ssin!,
          `${prescriber.firstName!} ${prescriber.lastName!}`,
          'iCure',
          '1',
          new PrescriptionRequest({ ...prescription, medications: [m] })
        )
      ) ?? []
    );
  }

  async verifyCertificateWithSts(
    prescriber: HealthcareParty,
    passphrase: string,
    cache: TokenStore
  ): Promise<CertificateValidationResultType> {
    if (!prescriber?.ssin || !prescriber?.nihii) {
      return {
        status: false,
        error: {
          en: 'Missing prescriber information',
          fr: 'Informations du prescripteur manquantes',
          nl: 'Ontbrekende voorschrijversinformatie',
          de: 'Fehlende Verschreiberinformationen',
        },
      };
    }

    try {
      const keystore = await this.certificateService.loadAndDecryptCertificate(
        passphrase,
        prescriber.ssin
      );
      if (!keystore) {
        return {
          status: false,
          error: {
            en: 'Cannot obtain the certificat',
            fr: 'Impossible d’obtenir le certificat',
            nl: 'Certificaat kan niet worden verkregen',
            de: 'Zertifikat kann nicht abgerufen werden',
          },
        };
      }

      const url = 'https://fhcacc.icure.cloud';
      const sts = new fhcStsApi(url, []);

      const storeKey = `keystore.${prescriber.ssin}`;

      const keystoreUuid = await sts
        .uploadKeystoreUsingPOST(keystore)
        .then(({ uuid }: UUIDType) => {
          if (!uuid) {
            throw new Error('Cannot obtain keystore uuid');
          }
          return cache.put(storeKey, uuid);
        });

      const token = await cache.get(storeKey);
      const stsToken = await sts.requestTokenUsingGET(
        passphrase,
        prescriber.ssin,
        keystoreUuid,
        'doctor',
        token
      );
      return { status: !!stsToken.tokenId };
    } catch (error: any) {
      console.error('Certificate verification error:', error);
      return {
        status: false,
        error: {
          en: error?.message || 'Unknown error occurred',
          fr: error?.message || 'Une erreur inconnue est survenue',
          nl: error?.message || 'Er is een onbekende fout opgetreden',
          de: error?.message || 'Ein unbekannter Fehler ist aufgetreten',
        },
      };
    }
  }

  // Validate the certificate by loading and decrypting it, then verifying with FHC
  async validateDecryptedCertificate(
    hcp: HealthcareParty,
    passphrase: string,
    indexedDbTokenStore: TokenStore
  ): Promise<CertificateValidationResultType> {
    try {
      await this.certificateService.loadAndDecryptCertificate(
        passphrase,
        hcp.ssin!
      );
      const res = await this.verifyCertificateWithSts(
        hcp,
        passphrase,
        indexedDbTokenStore
      );
      return { status: res.status, error: res.error };
    } catch {
      return { status: false };
    }
  }
}
