import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NonNullableFormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { makeParser, marshal } from '@icure/medication-sdk';
import { SamText } from '@icure/cardinal-be-sam-sdk';

import { ButtonComponent } from '../../../internal/components/form-elements/button/button.component';
import { TextInputComponent } from '../../../internal/components/form-elements/text-input/text-input.component';
import { SelectInputComponent } from '../../../internal/components/form-elements/select-input/select-input.component';
import { RadioInputComponent } from '../../../internal/components/form-elements/radio-input/radio-input.component';
import { ToggleSwitchComponent } from '../../../internal/components/form-elements/toggle-switch/toggle-switch.component';
import { TextareaInputComponent } from '../../../internal/components/form-elements/textarea-input/textarea-input.component';
import { CloseIcnComponent } from '../../../internal/components/common/icons/close-icn/close-icn.component';
import {
  PharmacistVisibilityType,
  PractitionerVisibilityType,
} from '../../../internal/types';
import {
  getTreatmentStartDate,
  getExecutableUntilDate,
} from '../../../internal/utils/date-helpers';
import {
  durationTimeUnitsEnum,
  getDurationFromDays,
  getDurationTimeUnits,
  getPeriodicityTimeUnits,
  periodicityTimeUnitsEnum,
} from '../../../internal/utils/prescription-duration-helpers';
import {
  getPractitionerVisibilityOptions,
  getPharmacistVisibilityOptions,
} from '../../../internal/utils/visibility-helpers';
import {
  CreatePrescriptionService,
  StandardDosageContext,
} from '../../../internal/services/prescription/create-prescription.service';
import { ReimbursementType } from '../../../internal/types/reimbursement';
import { getReimbursementOptions } from '../../../internal/utils/reimbursement-helpers';

import { TranslationService } from '../../services/translation/translation.service';
import { MedicationType, PrescribedMedicationType } from '../../types';
import { MagistralText } from '@icure/be-fhc-lite-api';
import { MedicationCardComponent } from '../../../internal/components/medication-elements/medication-card/medication-card.component';
import { CheapAlternativesComponent } from '../../../internal/components/medication-elements/cheap-alternatives/cheap-alternatives.component';

