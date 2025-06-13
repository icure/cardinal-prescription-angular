import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PrescriptionRowComponent } from '../prescription-card/prescription-card.component';
import { NgForOf, NgIf } from '@angular/common';
import { PrescribedMedicationType } from '../../../types';
import { ButtonComponent } from '../../form-elements/button/button.component';
import { TranslationService } from '../../../services/translation/translation.service';

@Component({
  selector: 'app-prescription-list',
  imports: [PrescriptionRowComponent, NgForOf, NgIf, ButtonComponent],
  templateUrl: './prescription-list.component.html',
  styleUrl: './prescription-list.component.scss',
})
export class PrescriptionListComponent {
  @Input() prescribedMedications!: PrescribedMedicationType[];
  @Input() onSendPrescriptions!: () => Promise<void>;
  @Input() onSendAndPrintPrescriptions!: () => Promise<void>;
  @Input() onPrintPrescriptions!: () => void;

  @Output() handleModifyPrescription: EventEmitter<PrescribedMedicationType> =
    new EventEmitter();
  @Output() handleDeletePrescription: EventEmitter<PrescribedMedicationType> =
    new EventEmitter();

  constructor(private translationService: TranslationService) {}

  t(key: string): string {
    return this.translationService.translate(key);
  }

  printing = false;
  sending = false;

  get sentPrescriptions() {
    return this.prescribedMedications.filter(item => !!item.rid);
  }

  get pendingPrescriptions() {
    return this.prescribedMedications.filter(item => !item.rid);
  }

  spinPrint(): void {
    this.printing = true;
    this.onSendAndPrintPrescriptions().finally(() => {
      this.printing = false;
    });
  }

  spinSend(): void {
    this.sending = true;
    this.onSendPrescriptions().finally(() => {
      this.sending = false;
    });
  }
}
