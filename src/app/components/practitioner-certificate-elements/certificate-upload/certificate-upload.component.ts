import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { UploadPractitionerCertificateService } from '../../../services/practitioner/upload-practitioner-certificate.service';
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

@Component({
  selector: 'app-certificate-upload',
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
})
export class CertificateUploadComponent implements OnInit {
  @Input() hcp!: HealthcareParty;
  @Output() onUploadCertificate: EventEmitter<string> = new EventEmitter();

  constructor(
    private certificateService: UploadPractitionerCertificateService,
    private fb: NonNullableFormBuilder
  ) {}

  password: string = '';
  certificateFile: File | null = null;
  db: IDBDatabase | undefined;
  uploadCertificateForm!: FormGroup;
  certificateUploaded: boolean = false;

  // Initialize IndexedDB
  ngOnInit(): void {
    this.certificateService.openCertificatesDatabase().then(async db => {
      this.db = db;

      try {
        if (!this.hcp.ssin) return;

        const stored = await this.certificateService.loadCertificateInformation(
          db,
          this.hcp.ssin
        );

        this.certificateUploaded = !!stored;
        console.log(
          this.certificateUploaded
            ? 'Stored certificate found for ID ' + this.hcp.ssin
            : 'No stored certificate for ID ' + this.hcp.ssin
        );
      } catch {
        this.certificateUploaded = false;
      }

      // ✅ Create form after determining if certificate is uploaded
      this.uploadCertificateForm = this.fb.group({
        certificateFile: [
          { value: null, disabled: false },
          this.certificateUploaded ? [] : [Validators.required],
        ],
        certificatePassword: ['', Validators.required],
      });
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

    if (control.errors?.['required']) return 'Ce champ est requis';
    return 'Champ invalide';
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
  }

  certificateAvailabilityFeedback = {
    passwordMissing: {
      title: 'Mot de passe manquant',
      description:
        'Veuillez saisir le mot de passe associé au certificat afin de pouvoir le déchiffrer. Ce mot de passe est requis pour poursuivre la vérification.',
    },
  };

  onUploadedAnotherCertificate(): void {
    this.uploadCertificateForm.reset();
    this.certificateUploaded = false;
  }

  // Handle file input change
  handleFileChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.certificateFile = target.files ? target.files[0] : null;
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
