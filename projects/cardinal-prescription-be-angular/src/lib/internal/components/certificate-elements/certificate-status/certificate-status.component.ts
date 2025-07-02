import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { StatusSuccessComponent } from '../../common/icons/status-success/status-success.component';
import { StatusErrorComponent } from '../../common/icons/status-error/status-error.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'cardinal-certificate-status',
  imports: [StatusSuccessComponent, StatusErrorComponent, NgIf],
  templateUrl: './certificate-status.component.html',
  styleUrl: './certificate-status.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CertificateStatusComponent {
  @Input({ required: true }) status!: 'error' | 'success';
  @Input({ required: true }) title!: string;
  @Input({ required: true }) description!: string;
}
