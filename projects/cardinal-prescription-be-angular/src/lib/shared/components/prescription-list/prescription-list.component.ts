import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';

import { PrescriptionRowComponent } from '../../../internal/components/prescription-elements/prescription-card/prescription-card.component';
import { ButtonComponent } from '../../../internal/components/form-elements/button/button.component';

import { TranslationService } from '../../services/translation/translation.service';
import { PrescribedMedicationType } from '../../types';

@Component({
  standalone: true,
  selector: 'cardinal-prescription-list',
  imports: [PrescriptionRowComponent, NgForOf, NgIf, ButtonComponent],
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrescriptionListComponent {
  @Input({ required: true }) prescribedMedications!: PrescribedMedicationType[];

  @Input({ required: true }) sending!: boolean;
  @Input({ required: true }) printing!: boolean;

  @Output() sendPrescriptions = new EventEmitter<void>();
  @Output() sendAndPrintPrescriptions = new EventEmitter<void>();
  @Output() printPrescriptions = new EventEmitter<void>();

  @Output() handleModifyPrescription =
    new EventEmitter<PrescribedMedicationType>();
  @Output() handleDeletePrescription =
    new EventEmitter<PrescribedMedicationType>();

  constructor(private translationService: TranslationService) {}

  t(key: string): string {
    return this.translationService.translate(key);
  }

  get sentPrescriptions() {
    return this.prescribedMedications.filter(item => !!item.rid);
  }

  get pendingPrescriptions(): PrescribedMedicationType[] {
    return this.prescribedMedications.filter(item => !item.rid);
  }

  onClickSend(): void {
    this.sendPrescriptions.emit();
  }

  onClickPrint(): void {
    this.printPrescriptions.emit();
  }

  onClickSendAndPrint(): void {
    this.sendAndPrintPrescriptions.emit();
  }
}
