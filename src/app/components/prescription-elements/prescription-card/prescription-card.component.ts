import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { PrescribedMedicationType } from '../../../types';
import { NgIf } from '@angular/common';
import { EditIcnComponent } from '../../common/icons/edit-icn/edit-icn.component';
import { DeleteIcnComponent } from '../../common/icons/delete-icn/delete-icn.component';

@Component({
  selector: 'app-prescription-card',
  imports: [NgIf, EditIcnComponent, DeleteIcnComponent],
  templateUrl: './prescription-card.component.html',
  styleUrl: './prescription-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
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
