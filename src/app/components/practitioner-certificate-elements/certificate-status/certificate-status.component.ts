import { Component, Input } from '@angular/core';
import { StatusSuccessComponent } from '../../common/icons/status-success/status-success.component';
import { StatusErrorComponent } from '../../common/icons/status-error/status-error.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-certificate-status',
  imports: [StatusSuccessComponent, StatusErrorComponent, NgIf],
  templateUrl: './certificate-status.component.html',
  styleUrl: './certificate-status.component.scss',
})
export class CertificateStatusComponent {
  @Input() status!: 'error' | 'success';
  @Input() title!: string;
  @Input() description!: string;
}
