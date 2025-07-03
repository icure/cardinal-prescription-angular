import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NgIf } from '@angular/common';
import { HealthcareParty } from '@icure/be-fhc-lite-api';

import { CertificateStatusComponent } from '../../../internal/components/certificate-elements/certificate-status/certificate-status.component';
import { CertificateUploadComponent } from '../../../internal/components/certificate-elements/certificate-upload/certificate-upload.component';

import { TranslationService } from '../../services/translation/translation.service';

@Component({
  selector: 'cardinal-practitioner-certificate',
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
