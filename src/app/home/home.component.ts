import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SamVersion } from '@icure/cardinal-be-sam';
import { Patient, HealthcareParty, Address } from '@icure/be-fhc-api';

import { SamSdkService } from '../services/api/sam-sdk.service';
import { PrescriptionModalComponent } from '../components/prescription-modal/prescription-modal.component';
import { MedicationSearchComponent } from '../components/medication-elements/medication-search/medication-search.component';
import { MedicationType, PrescribedMedicationType, TokenStore } from '../types';
import { PrescriptionListComponent } from '../components/prescription-elements/prescription-list/prescription-list.component';
import { FhcService } from '../services/api/fhc.service';
import { UploadPractitionerCertificateService } from '../services/practitioner/upload-practitioner-certificate.service';
import { PractitionerCertificateComponent } from '../components/practitioner-certificate-elements/practitioner-certificate/practitioner-certificate.component';
import { PrintPrescriptionModalComponent } from '../components/prescription-elements/print-prescription-modal/print-prescription-modal.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    PrescriptionModalComponent,
    MedicationSearchComponent,
    PrescriptionListComponent,
    PractitionerCertificateComponent,
    PrintPrescriptionModalComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  samVersion?: SamVersion;
  certificateUploaded = false;
  certificateValid = false;
  errorWhileVerifyingCertificate?: string;
  uiReady = false;
  passphrase?: string;

  deliveryEnvironment = 'P';
  prescriptionModalMode: 'create' | 'modify' | null = null;
  medicationToPrescribe?: MedicationType;
  prescriptionToModify?: PrescribedMedicationType;
  prescriptions?: PrescribedMedicationType[];
  showPrintPrescriptionsModal = false;
  cache: Record<string, string> = {};

  patient: Patient = {
    firstName: 'Antoine',
    lastName: 'Duchâteau',
    ssin: '74010414733',
    dateOfBirth: 19740104,
  };

  hcp: HealthcareParty = {
    firstName: 'Fabien',
    lastName: 'Zimer',
    ssin: '84100212104',
    nihii: '10104133000',
    addresses: [
      new Address({
        addressType: Address.AddressTypeEnum.Clinic,
        street: 'Rue de la Loi',
        houseNumber: '16',
        postalCode: '1000',
        city: 'Bruxelles',
        country: 'Belgique',
      }),
    ],
  };

  constructor(
    private samSdkService: SamSdkService,
    private fhcService: FhcService,
    private certificateService: UploadPractitionerCertificateService
  ) {}

  get localStorageTokenStore(): TokenStore {
    return {
      get: (key: string) => {
        console.log('get: key');
        console.log(key);

        const value = localStorage.getItem(key);
        return value
          ? Promise.resolve(value)
          : Promise.reject(new Error(`No value for key: ${key}`));
      },
      put: (key: string, value: string) => {
        console.log('put: key');
        console.log(key);
        console.log('put: value');
        console.log(value);
        localStorage.setItem(key, value);
        return Promise.resolve(value);
      },
    };
  }

  async ngOnInit() {
    try {
      await this.samSdkService.initialize();
      this.samVersion = await this.samSdkService.getSamVersion();
      const db = await this.certificateService.openCertificatesDatabase();

      try {
        await this.certificateService.loadCertificateInformation(
          db,
          this.hcp.ssin!
        );
        this.certificateUploaded = true;
      } catch {
        this.certificateUploaded = false;
      }

      this.uiReady = true;

      if (this.certificateUploaded && this.passphrase) {
        await this.validateCertificate();
      }
    } catch (error) {
      console.error('Initialization error:', error);
    }
  }

  async validateCertificate() {
    try {
      await this.certificateService.loadAndDecryptCertificate(
        this.passphrase!,
        this.hcp.ssin!
      );
      const res = await this.fhcService.verifyCertificateWithSts(
        this.hcp,
        this.passphrase!,
        this.localStorageTokenStore
      );
      this.certificateValid = res.status;
      this.errorWhileVerifyingCertificate = res.error?.fr;
    } catch {
      this.certificateValid = false;
      this.errorWhileVerifyingCertificate = undefined;
    }
  }

  async onUploadCertificate(passphrase: string) {
    this.certificateUploaded = true;
    this.passphrase = passphrase;
    await this.validateCertificate();
  }

  onCreatePrescription(medication: MedicationType) {
    this.prescriptionModalMode = 'create';
    this.medicationToPrescribe = medication;
  }
  onSubmitCreatePrescription(newPrescriptions: PrescribedMedicationType[]) {
    this.prescriptions = [...(this.prescriptions ?? []), ...newPrescriptions];
    this.onClosePrescriptionModal();
  }

  onClosePrescriptionModal() {
    this.prescriptionModalMode = null;
    this.medicationToPrescribe = undefined;
    this.prescriptionToModify = undefined;
  }

  onSubmitModifyPrescription(
    prescriptionsToModify: PrescribedMedicationType[]
  ) {
    this.prescriptions = this.prescriptions?.map(item =>
      item.uuid === prescriptionsToModify[0].uuid
        ? prescriptionsToModify[0]
        : item
    );
    this.onClosePrescriptionModal();
  }

  onModifyPrescription = (prescription: PrescribedMedicationType) => {
    this.prescriptionModalMode = 'modify';
    this.prescriptionToModify = prescription;
  };

  onDeletePrescription(prescription: PrescribedMedicationType) {
    this.prescriptions = this.prescriptions?.filter(
      item => item.uuid !== prescription.uuid
    );
  }

  async handleSendPrescriptions(
    prescribedMedications: PrescribedMedicationType[],
    samVersion: SamVersion,
    hcp: HealthcareParty,
    patient: Patient,
    passphrase: string,
    cache: TokenStore
  ) {
    await Promise.all(
      prescribedMedications
        .filter(med => !med.rid)
        .map(async med => {
          const res = await this.fhcService.sendRecipe(
            samVersion,
            hcp,
            patient,
            med,
            passphrase,
            cache
          );
          this.prescriptions = prescribedMedications.map(item =>
            item.uuid === med.uuid ? { ...item, rid: res[0]?.rid } : item
          );
        })
    );
  }

  onSendPrescriptions = async (): Promise<void> => {
    if (this.prescriptions && this.samVersion && this.passphrase) {
      await this.handleSendPrescriptions(
        this.prescriptions,
        this.samVersion,
        this.hcp,
        this.patient,
        this.passphrase,
        this.localStorageTokenStore
      );
    } else {
      console.log(this.prescriptions);
      console.log(this.samVersion);
      console.log(this.passphrase);
      console.error('Missing information to send prescriptions.');
    }
  };
  onPrintPrescriptions = () => {
    this.showPrintPrescriptionsModal = true;
  };

  onSendAndPrintPrescriptions = async (): Promise<void> => {
    await this.onSendPrescriptions();
    this.onPrintPrescriptions();
  };

  onClosePrintPrescriptionsModal = () => {
    this.showPrintPrescriptionsModal = false;
  };
}
