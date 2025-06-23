import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  Commercialization,
  Reimbursement,
  SamText,
  SupplyProblem,
} from '@icure/cardinal-be-sam';
import {
  DeliveryModusSpecificationCodeType,
  MedicationType,
} from '../../../types';
import { formatToDayMonthYear } from '../../../utils/date-helpers';
import { TooltipComponent } from '../../common/tooltip/tooltip.component';
import { SolidPillIcnComponent } from '../../common/icons/solid-pill-icn/solid-pill-icn.component';
import { MoleculeIcnComponent } from '../../common/icons/molecule-icn/molecule-icn.component';
import { LeafIcnComponent } from '../../common/icons/leaf-icn/leaf-icn.component';
import { TriangleIcnComponent } from '../../common/icons/triangle-icn/triangle-icn.component';
import { PillsBottleIcnComponent } from '../../common/icons/pills-bottle-icn/pills-bottle-icn.component';
import { NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { PrescriptionIcnComponent } from '../../common/icons/prescription-icn/prescription-icn.component';
import { SupplyIcnComponent } from '../../common/icons/supply-icn/supply-icn.component';
import { EndOfCommercialisationIcnComponent } from '../../common/icons/end-of-commercialisation-icn/end-of-commercialisation-icn.component';
import { StartOfCommercialisationIcnComponent } from '../../common/icons/start-of-commercialisation-icn/start-of-commercialisation-icn.component';
import { ChevronIcnComponent } from '../../common/icons/chevron-icn/chevron-icn.component';
import { TranslationService } from '../../../services/translation/translation.service';
import { getDeliveryModusLabel } from '../../../utils/delivery-modus-helpers';

@Component({
  selector: 'app-medication-card',
  standalone: true,
  imports: [
    TooltipComponent,
    NgIf,
    NgForOf,
    ChevronIcnComponent,
    NgTemplateOutlet,
    SolidPillIcnComponent,
    MoleculeIcnComponent,
    LeafIcnComponent,
    TriangleIcnComponent,
    PillsBottleIcnComponent,
    PrescriptionIcnComponent,
    SupplyIcnComponent,
    EndOfCommercialisationIcnComponent,
    StartOfCommercialisationIcnComponent,
  ],
  templateUrl: './medication-card.component.html',
  styleUrl: './medication-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MedicationCardComponent implements OnInit {
  @Input({ required: true }) medication!: MedicationType;
  @Input({ required: true }) index!: number;
  @Input() focused?: boolean = false;

  @Output() addPrescription = new EventEmitter<MedicationType>();

  constructor(
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {}

  language: keyof SamText = 'fr';
  isExpanded: boolean = false;

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

  vmpName?: string;
  vmpGroupName?: string;

  handleMedicationClick(): void {
    this.addPrescription.emit(this.medication); // emit the card's medication
  }

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

    this.vmpName = this.getTranslatedText(this.medication?.vmp?.name);

    this.vmpGroupName = this.getTranslatedText(
      this.medication?.vmp?.vmpGroup?.name
    );
  }

  toggleMedicationDetails(): void {
    this.isExpanded = !this.isExpanded;
    this.cdr.markForCheck();
  }

  get showChevron(): boolean {
    const m = this.medication;
    return !!(
      m.crmLink ||
      m.patientInformationLeafletLink ||
      m.rmaProfessionalLink ||
      m.spcLink ||
      m.dhpcLink
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

  getDeliveryModusLabel(code?: DeliveryModusSpecificationCodeType): string {
    return getDeliveryModusLabel(code, this.t);
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
