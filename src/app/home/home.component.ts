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
} from '@icure/cardinal-be-sam-sdk';
import { Patient, HealthcareParty, Address } from '@icure/be-fhc-lite-api';

import { SamSdkService } from 'cardinal-prescription-be-angular';
import { PrescriptionModalComponent } from 'cardinal-prescription-be-angular';
import { MedicationSearchComponent } from 'cardinal-prescription-be-angular';
import {
  MedicationType,
  PrescribedMedicationType,
  TokenStore,
} from 'cardinal-prescription-be-angular';
import { PrescriptionListComponent } from 'cardinal-prescription-be-angular';
import { FhcService } from 'cardinal-prescription-be-angular';
import { UploadPractitionerCertificateService } from 'cardinal-prescription-be-angular';
import { PractitionerCertificateComponent } from 'cardinal-prescription-be-angular';
import { PrintPrescriptionModalComponent } from 'cardinal-prescription-be-angular';
import { TranslationService } from 'cardinal-prescription-be-angular';
import { IndexedDbTokenStoreService } from 'cardinal-prescription-be-angular';

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
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  samVersion?: SamVersion;
  certificateUploaded = false;
  certificateValid = false;
  errorWhileVerifyingCertificate?: string;
  uiReady = false;
  passphrase?: string;


  standardDosageContext = { ageInYears: 30, weightInKg: 70 };
  deliveryEnvironment = 'P';
  prescriptionModalMode: 'create' | 'modify' | null = null;
  medicationToPrescribe?: MedicationType;
  alternativeCheapMedications?: MedicationType[];
  prescriptionToModify?: PrescribedMedicationType;
  prescriptions: PrescribedMedicationType[] = [];
  showPrintPrescriptionsModal = false;
  language: keyof SamText = 'fr';
  db: IDBDatabase | undefined;
  indexedDbTokenStore: TokenStore | undefined;

  arePrescriptionsSending = false;
  arePrescriptionsPrinting = false;

  patient: Patient = {
    firstName: 'Antoine',
    lastName: 'Duchâteau',
    ssin: '74010414733',
    dateOfBirth: 19740104,
  };
  hcp: HealthcareParty = {
    firstName: 'Antoine',
    lastName: 'Duchâteau',
    ssin: '74010414733',
    nihii: '10032669001',
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
  vendor = {
    vendorEmail: 'support@test.be',
    vendorName: 'vendorName',
    vendorPhone: '+3200000000',
  };
  package = {
    packageName: 'test[test/1.0]-freehealth-connector',
    packageVersion: '1.0-freehealth-connector',
  };
  ICURE_URL = 'https://nightly.icure.cloud';
  FHC_URL = 'https://fhcacc.icure.cloud';

  // To create new Credentials.UsernamePassword(), follow these steps:
  // 1. Go to https://cockpit.icure.dev/ — the management platform for Cardinal.
  // 2. Register and log in.
  // 3. Create a solution, then a database, and then a healthcare professional (HCP).
  // 4. For this HCP, generate an Active Authentication Token.
  // 5. Use the HCP's email address as the username, and the token as the password.
  practitionerCredentials = {
    username: 'larisa.shashuk+angular_prescription_demo@gmail.com',
    password: '7e781107-c0f2-4ca2-ab76-3b3761002118',
  };

  constructor(
    private samSdkService: SamSdkService,
    private fhcService: FhcService,
    private certificateService: UploadPractitionerCertificateService,
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef,
    private indexedDbTokenStoreService: IndexedDbTokenStoreService
  ) {}

  t(key: string): string {
    return this.translationService.translate(key);
  }

  async ngOnInit() {
    // Set the application language here.
    // Supported languages: 'fr', 'en', 'nl', 'de'
    this.translationService.setLanguage('fr');

    this.language = this.translationService.getCurrentLanguage();
    this.db = await this.indexedDbTokenStoreService.open();
    this.indexedDbTokenStore = this.indexedDbTokenStoreService.getTokenStore(
      this.db
    );

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
      // the same as this.db = await this.indexedDbTokenStoreService.open();
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
    const certificateValidationResult =
      await this.fhcService.validateDecryptedCertificate(
        this.hcp,
        this.passphrase!,
        this.indexedDbTokenStore!,
        this.FHC_URL
      );

    this.certificateValid = certificateValidationResult.status;
    this.errorWhileVerifyingCertificate =
      certificateValidationResult.error?.[this.language];
  }

  async onUploadCertificate(passphrase: string) {
    this.certificateUploaded = true;
    this.passphrase = passphrase;
    await this.validateCertificate();
    this.cdr.markForCheck();
  }

  onCreatePrescription([medication, cheapAlternatives]: [MedicationType, MedicationType[]]) {
    this.prescriptionModalMode = 'create';
    this.medicationToPrescribe = medication;
    this.alternativeCheapMedications = cheapAlternatives;
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
              this.FHC_URL,
              this.samVersion!,
              this.vendor,
              this.package,
              this.hcp,
              this.patient,
              med,
              this.passphrase!,
              this.indexedDbTokenStore!
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
