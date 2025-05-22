import { Component, Input } from '@angular/core';
import {
  Commercialization,
  Reimbursement,
  SupplyProblem,
} from '@icure/cardinal-be-sam';
import {
  DeliveryModusSpecificationCodeType,
  MedicationType,
  IconComponentType,
} from '../../../types';
import { deliveryModusSpecifications } from '../../../utils/delivery-modus-helpers';
import { formatToDayMonthYear } from '../../../utils/date-helpers';
import { TooltipComponent } from '../../common/tooltip/tooltip.component';
import { SolidPillIcnComponent } from '../../common/icons/solid-pill-icn/solid-pill-icn.component';
import { MoleculeIcnComponent } from '../../common/icons/molecule-icn/molecule-icn.component';
import { LeafIcnComponent } from '../../common/icons/leaf-icn/leaf-icn.component';
import { TriangleIcnComponent } from '../../common/icons/triangle-icn/triangle-icn.component';
import { PillsBottleIcnComponent } from '../../common/icons/pills-bottle-icn/pills-bottle-icn.component';
import { DecimalPipe, NgForOf, NgIf, NgTemplateOutlet } from '@angular/common';
import { PrescriptionIcnComponent } from '../../common/icons/prescription-icn/prescription-icn.component';
import { SupplyIcnComponent } from '../../common/icons/supply-icn/supply-icn.component';
import { EndOfCommercialisationIcnComponent } from '../../common/icons/end-of-commercialisation-icn/end-of-commercialisation-icn.component';
import { StartOfCommercialisationIcnComponent } from '../../common/icons/start-of-commercialisation-icn/start-of-commercialisation-icn.component';
import { ChevronIcnComponent } from '../../common/icons/chevron-icn/chevron-icn.component';

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
export class MedicationCardComponent {
  @Input() medication!: MedicationType;
  @Input() index!: number;
  @Input() focused: boolean = false;
  @Input() medicationSearchDropdownRect: DOMRect | undefined;
  @Input() handleAddPrescription!: (med: MedicationType) => void;

  handleMedicationClick() {
    this.handleAddPrescription(this.medication);
  }
  handleMedicationEnter(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.handleAddPrescription(this.medication);
    }
  }
  isExpanded: boolean = false;

  toggleMedicationDetails() {
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

  get medicationCommercialization(): Commercialization | undefined {
    return this.medication.commercializations?.[0];
  }
  get medicationCommercializationExtraInfo(): string[] | undefined {
    return this.medicationCommercialization?.additionalInformation?.fr?.split(
      '\n'
    );
  }

  get medicationSupplyProblem(): SupplyProblem | undefined {
    return this.medication.supplyProblems?.[0];
  }
  get medicationSupplyProblemExtraInfo(): string[] | undefined {
    return this.medicationSupplyProblem?.additionalInformation?.fr?.split('\n');
  }
  get medicationReimbursement(): Reimbursement | undefined {
    return this.medication.reimbursements;
  }
  getSpecialRegulation(code: number): string {
    switch (code) {
      case 1:
        return 'No narcotic, specially regulated drug';
      case 2:
        return 'Narcotic, specially regulated drug';
      default:
        return 'No special regulation';
    }
  }
  formatTimestamp(timestamp: number): string | undefined {
    return formatToDayMonthYear(timestamp);
  }
  getDeliveryModusLabel(code?: DeliveryModusSpecificationCodeType): string {
    return code ? (deliveryModusSpecifications[code]?.fr ?? code) : '';
  }
}
