import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CardinalBeSamSdk,
  Credentials,
  SamText,
  SamVersion,
} from '@icure/cardinal-be-sam';
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
import { TranslationService } from '../services/translation/translation.service';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  prescriptions: PrescribedMedicationType[] = [];
  showPrintPrescriptionsModal = false;
  db!: IDBDatabase;
  language: keyof SamText = 'fr';

  arePrescriptionsSending = false;
  arePrescriptionsPrinting = false;

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
  practitionerCredentials = {
    username: 'larisa.shashuk+medicationsTest@gmail.com',
    password: '5aa9d0f0-2fab-4f9f-9f6a-5d8244280873',
  };
  ICURE_URL = 'https://nightly.icure.cloud';

  //TODO: There is going to be an alternative how to upload the practitioner's certificate from a database and not from the input file

  constructor(
    private samSdkService: SamSdkService,
    private fhcService: FhcService,
    private certificateService: UploadPractitionerCertificateService,
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {}

  t(key: string): string {
    return this.translationService.translate(key);
  }

  get indexedDbTokenStore(): TokenStore {
    return {
      get: (key: string) => {
        return new Promise((resolve, reject) => {
          const tx = this.db.transaction('certificates', 'readonly');
          const store = tx.objectStore('certificates');
          const request = store.get(key);
          request.onsuccess = () => {
            request.result
              ? resolve(request.result.value)
              : reject(new Error(`No value for key: ${key}`));
          };
          request.onerror = () => reject(request.error);
        });
      },
      put: (key: string, value: string) => {
        return new Promise((resolve, reject) => {
          const tx = this.db.transaction('certificates', 'readwrite');
          const store = tx.objectStore('certificates');
          const request = store.put({ id: key, value });
          request.onsuccess = () => resolve(value);
          request.onerror = () => reject(request.error);
        });
      },
    };
  }

  async ngOnInit() {
    this.language = this.translationService.getCurrentLanguage();
    try {
      // Create the SDK instance outside the service:
      const instance = await CardinalBeSamSdk.initialize(
        undefined,
        this.ICURE_URL,
        new Credentials.UsernamePassword(
          this.practitionerCredentials.username,
          this.practitionerCredentials.password
        )
      );

      // Pass the SDK instance into the service:
      this.samSdkService.setSdk(instance.sam);

      this.samVersion = await this.samSdkService.getSamVersion();
      this.db = await this.certificateService.openCertificatesDatabase();

      try {
        await this.certificateService.loadCertificateInformation(
          this.db,
          this.hcp.ssin!
        );
        this.certificateUploaded = true;
      } catch {
        this.certificateUploaded = false;
      }

      this.uiReady = true;

      this.cdr.markForCheck();

      if (this.certificateUploaded) {
        await this.validateCertificate();
        this.cdr.markForCheck();
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
        this.indexedDbTokenStore
      );
      this.certificateValid = res.status;
      this.errorWhileVerifyingCertificate = res.error?.[this.language];
    } catch {
      this.certificateValid = false;
      this.errorWhileVerifyingCertificate = undefined;
    }
    this.cdr.markForCheck();
  }

  async onUploadCertificate(passphrase: string) {
    this.certificateUploaded = true;
    this.passphrase = passphrase;
    await this.validateCertificate();
    this.cdr.markForCheck();
  }

  onCreatePrescription(medication: MedicationType) {
    this.prescriptionModalMode = 'create';
    this.medicationToPrescribe = medication;
    this.cdr.detectChanges();
  }
  onSubmitCreatePrescription(newPrescriptions: PrescribedMedicationType[]) {
    this.prescriptions = [...(this.prescriptions ?? []), ...newPrescriptions];
    this.onClosePrescriptionModal();
    this.cdr.detectChanges();
  }

  onClosePrescriptionModal() {
    this.prescriptionModalMode = null;
    this.medicationToPrescribe = undefined;
    this.prescriptionToModify = undefined;
    this.cdr.detectChanges();
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
    this.cdr.detectChanges();
  }

  onModifyPrescription = (prescription: PrescribedMedicationType) => {
    this.prescriptionModalMode = 'modify';
    this.prescriptionToModify = { ...prescription };
    this.cdr.markForCheck();
  };

  onDeletePrescription(prescription: PrescribedMedicationType) {
    this.prescriptions = this.prescriptions?.filter(
      item => item.uuid !== prescription.uuid
    );
    this.cdr.markForCheck();
  }

  async onSendPrescriptions(): Promise<void> {
    if (this.prescriptions && this.samVersion && this.passphrase) {
      try {
        this.arePrescriptionsSending = true;

        this.prescriptions = await Promise.all(
          this.prescriptions.map(async med => {
            if (med.rid) return med;

            const res = await this.fhcService.sendRecipe(
              this.samVersion!,
              this.hcp,
              this.patient,
              med,
              this.passphrase!,
              this.indexedDbTokenStore
            );

            return { ...med, rid: res[0]?.rid };
          })
        );
      } catch (error) {
        console.error('Error sending prescriptions:', error);
      } finally {
        this.arePrescriptionsSending = false;
        this.cdr.markForCheck();
      }
    } else {
      console.warn('Missing data to send prescriptions');
    }
  }

  onPrintPrescriptions(): void {
    this.showPrintPrescriptionsModal = true;
    this.cdr.markForCheck();
  }

  async onSendAndPrintPrescriptions(): Promise<void> {
    this.arePrescriptionsPrinting = true;

    try {
      await this.onSendPrescriptions();
      this.onPrintPrescriptions();
    } catch (error) {
      console.error('Error in send & print:', error);
    } finally {
      this.arePrescriptionsPrinting = false;
      this.cdr.markForCheck();
    }
  }

  onClosePrintPrescriptionsModal = () => {
    this.showPrintPrescriptionsModal = false;
    this.cdr.markForCheck();
  };
}
