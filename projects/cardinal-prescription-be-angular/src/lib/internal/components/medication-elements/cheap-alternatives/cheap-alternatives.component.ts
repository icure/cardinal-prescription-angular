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
import { SamSdkService } from '../../../../shared/services/api/sam-sdk.service';

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
  isCheap: boolean = false;

  constructor(private translationService: TranslationService, private samSdkService: SamSdkService) {}

  t = (key: string): string => this.translationService.translate(key);

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  async onMedicationClick(medication: MedicationType): Promise<void> {
    this.isCheap = true;
    this.selectMedication.emit({...medication,
      vmpGroup: medication.vmp?.vmpGroup?.code
      ? (await this.samSdkService.loadVmpGroup(medication.vmp?.vmpGroup?.code))
      : undefined})
  }
}
