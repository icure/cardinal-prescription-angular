import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MedicationType } from '../../../../shared/types';
import { ChevronIcnComponent } from '../../common/icons/chevron-icn/chevron-icn.component';
import { WarningIcnComponent } from '../../common/icons/warning-icn/warning-icn.component';
import { TranslationService } from '../../../../shared/services/translation/translation.service';

@Component({
  selector: 'cardinal-cheap-alternatives',
  standalone: true,
  imports: [NgIf, NgFor, ChevronIcnComponent, WarningIcnComponent],
  templateUrl: './cheap-alternatives.component.html',
  styleUrls: ['./cheap-alternatives.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheapAlternativesComponent {
  @Input({ required: true }) medications!: MedicationType[];
  @Output() selectMedication = new EventEmitter<MedicationType>();

  isExpanded: boolean = false;

  constructor(private translationService: TranslationService) {}

  t = (key: string): string => this.translationService.translate(key);

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  onMedicationClick(medication: MedicationType): void {
    this.selectMedication.emit(medication);
  }
}
