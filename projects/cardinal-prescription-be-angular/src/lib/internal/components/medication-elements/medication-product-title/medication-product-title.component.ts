import { Component, Input } from '@angular/core';
import { SolidPillIcnComponent } from '../../common/icons/solid-pill-icn/solid-pill-icn.component';
import { TooltipComponent } from '../../common/tooltip/tooltip.component';
import { TranslationService } from '../../../../shared/services/translation/translation.service';

@Component({
  selector: 'cardinal-medication-product-title',
  imports: [SolidPillIcnComponent, TooltipComponent],
  templateUrl: './medication-product-title.component.html',
  styleUrl: './medication-product-title.component.scss',
})
export class MedicationProductTitleComponent {
  @Input({ required: true }) productTitle!: string;

  constructor(private translationService: TranslationService) {}

  t = (key: string): string => this.translationService.translate(key);
}