@Component({
  selector: 'cardinal-prescription-modal',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
    TextInputComponent,
    TextareaInputComponent,
    SelectInputComponent,
    RadioInputComponent,
    ToggleSwitchComponent,
    CloseIcnComponent,
    MedicationCardComponent,
    CheapAlternativesComponent,
  ],
  templateUrl: './prescription-modal.component.html',
  styleUrls: ['./prescription-modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrescriptionModalComponent
  implements OnInit, OnChanges, OnDestroy
{
  @Input({ required: true }) modalTitle!: string;
  @Input() medicationToPrescribe?: MedicationType;
  @Input() prescriptionToModify?: PrescribedMedicationType;
  @Input() alternativeCheapMedications?: MedicationType[];
  @Input() standardDosageContext?: StandardDosageContext;

  @Output() handleSubmit = new EventEmitter<PrescribedMedicationType[]>();
  @Output() handleCancel = new EventEmitter<void>();

  constructor(
    private fb: NonNullableFormBuilder,
    private createPrescriptionService: CreatePrescriptionService,
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {}

  readonly t = (key: string): string => {
    return this.translationService.translate(key);
  };

  language: keyof SamText = 'fr';

  prescriptionForm!: FormGroup;
  private subscriptions: Subscription[] = [];

  practitionerVisibilityOptions: {
    value: PractitionerVisibilityType;
    label: string;
  }[] = [];
  pharmacistVisibilityOptions: {
    value: PharmacistVisibilityType;
    label: string;
  }[] = [];
  reimbursementOptions: { value: ReimbursementType; label: string }[] = [];
  durationTimeUnits: {
    value: durationTimeUnitsEnum;
    label: string;
  }[] = [];
  periodicityTimeUnits: {
    value: periodicityTimeUnitsEnum;
    label: string;
  }[] = [];

  recipeInstructionForPatientLabel?: string;
  selectedReimbursementLabel?: string;
  selectedPractitionerVisibilityLabel?: string;
  selectedPharmacistVisibilityLabel?: string;

  focusedDosageIndex = -1;
  dosageSuggestions: string[] = [];
  disableHover = false;

  ngOnInit(): void {
    this.language = this.translationService.getCurrentLanguage();

    this.practitionerVisibilityOptions = getPractitionerVisibilityOptions(
      this.t
    );
    this.pharmacistVisibilityOptions = getPharmacistVisibilityOptions(this.t);
    this.reimbursementOptions = getReimbursementOptions(this.t);
    this.durationTimeUnits = getDurationTimeUnits(this.t);
    this.periodicityTimeUnits = getPeriodicityTimeUnits(this.t);

    this.selectedPractitionerVisibilityLabel =
      this.practitionerVisibilityOptions[0].label;
    this.selectedPharmacistVisibilityLabel =
      this.pharmacistVisibilityOptions[0].label;
    this.selectedReimbursementLabel = this.reimbursementOptions[0].label;

    this.initForm();
    this.subscribeToValidationChanges();
    this.subscribeToLabelChanges();

    this.setupDosageSuggestionLogic();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['prescriptionToModify'] &&
      changes['prescriptionToModify'].currentValue !==
        changes['prescriptionToModify'].previousValue
    ) {
      this.initForm();
      this.cdr.markForCheck();
    }
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private getInitialFormValues(): Record<string, unknown> {
    const standardDosage = this.medicationToPrescribe?.standardDosage ? this.createPrescriptionService.createPosologyFromStandardDosage(this.medicationToPrescribe?.standardDosage, this.standardDosageContext ?? {}) : undefined;
    const renderedStandardDosage = standardDosage ? standardDosage.map((sd) => marshal(sd, this.language)).join(', ') : undefined;

    const medicationTitleValue =
      this.medicationToPrescribe?.title ??
      this.prescriptionToModify?.medication.medicinalProduct?.intendedname ??
      this.prescriptionToModify?.medication.substanceProduct?.intendedname ??
      this.prescriptionToModify?.medication.compoundPrescription ??
      (
        this.prescriptionToModify?.medication
          .compoundPrescriptionV2 as MagistralText
      )?.text ??
      '';

    return {
      medicationTitle: {
        value: medicationTitleValue,
        disabled: true,
      },
      dosage: this.prescriptionToModify?.medication.instructionForPatient ?? renderedStandardDosage ?? '',
      duration:
        getDurationFromDays(
          this.prescriptionToModify?.medication.duration?.value ?? 1
        ).duration ?? 1,
      durationTimeUnit:
        getDurationFromDays(
          this.prescriptionToModify?.medication.duration?.value ?? 1
        ).durationTimeUnit ?? this.durationTimeUnits[0]?.value,
      treatmentStartDate: getTreatmentStartDate(this.prescriptionToModify),
      executableUntil: getExecutableUntilDate(this.prescriptionToModify),
      prescriptionsNumber: 1,
      substitutionAllowed:
        this.prescriptionToModify?.medication.substitutionAllowed ?? false,
      showExtraFields: false,
      periodicityTimeUnit: this.periodicityTimeUnits[0]?.value,
      periodicityDaysNumber: 1,
      recipeInstructionForPatient:
        this.prescriptionToModify?.medication.recipeInstructionForPatient,
      instructionsForReimbursement:
        this.prescriptionToModify?.medication.instructionsForReimbursement ??
        this.reimbursementOptions?.[0]?.value,
      prescriberVisibility:
        this.prescriptionToModify?.prescriberVisibility ??
        this.practitionerVisibilityOptions?.[0]?.value,
      pharmacistVisibility:
        this.prescriptionToModify?.pharmacistVisibility ??
        this.pharmacistVisibilityOptions?.[0]?.value,
    };
  }
  private initForm(): void {
    this.prescriptionForm = this.fb.group(this.getInitialFormValues());

    this.recipeInstructionForPatientLabel =
      this.prescriptionToModify?.medication.recipeInstructionForPatient ??
      this.t('prescription.form.instructionLabelNone');

    if (this.prescriptionToModify?.medication.instructionsForReimbursement) {
      this.selectedReimbursementLabel = this.getLabel(
        this.reimbursementOptions!,
        this.prescriptionToModify.medication.instructionsForReimbursement
      );
    }
    if (this.prescriptionToModify?.prescriberVisibility) {
      this.selectedPractitionerVisibilityLabel = this.getLabel(
        this.practitionerVisibilityOptions!,
        this.prescriptionToModify.prescriberVisibility
      );
    }
    if (this.prescriptionToModify?.pharmacistVisibility) {
      this.selectedPharmacistVisibilityLabel = this.getLabel(
        this.pharmacistVisibilityOptions!,
        this.prescriptionToModify.pharmacistVisibility
      );
    }
    this.cdr.markForCheck();
  }

  private getLabel(
    options: { value: string | null; label: string }[],
    value: string | null
  ): string {
    return (
      options.find(opt => opt.value === value)?.label ??
      this.t('prescription.form.instructionLabelNone')
    );
  }

  getControl(name: string) {
    return this.prescriptionForm.get(name);
  }

  getErrorMessage(fieldName: string): string | undefined {
    const control = this.getControl(fieldName);
    if (control?.valid || !control?.touched || control?.disabled)
      return undefined;
    if (control?.errors?.['required'])
      return this.t('prescription.form.fieldRequired');
    return this.t('prescription.form.fieldInvalid');
  }

  onSubmit() {
    if (this.prescriptionForm.invalid) {
      this.prescriptionForm.markAllAsTouched();
      return;
    }
    const prescribedMedications =
      this.createPrescriptionService.createPrescribedMedication(
        this.prescriptionForm.value,
        this.prescriptionToModify,
        this.medicationToPrescribe
      );
    this.handleSubmit.emit(prescribedMedications);
    this.prescriptionForm.reset();

    // this.cdr.markForCheck();
  }

  onCancel() {
    this.handleCancel.emit();
    this.prescriptionForm.reset();
    this.cdr.markForCheck();
  }

  private subscribeToValidationChanges(): void {
    const prescriptionsNumberCtrl = this.getControl('prescriptionsNumber');
    const periodicityTimeUnitCtrl = this.getControl('periodicityTimeUnit');

    if (prescriptionsNumberCtrl && periodicityTimeUnitCtrl) {
      this.subscriptions.push(
        prescriptionsNumberCtrl.valueChanges.subscribe(() =>
          this.updatePeriodicityValidators()
        ),
        periodicityTimeUnitCtrl.valueChanges.subscribe(() =>
          this.updatePeriodicityValidators()
        )
      );
    }

    this.updatePeriodicityValidators();
    this.cdr.markForCheck();
  }

  private updatePeriodicityValidators(): void {
    const prescriptionsNumber = this.getControl('prescriptionsNumber')?.value;
    const periodicityTimeUnit = this.getControl('periodicityTimeUnit')?.value;
    const periodicityTimeUnitCtrl = this.getControl('periodicityTimeUnit');
    const periodicityDaysNumberCtrl = this.getControl('periodicityDaysNumber');

    if (prescriptionsNumber > 1) {
      periodicityTimeUnitCtrl?.setValidators([Validators.required]);
    } else {
      periodicityTimeUnitCtrl?.clearValidators();
    }
    periodicityTimeUnitCtrl?.updateValueAndValidity({ emitEvent: false });

    if (prescriptionsNumber && periodicityTimeUnit === '1') {
      periodicityDaysNumberCtrl?.setValidators([Validators.required]);
    } else {
      periodicityDaysNumberCtrl?.clearValidators();
    }
    periodicityDaysNumberCtrl?.updateValueAndValidity({ emitEvent: false });
    this.cdr.markForCheck();
  }

  private subscribeToLabelChanges(): void {
    const reimbursementCtrl = this.getControl('instructionsForReimbursement');
    const practitionerCtrl = this.getControl('prescriberVisibility');
    const pharmacistCtrl = this.getControl('pharmacistVisibility');
    const recipeInstructionCtrl = this.getControl(
      'recipeInstructionForPatient'
    );

    if (
      reimbursementCtrl &&
      practitionerCtrl &&
      pharmacistCtrl &&
      recipeInstructionCtrl
    ) {
      this.subscriptions.push(
        reimbursementCtrl.valueChanges.subscribe(value => {
          this.selectedReimbursementLabel = this.getLabel(
            this.reimbursementOptions!,
            value
          );
        }),
        practitionerCtrl.valueChanges.subscribe(value => {
          this.selectedPractitionerVisibilityLabel = this.getLabel(
            this.practitionerVisibilityOptions!,
            value
          );
        }),
        pharmacistCtrl.valueChanges.subscribe(value => {
          this.selectedPharmacistVisibilityLabel = this.getLabel(
            this.pharmacistVisibilityOptions!,
            value
          );
        }),
        recipeInstructionCtrl.valueChanges.subscribe(value => {
          this.recipeInstructionForPatientLabel = value;
        })
      );
    }
    this.cdr.markForCheck();
  }

  private setupDosageSuggestionLogic(): void {
    const dosageControl = this.getControl('dosage');
    if (!dosageControl) return;

    const { completePosology: completeDosage } = makeParser(this.language);

    this.subscriptions.push(
      dosageControl.valueChanges.subscribe((newValue: string) => {
        const snapshot = (newValue ?? '') as string;

        // If it's truly empty, keep previous behavior: no suggestions.
        if (snapshot === '') {
          this.dosageSuggestions = [];
          this.cdr.markForCheck();
          return;
        }

        setTimeout(() => {
          // Only act if value hasn't changed since we captured it
          if (dosageControl.value !== snapshot) return;
          this.dosageSuggestions = completeDosage(snapshot) ?? [];
          this.cdr.markForCheck();
        }, 100);
      })
    );
  }

  // Longest suffix(a) == prefix(b) overlap (case-insensitive, ignores trailing spaces in a)
  private suffixPrefixOverlap(a: string, b: string): number {
    const aTrim = a.replace(/\s+$/, '');
    const max = Math.min(aTrim.length, b.length);
    for (let k = max; k > 0; k--) {
      if (aTrim.slice(-k).toLowerCase() === b.slice(0, k).toLowerCase())
        return k;
    }
    return 0;
  }

  validateSuggestion(index: number): void {
    const dosageCtrl = this.getControl('dosage');
    const dosage = dosageCtrl?.value;
    const suggestion = this.dosageSuggestions[index];

    if (!suggestion || !dosage) return;

    const overlap = this.suffixPrefixOverlap(dosage, suggestion);

    let newDosage =
      (overlap > 0
        ? dosage.replace(/\s+$/, '')
        : dosage.trimEnd() + (dosage ? ' ' : '')) + suggestion.slice(overlap);

    newDosage = newDosage
      // keep one space around slashes like "1 capsule / jours"
      .replace(/\s*\/\s*/g, ' / ')
      // collapse any accidental double spaces
      .replace(/\s{2,}/g, ' ')
      .trim();

    // I do emitEvent: false to prevent setupDosageSuggestionLogic() running again after the user had already selected one option
    dosageCtrl?.setValue(newDosage, { emitEvent: false });
    this.dosageSuggestions = [];
    this.focusedDosageIndex = -1;

    this.cdr.markForCheck();
  }

  onKeyDownDosageSuggestions(event: KeyboardEvent): void {
    const len = this.dosageSuggestions.length;

    if (event.key === 'ArrowDown') {
      this.disableHover = true;
      this.focusedDosageIndex = (this.focusedDosageIndex + 1) % len;
      event.preventDefault();
      event.stopPropagation();
    } else if (event.key === 'ArrowUp') {
      this.disableHover = true;
      this.focusedDosageIndex = (this.focusedDosageIndex - 1 + len) % len;
      event.preventDefault();
      event.stopPropagation();
    } else if (event.key === 'Enter' && this.focusedDosageIndex >= 0) {
      this.validateSuggestion(this.focusedDosageIndex);
      event.preventDefault();
      event.stopPropagation();
    } else if (event.key === 'Escape') {
      this.dosageSuggestions = [];
      this.focusedDosageIndex = -1;
      event.preventDefault();
      event.stopPropagation();
    }
    this.cdr.markForCheck();
  }

  onSelectAlternativeMedication(medication: MedicationType): void {
    // Add the previous medication to alternatives if it exists and is not already there
    if (this.medicationToPrescribe && this.alternativeCheapMedications) {
      const previousMed = this.medicationToPrescribe;
      const isAlreadyInList = this.alternativeCheapMedications.some(
        med => med.id === previousMed.id
      );

      if (!isAlreadyInList) {
        // Remove the selected medication from alternatives
        this.alternativeCheapMedications =
          this.alternativeCheapMedications.filter(
            med => med.id !== medication.id
          );

        // Add the previous medication to alternatives
        this.alternativeCheapMedications = [
          previousMed,
          ...this.alternativeCheapMedications,
        ];
      } else {
        // Just remove the selected medication from alternatives
        this.alternativeCheapMedications =
          this.alternativeCheapMedications.filter(
            med => med.id !== medication.id
          );
      }
    }

    // Set the new medication as the one to prescribe
    this.medicationToPrescribe = medication;

    // Update the medication title in the form
    const medicationTitleCtrl = this.getControl('medicationTitle');
    if (medicationTitleCtrl) {
      medicationTitleCtrl.setValue(medication.title);
    }

    this.cdr.markForCheck();
  }
}
