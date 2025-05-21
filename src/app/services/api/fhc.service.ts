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
import { UploadPractitionerCertificateService } from '../practitioner/upload-practitioner-certificate.service';
import { dateEncode } from '../../utils/date-helpers';
import { PrescribedMedicationType, TokenStore } from '../../types';
import { SamVersion } from '@icure/cardinal-be-sam';

const vendor = {
  vendorEmail: 'support@test.be',
  vendorName: 'vendorName',
  vendorPhone: '+3200000000',
};

const usedPackage = {
  packageName: 'test[test/1.0]-freehealth-connector',
  packageVersion: '1.0]-freehealth-connector',
};

@Injectable({
  providedIn: 'root',
})
export class FhcService {
  constructor(
    private certificateService: UploadPractitionerCertificateService
  ) {}

  // Method to create a Free Health Connector Code
  createFhcFromCode(type: string, code: string, version?: string): FhcCode {
    return new FhcCode({
      id: `${type}:${code}:${version ?? '1.0'}`,
      type,
      code,
      version: version ?? '1.0',
    });
  }

  // TODO check how to put in the local storage
  // Cache management
  getCacheValue(cache: TokenStore, key: string): Promise<string> {
    return Promise.resolve(cache.get(key));
  }
  // TODO check how to put in the local storage
  setCacheValue(
    cache: TokenStore,
    key: string,
    value: string
  ): Promise<string> {
    return Promise.resolve(cache.put(key, value));
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
      lang: 'fr',
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
    let tokenKey = `token.${prescriber.ssin}`;
    const keystoreUuid =
      (await this.getCacheValue(cache, storeKey)) ??
      (await sts
        .uploadKeystoreUsingPOST(keystore)
        .then(({ uuid }: UUIDType) => {
          if (!uuid) {
            throw new Error('Cannot obtain keystore uuid');
          }
          return this.setCacheValue(cache, storeKey, uuid);
        }));

    const stsToken = await sts.requestTokenUsingGET(
      passphrase,
      prescriber.ssin,
      keystoreUuid,
      'doctor',
      await this.getCacheValue(cache, tokenKey)
    );
    if (!stsToken.tokenId) {
      throw new Error('Cannot obtain token');
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
}
