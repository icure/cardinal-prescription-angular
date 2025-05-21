import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CertificateStatusComponent } from '../certificate-status/certificate-status.component';
import { NgIf } from '@angular/common';
import { CertificateUploadComponent } from '../certificate-upload/certificate-upload.component';
import { PrescribedMedicationType } from '../../../types';

@Component({
  selector: 'app-practitioner-certificate',
  imports: [CertificateStatusComponent, NgIf, CertificateUploadComponent],
  templateUrl: './practitioner-certificate.component.html',
  styleUrl: './practitioner-certificate.component.scss',
})
export class PractitionerCertificateComponent {
  @Input() certificateValid: boolean = false;
  @Output() onUploadCertificate: EventEmitter<string> = new EventEmitter();

  certificateStatusFeedback = {
    success: {
      title: 'Téléchargement du certificat réussi',
      description:
        'Le certificat du praticien a été téléchargé avec succès et le mot de passe a été enregistré en toute sécurité. Vous pouvez maintenant poursuivre les prochaines étapes.',
    },
    error: {
      title: 'Échec du téléchargement du certificat',
      description:
        "Une erreur est survenue lors du téléchargement du certificat du praticien ou de l'enregistrement du mot de passe. Veuillez vous assurer que le certificat est valide et réessayez. Si le problème persiste, contactez le support.",
    },
  };
}
