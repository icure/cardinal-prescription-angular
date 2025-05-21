import { Component, Output, EventEmitter, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-certificate-upload',
  templateUrl: './certificate-upload.component.html',
  styleUrls: ['./certificate-upload.component.scss'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    TextInputComponent,
    ButtonComponent,
  ],
})
export class CertificateUploadComponent implements OnInit {
  @Output() onUploadCertificate: EventEmitter<string> = new EventEmitter();

  constructor(
    private certificateService: UploadPractitionerCertificateService,
    private fb: NonNullableFormBuilder
  ) {}

  password: string = '';
  certificateFile: File | null = null;
  db: IDBDatabase | undefined;
  uploadCertificateForm!: FormGroup;

  // Initialize IndexedDB
  ngOnInit(): void {
    this.certificateService.openCertificatesDatabase().then(database => {
      this.db = database;
    });

    this.uploadCertificateForm = this.fb.group({
      certificateFile: [null, Validators.required], // Custom validator for file input
      certificatePassword: ['', Validators.required],
    });
  }

  getErrorMessage(fieldName: string): string | undefined {
    const control = this.uploadCertificateForm.get(fieldName);

    if (control?.valid || !control?.touched || control?.disabled)
      return undefined;

    if (control?.errors?.['required']) return 'Ce champ est requis';

    // You can add more error types if needed (minlength, pattern, etc.)
    return 'Champ invalide';
  }

  // Handle form submission
  async handleFormSubmit(): Promise<void> {
    if (!this.db) {
      alert('Database not initialized');
      return;
    }

    if (!this.certificateFile || !this.password) {
      alert('Please upload a certificate and set a password.');
      return;
    }

    const certificateData = await this.readFileAsArrayBuffer(
      this.certificateFile
    );
    const id = await this.certificateService.uploadAndEncrypt(
      this.db,
      this.certificateFile.name.split('=')[1].split(' ')[0],
      this.password,
      certificateData
    );
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
      this.uploadCertificateForm.reset();
    }
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
