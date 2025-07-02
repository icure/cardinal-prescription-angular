import {
  Component,
  Output,
  EventEmitter,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { UploadPractitionerCertificateService } from '../../../../shared/services/certificate/upload-practitioner-certificate.service';
import {
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TextInputComponent } from '../../form-elements/text-input/text-input.component';
import { ButtonComponent } from '../../form-elements/button/button.component';
import { HealthcareParty } from '@icure/be-fhc-api';
import { NgIf } from '@angular/common';
import { CertificateStatusComponent } from '../certificate-status/certificate-status.component';
import { TranslationService } from '../../../../shared/services/translation/translation.service';

@Component({
  selector: 'cardinal-certificate-upload',
  templateUrl: './certificate-upload.component.html',
  styleUrls: ['./certificate-upload.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TextInputComponent,
    ButtonComponent,
    NgIf,
    CertificateStatusComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CertificateUploadComponent implements OnInit {
  @Input({ required: true }) hcp!: HealthcareParty;

  @Output() onUploadCertificate: EventEmitter<string> = new EventEmitter();

  constructor(
    private certificateService: UploadPractitionerCertificateService,
    private fb: NonNullableFormBuilder,
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {}

  t(key: string): string {
    return this.translationService.translate(key);
  }

  password: string = '';
  certificateFile: File | null = null;
  db: IDBDatabase | undefined;
  uploadCertificateForm!: FormGroup;
  certificateUploaded: boolean = false;
  certificateAvailabilityFeedback?: {
    passwordMissing: {
      title: string;
      description: string;
    };
  };

  // Initialize IndexedDB
  ngOnInit(): void {
    this.buildFeedback();

    this.certificateService.openCertificatesDatabase().then(async db => {
      this.db = db;

      try {
        if (!this.hcp.ssin) return;

        const stored = await this.certificateService.loadCertificateInformation(
          db,
          this.hcp.ssin
        );

        this.certificateUploaded = !!stored;
      } catch {
        this.certificateUploaded = false;
      }

      this.uploadCertificateForm = this.fb.group({
        certificateFile: [
          { value: null, disabled: false },
          this.certificateUploaded ? [] : [Validators.required],
        ],
        certificatePassword: ['', Validators.required],
      });

      this.cdr.markForCheck();
    });
  }

  getErrorMessage(fieldName: string): string | undefined {
    const control = this.uploadCertificateForm.get(fieldName);

    if (
      !this.uploadCertificateForm.dirty ||
      !control?.touched ||
      control?.valid ||
      control?.disabled
    )
      return undefined;

    if (control.errors?.['required'])
      return this.t('practitioner.certificateUpload.errorRequired');
    return this.t('practitioner.certificateUpload.errorInvalid');
  }

  // Handle form submission
  async handleFormSubmit(): Promise<void> {
    if (this.certificateFile !== null && !!this.db) {
      const certificateData = await this.readFileAsArrayBuffer(
        this.certificateFile
      );
      await this.certificateService.uploadAndEncrypt(
        this.db,
        this.certificateFile.name.split('=')[1].split(' ')[0],
        this.password,
        certificateData
      );
    }
    this.onUploadCertificate.emit(this.password);
  }

  async onSubmit() {
    if (this.uploadCertificateForm.invalid) {
      this.uploadCertificateForm.markAllAsTouched();
      return;
    }

    if (this.uploadCertificateForm.valid) {
      const formValues = this.uploadCertificateForm.value;
      this.password = formValues.certificatePassword;

      await this.handleFormSubmit();
      // ✅ Clean reset without validation flicker
      this.uploadCertificateForm.reset({
        certificateFile: null,
        certificatePassword: '',
      });
      this.uploadCertificateForm.markAsPristine();
      this.uploadCertificateForm.markAsUntouched();
    }
    this.cdr.markForCheck();
  }

  private buildFeedback(): void {
    this.certificateAvailabilityFeedback = {
      passwordMissing: {
        title: this.t('practitioner.certificateUpload.passwordMissingTitle'),
        description: this.t(
          'practitioner.certificateUpload.passwordMissingDescription'
        ),
      },
    };
    this.cdr.markForCheck();
  }

  onUploadedAnotherCertificate(): void {
    this.uploadCertificateForm.reset();
    this.certificateUploaded = false;
    this.cdr.markForCheck();
  }

  // Handle file input change
  handleFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.certificateFile = target.files ? target.files[0] : null;
    this.cdr.markForCheck();
  }

  // Read the file as ArrayBuffer
  readFileAsArrayBuffer(file: File): Promise<ArrayBuffer> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as ArrayBuffer);
      reader.onerror = () => reject(reader.error);
      reader.readAsArrayBuffer(file);
    });
  }
}
