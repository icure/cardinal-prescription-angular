import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { PrescribedMedicationType } from '../../../../shared/types';
import { NgIf } from '@angular/common';
import { EditIcnComponent } from '../../common/icons/edit-icn/edit-icn.component';
import { DeleteIcnComponent } from '../../common/icons/delete-icn/delete-icn.component';
import { MagistralText } from '@icure/be-fhc-lite-api';

@Component({
  selector: 'cardinal-prescription-card',
  imports: [NgIf, EditIcnComponent, DeleteIcnComponent],
  templateUrl: './prescription-card.component.html',
  styleUrls: ['./prescription-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PrescriptionRowComponent {
  @Input({ required: true }) prescribedMedication!: PrescribedMedicationType;
  @Output() handleModifyPrescription: EventEmitter<PrescribedMedicationType> =
    new EventEmitter();
  @Output() handleDeletePrescription: EventEmitter<PrescribedMedicationType> =
    new EventEmitter();

  get prescriptionTitle(): string | undefined {
    const med = this.prescribedMedication?.medication;
    return (
      med?.medicinalProduct?.intendedname ||
      med?.substanceProduct?.intendedname ||
      med?.compoundPrescription ||
      (med?.compoundPrescriptionV2 as MagistralText)?.text
    );
  }

  onModifyClick() {
    this.handleModifyPrescription.emit(this.prescribedMedication);
  }

  onDeleteClick() {
    this.handleDeletePrescription.emit(this.prescribedMedication);
  }
}
