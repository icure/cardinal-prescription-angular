import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import {
  Commercialization,
  Reimbursement,
  SamText,
  SupplyProblem,
} from '@icure/cardinal-be-sam-sdk';
import { MedicationType } from '../../../../shared/types';
import { TranslationService } from '../../../../shared/services/translation/translation.service';
import { formatToDayMonthYear } from '../../../utils/date-helpers';
import { getCategoryLabelForReimbursement } from '../../../utils/reimbursement-helpers';
import { TooltipComponent } from '../../common/tooltip/tooltip.component';
import { TriangleIcnComponent } from '../../common/icons/triangle-icn/triangle-icn.component';
import { PillsBottleIcnComponent } from '../../common/icons/pills-bottle-icn/pills-bottle-icn.component';
import { PrescriptionIcnComponent } from '../../common/icons/prescription-icn/prescription-icn.component';
import { MoneyBagIcnComponent } from '../../common/icons/money-bag-icn/money-bag-icn.component';
import { SupplyIcnComponent } from '../../common/icons/supply-icn/supply-icn.component';
import { EndOfCommercialisationIcnComponent } from '../../common/icons/end-of-commercialisation-icn/end-of-commercialisation-icn.component';
import { StartOfCommercialisationIcnComponent } from '../../common/icons/start-of-commercialisation-icn/start-of-commercialisation-icn.component';
import { TextToIconComponent } from '../../common/text-to-icon/text-to-icon.component';

@Component({
  selector: 'cardinal-medication-infographics',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass,
    TooltipComponent,
    TriangleIcnComponent,
    PillsBottleIcnComponent,
    PrescriptionIcnComponent,
    MoneyBagIcnComponent,
    SupplyIcnComponent,
    EndOfCommercialisationIcnComponent,
    StartOfCommercialisationIcnComponent,
    TextToIconComponent,
  ],
  templateUrl: './medication-infographics.component.html',
  styleUrls: ['./medication-infographics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MedicationInfographicsComponent implements OnInit {
  @Input({ required: true }) medication!: MedicationType;

  @ViewChild('cheapMedicationContent')
  cheapMedicationContent?: TemplateRef<any>;
  @ViewChild('reimbursementsContent')
  reimbursementsContent?: TemplateRef<any>;
  @ViewChild('deliveryConditionsContent')
  deliveryConditionsContent?: TemplateRef<any>;
  @ViewChild('prescriptionConditionsContent')
  prescriptionConditionsContent?: TemplateRef<any>;
  @ViewChild('supplyProblemsContent')
  supplyProblemsContent?: TemplateRef<any>;
  @ViewChild('endOfCommercialisationContent')
  endOfCommercialisationContent?: TemplateRef<any>;
  @ViewChild('startOfCommercialisationContent')
  startOfCommercialisationContent?: TemplateRef<any>;

  constructor(private translationService: TranslationService) {}

  language: keyof SamText = 'fr';
  t = (key: string): string => this.translationService.translate(key);

  commercialization?: Commercialization;
  supplyProblem?: SupplyProblem;
  reimbursement?: Reimbursement;

  commercializationExtraInfo?: string[];
  commercializationEnd?: string;
  commercializationReason?: string;
  commercializationImpact?: string;

  supplyProblemExtraInfo?: string[];
  supplyProblemReason?: string;
  supplyProblemImpact?: string;

  reimbursementCriterion?: string;

  ngOnInit(): void {
    this.language = this.translationService.getCurrentLanguage();

    this.commercialization = this.medication.commercializations?.[0];
    this.supplyProblem = this.medication.supplyProblems?.[0];
    this.reimbursement = this.medication.reimbursements;

    this.commercializationExtraInfo = this.getTranslatedText(
      this.commercialization?.additionalInformation
    )?.split('\n');

    this.commercializationEnd = this.getTranslatedText(
      this.commercialization?.endOfComercialization
    );

    this.commercializationReason = this.getTranslatedText(
      this.commercialization?.reason
    );

    this.commercializationImpact = this.getTranslatedText(
      this.commercialization?.impact
    );

    this.supplyProblemExtraInfo = this.getTranslatedText(
      this.supplyProblem?.additionalInformation
    )?.split('\n');

    this.supplyProblemReason = this.getTranslatedText(
      this.supplyProblem?.reason
    );

    this.supplyProblemImpact = this.getTranslatedText(
      this.supplyProblem?.impact
    );

    this.reimbursementCriterion = this.getTranslatedText(
      this.reimbursement?.reimbursementCriterion?.description
    );
  }

  getSpecialRegulation(code: number): string {
    switch (code) {
      case 1:
        return this.t('medication.drugSpecialRegulation.noNarcoticRegulation');
      case 2:
        return this.t('medication.drugSpecialRegulation.narcoticRegulation');
      default:
        return this.t('medication.drugSpecialRegulation.noSpecialRegulation');
    }
  }

  formatTimestamp(timestamp: number): string | undefined {
    return formatToDayMonthYear(timestamp);
  }

  getCategoryLabelForReimbursement(code?: string): string {
    return getCategoryLabelForReimbursement(code, this.t);
  }

  computeFeeAmount(fee: string): string {
    return Math.round(+fee * 100) / 100 + '€';
  }

  getTranslatedText(
    text?: SamText,
    lang = this.language,
    fallback = 'fr' as keyof SamText
  ): string | undefined {
    return text?.[lang] ?? text?.[fallback];
  }
}
