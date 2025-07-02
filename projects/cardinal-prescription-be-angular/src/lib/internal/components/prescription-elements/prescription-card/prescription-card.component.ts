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

@Component({
  selector: 'cardinal-prescription-card',
  imports: [NgIf, EditIcnComponent, DeleteIcnComponent],
  templateUrl: './prescription-card.component.html',
  styleUrl: './prescription-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PrescriptionRowComponent {
  @Input({ required: true }) prescribedMedication!: PrescribedMedicationType;
  @Output() handleModifyPrescription: EventEmitter<PrescribedMedicationType> =
    new EventEmitter();
  @Output() handleDeletePrescription: EventEmitter<PrescribedMedicationType> =
    new EventEmitter();

  onModifyClick() {
    this.handleModifyPrescription.emit(this.prescribedMedication);
  }

  onDeleteClick() {
    this.handleDeletePrescription.emit(this.prescribedMedication);
  }
}
