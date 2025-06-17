import { Component, Input, OnInit } from '@angular/core';
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
})
export class MedicationCardComponent implements OnInit {
  @Input() medication!: MedicationType;
  @Input() index!: number;
  @Input() focused: boolean = false;
  @Input() medicationSearchDropdownRect: DOMRect | undefined;
  @Input() handleAddPrescription!: (med: MedicationType) => void;

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

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.language = this.translationService.getCurrentLanguage();

    this.commercialization = this.medication.commercializations?.[0];
    this.supplyProblem = this.medication.supplyProblems?.[0];
    this.reimbursement = this.medication.reimbursements;

    const defaultLang = 'fr';

    this.commercializationExtraInfo = (
      this.commercialization?.additionalInformation?.[this.language] ??
      this.commercialization?.additionalInformation?.[defaultLang]
    )?.split('\n');

    this.commercializationEnd =
      this.commercialization?.endOfComercialization?.[this.language] ??
      this.commercialization?.endOfComercialization?.[defaultLang];

    this.commercializationReason =
      this.commercialization?.reason?.[this.language] ??
      this.commercialization?.reason?.[defaultLang];

    this.commercializationImpact =
      this.commercialization?.impact?.[this.language] ??
      this.commercialization?.impact?.[defaultLang];

    this.supplyProblemExtraInfo = (
      this.supplyProblem?.additionalInformation?.[this.language] ??
      this.supplyProblem?.additionalInformation?.[defaultLang]
    )?.split('\n');

    this.supplyProblemReason =
      this.supplyProblem?.reason?.[this.language] ??
      this.supplyProblem?.reason?.[defaultLang];

    this.supplyProblemImpact =
      this.supplyProblem?.impact?.[this.language] ??
      this.supplyProblem?.impact?.[defaultLang];

    this.reimbursementCriterion =
      this.reimbursement?.reimbursementCriterion?.description?.[
        this.language
      ] ??
      this.reimbursement?.reimbursementCriterion?.description?.[defaultLang];

    this.vmpName =
      this.medication?.vmp?.name?.[this.language] ??
      this.medication?.vmp?.name?.[defaultLang];

    this.vmpGroupName =
      this.medication?.vmp?.vmpGroup?.name?.[this.language] ??
      this.medication?.vmp?.vmpGroup?.name?.[defaultLang];
  }

  handleMedicationClick(): void {
    this.handleAddPrescription(this.medication);
  }

  handleMedicationEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') this.handleAddPrescription(this.medication);
  }

  toggleMedicationDetails(): void {
    this.isExpanded = !this.isExpanded;
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
}
