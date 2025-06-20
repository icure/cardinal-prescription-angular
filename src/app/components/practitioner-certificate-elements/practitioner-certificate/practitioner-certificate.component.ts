import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CertificateStatusComponent } from '../certificate-status/certificate-status.component';
import { NgIf } from '@angular/common';
import { CertificateUploadComponent } from '../certificate-upload/certificate-upload.component';
import { HealthcareParty } from '@icure/be-fhc-api';
import { TranslationService } from '../../../services/translation/translation.service';

@Component({
  selector: 'app-practitioner-certificate',
  standalone: true,
  imports: [CertificateStatusComponent, NgIf, CertificateUploadComponent],
  templateUrl: './practitioner-certificate.component.html',
  styleUrl: './practitioner-certificate.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PractitionerCertificateComponent {
  @Input({ required: true }) hcp!: HealthcareParty;
  @Input() certificateValid?: boolean = false;
  @Input() certificateUploaded?: boolean = false;
  @Input() errorWhileVerifyingCertificate?: string | undefined = undefined;
  @Output() onUploadCertificate: EventEmitter<string> = new EventEmitter();

  constructor(private translationService: TranslationService) {}

  t(key: string): string {
    return this.translationService.translate(key);
  }
}
