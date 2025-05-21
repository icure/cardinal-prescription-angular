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
  samVersion: SamVersion | undefined;
  certificateUploaded: boolean = false;
  certificateValid: boolean = false;
  uiReady: boolean = false;
  passphrase: string | undefined;

  constructor(
    private samSdkService: SamSdkService,
    private fhcService: FhcService,
    private certificateService: UploadPractitionerCertificateService
  ) {}

  deliveryEnvironment: string = 'P';
  // Prescription Modal
  prescriptionModalMode: 'create' | 'modify' | null = null;
  medicationToPrescribe: MedicationType | undefined;
  prescriptionToModify: PrescribedMedicationType | undefined;

  prescriptions: PrescribedMedicationType[] | undefined;
  showPrintPrescriptionsModal: boolean = false;
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

  async ngOnInit() {
    try {
      // Initialize SDK
      await this.samSdkService.initialize();
      this.samVersion = await this.samSdkService.getSamVersion();

      // Open database
      const db = await this.certificateService.openCertificatesDatabase();

      // Try to load certificate information
      try {
        await this.certificateService.loadCertificateInformation(
          db,
          this.hcp.ssin as string
        );
        this.certificateUploaded = true;
      } catch (e) {
        this.certificateUploaded = false;
      }

      // Set UI as ready
      this.uiReady = true;

      // Watch for certificate validity after it is uploaded and passphrase is set
      if (this.certificateUploaded && this.passphrase) {
        this.certificateService
          .loadAndDecryptCertificate(this.passphrase, this.hcp.ssin as string)
          .then(() => {
            this.certificateValid = true;
          })
          .catch(() => {
            this.certificateValid = false;
          });
      }
    } catch (error) {
      console.error('Error initializing SDK or opening database:', error);
    }
  }

  onUploadCertificate(passphrase: string) {
    this.certificateUploaded = true;
    this.passphrase = passphrase;

    // Watch for certificate validity after it is uploaded and passphrase is set
    if (this.certificateUploaded && this.passphrase) {
      this.certificateService
        .loadAndDecryptCertificate(this.passphrase, this.hcp.ssin as string)
        .then(() => {
          this.certificateValid = true;
        })
        .catch(() => {
          this.certificateValid = false;
        });
    }
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

  onSubmitModifyPrescription() {
    console.log('submit');
    this.onClosePrescriptionModal();
  }
  onModifyPrescription(prescription: PrescribedMedicationType) {
    this.prescriptionModalMode = 'modify';
    this.prescriptionToModify = prescription;
  }
  onDeletePrescription(prescription: PrescribedMedicationType) {
    this.prescriptions = this.prescriptions?.filter(
      item => item.uuid !== prescription.uuid
    );
  }

  handleSendPrescriptions = async (
    prescribedMedications: PrescribedMedicationType[],
    samVersion: SamVersion,
    hcp: HealthcareParty,
    patient: Patient,
    passphrase: string,
    cache: TokenStore
  ) => {
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

          console.log('med');
          console.log(med);

          console.log('res');
          console.log(res);

          this.prescriptions = prescribedMedications.map(item =>
            item.uuid === med.uuid
              ? {
                  ...item,
                  rid: res[0]?.rid,
                }
              : item
          );
        })
    );
  };

  onSendPrescriptions = async (): Promise<void> => {
    if (this.prescriptions && this.samVersion && this.passphrase) {
      await this.handleSendPrescriptions(
        this.prescriptions,
        this.samVersion,
        this.hcp,
        this.patient,
        this.passphrase,
        {
          get: (key: string) => Promise.resolve(this.cache[key]),
          put: (key: string, value: string) =>
            Promise.resolve((this.cache[key] = value)),
        }
      );
    } else {
      console.error('Missing required information to send prescriptions.');
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
