import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import {
  Commercialization,
  Reimbursement,
  SamText,
} from '@icure/cardinal-be-sam-sdk';
import { MedicationType } from '../../../../shared/types';
import { TooltipComponent } from '../../common/tooltip/tooltip.component';
import { SolidPillIcnComponent } from '../../common/icons/solid-pill-icn/solid-pill-icn.component';
import { MoleculeIcnComponent } from '../../common/icons/molecule-icn/molecule-icn.component';
import { LeafIcnComponent } from '../../common/icons/leaf-icn/leaf-icn.component';
import { NgIf, NgTemplateOutlet } from '@angular/common';
import { ChevronIcnComponent } from '../../common/icons/chevron-icn/chevron-icn.component';
import { TranslationService } from '../../../../shared/services/translation/translation.service';
import { MedicationInfographicsComponent } from '../medication-infographics/medication-infographics.component';
import { TextToIconComponent } from '../../common/text-to-icon/text-to-icon.component';

@Component({
  selector: 'cardinal-medication-card',
  standalone: true,
  imports: [
    TooltipComponent,
    NgIf,
    ChevronIcnComponent,
    NgTemplateOutlet,
    SolidPillIcnComponent,
    MoleculeIcnComponent,
    LeafIcnComponent,
    MedicationInfographicsComponent,
    TextToIconComponent,
  ],
  templateUrl: './medication-card.component.html',
  styleUrls: ['./medication-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MedicationCardComponent implements OnInit {
  @Input({ required: true }) medication!: MedicationType;
  @Input({ required: true }) index!: number;
  @Input() focused?: boolean = false;
  @Input() readOnly?: boolean = false;

  @Output() addPrescription = new EventEmitter<MedicationType>();

  @ViewChild(MedicationInfographicsComponent)
  infographicsComponent?: MedicationInfographicsComponent;

  constructor(
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {}

  language: keyof SamText = 'fr';
  isExpanded: boolean = false;

  t = (key: string): string => this.translationService.translate(key);

  commercialization?: Commercialization;
  reimbursement?: Reimbursement;

  vmpName?: string;
  vmpGroupName?: string;

  cheap?: boolean;
  cheapest?: boolean;

  handleMedicationClick(): void {
    if (!this.readOnly) {
      this.addPrescription.emit(this.medication); // emit the card's medication
    }
  }

  ngOnInit(): void {
    this.language = this.translationService.getCurrentLanguage();

    this.commercialization = this.medication.commercializations?.[0];
    this.reimbursement = this.medication.reimbursements;

    this.vmpName = this.getTranslatedText(this.medication?.vmp?.name);

    this.vmpGroupName = this.getTranslatedText(
      this.medication?.vmp?.vmpGroup?.name
    );

    this.cheap = this.medication.cheap;
    this.cheapest = this.medication.cheapest;
  }

  toggleMedicationDetails(): void {
    this.isExpanded = !this.isExpanded;
    this.cdr.markForCheck();
  }

  get showLinks(): boolean {
    const m = this.medication;
    return !!(
      m.crmLink ||
      m.patientInformationLeafletLink ||
      m.rmaProfessionalLink ||
      m.spcLink ||
      m.dhpcLink
    );
  }

  getTranslatedText(
    text?: SamText,
    lang = this.language,
    fallback = 'fr' as keyof SamText
  ): string | undefined {
    return text?.[lang] ?? text?.[fallback];
  }
}
