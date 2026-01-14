import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {
  marshal,
  RegimenItem as ParsedRegimenItem,
} from '@icure/medication-sdk';
import { ChevronIcnComponent } from '../../common/icons/chevron-icn/chevron-icn.component';
import { WarningIcnComponent } from '../../common/icons/warning-icn/warning-icn.component';
import { TranslationService } from '../../../../shared/services/translation/translation.service';

@Component({
  selector: 'cardinal-standard-dosages',
  standalone: true,
  imports: [NgIf, NgFor, ChevronIcnComponent, WarningIcnComponent],
  templateUrl: './standard-dosages.component.html',
  styleUrls: ['./standard-dosages.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandardDosagesComponent {
  @Input({ required: true }) dosages!: ParsedRegimenItem[];
  @Input({ required: true }) language!: 'fr' | 'nl' | 'de' | 'en';

  @Output() selectDosage = new EventEmitter<ParsedRegimenItem>();

  isExpanded: boolean = false;

  constructor(private translationService: TranslationService) {}

  t = (key: string): string => this.translationService.translate(key);

  toggleExpanded(): void {
    this.isExpanded = !this.isExpanded;
  }

  async onDosageClick(dosage: ParsedRegimenItem): Promise<void> {
    this.selectDosage.emit(dosage)
  }

  protected readonly marshal = marshal;
}
