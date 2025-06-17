import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NonNullableFormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { completePosology } from '@icure/medication-sdk';

import { ButtonComponent } from '../form-elements/button/button.component';
import { TextInputComponent } from '../form-elements/text-input/text-input.component';
import { SelectInputComponent } from '../form-elements/select-input/select-input.component';
import { RadioInputComponent } from '../form-elements/radio-input/radio-input.component';
import { ToggleSwitchComponent } from '../form-elements/toggle-switch/toggle-switch.component';
import { TextareaInputComponent } from '../form-elements/textarea-input/textarea-input.component';
import { CloseIcnComponent } from '../common/icons/close-icn/close-icn.component';

import {
  MedicationType,
  PharmacistVisibilityType,
  PractitionerVisibilityType,
  PrescribedMedicationType,
} from '../../types';
import {
  getTreatmentStartDate,
  getExecutableUntilDate,
} from '../../utils/date-helpers';
import {
  durationTimeUnitsEnum,
  getDurationFromDays,
  getDurationTimeUnits,
  getPeriodicityTimeUnits,
  periodicityTimeUnitsEnum,
} from '../../utils/prescription-duration-helpers';
import {
  getPractitionerVisibilityOptions,
  getPharmacistVisibilityOptions,
} from '../../utils/visibility-helpers';
import { CreatePrescriptionService } from '../../services/prescription/create-prescription.service';
import { TranslationService } from '../../services/translation/translation.service';
import { ReimbursementType } from '../../types/reimbursement';
import { getReimbursementOptions } from '../../utils/reimbursement-helpers';

@Component({
  selector: 'app-prescription-modal',
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
  ],
  templateUrl: './prescription-modal.component.html',
  styleUrl: './prescription-modal.component.scss',
})
export class PrescriptionModalComponent implements OnInit, OnDestroy {
  @Input() medicationToPrescribe?: MedicationType;
  @Input() prescriptionToModify?: PrescribedMedicationType;
  @Input() modalTitle!: string;

  @Output() handleSubmit = new EventEmitter<PrescribedMedicationType[]>();
  @Output() handleCancel = new EventEmitter<void>();

  constructor(
    private fb: NonNullableFormBuilder,
    private createPrescriptionService: CreatePrescriptionService,
    private translationService: TranslationService
  ) {}

  readonly t = (key: string): string => {
    return this.translationService.translate(key);
  };

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

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private getInitialFormValues(): Record<string, any> {
    const base = {
      medicationTitle: this.medicationToPrescribe?.title ?? '',
      dosage: '',
      duration: 1,
      durationTimeUnit: this.durationTimeUnits[0].value,
      treatmentStartDate: getTreatmentStartDate(this.prescriptionToModify),
      executableUntil: getExecutableUntilDate(this.prescriptionToModify),
      prescriptionsNumber: 1,
      substitutionAllowed: false,
      showExtraFields: false,
      periodicityTimeUnit: this.periodicityTimeUnits[0].value,
      periodicityDaysNumber: 1,
      recipeInstructionForPatient: undefined,
      instructionsForReimbursement: this.reimbursementOptions?.[0].value,
      prescriberVisibility: this.practitionerVisibilityOptions?.[0].value,
      pharmacistVisibility: this.pharmacistVisibilityOptions?.[0].value,
    };

    if (!this.prescriptionToModify) return base;

    const duration = getDurationFromDays(
      this.prescriptionToModify.medication.duration?.value ?? 1
    );

    return {
      ...base,
      medicationTitle:
        this.prescriptionToModify.medication.medicinalProduct?.intendedname ??
        '',
      dosage: this.prescriptionToModify.medication.instructionForPatient,
      duration: duration.duration,
      durationTimeUnit: duration.durationTimeUnit,
      recipeInstructionForPatient:
        this.prescriptionToModify.medication.recipeInstructionForPatient,
      substitutionAllowed:
        this.prescriptionToModify.medication.substitutionAllowed,
      instructionsForReimbursement:
        this.prescriptionToModify.medication.instructionsForReimbursement ??
        base.instructionsForReimbursement,
      prescriberVisibility:
        this.prescriptionToModify.prescriberVisibility ??
        base.prescriberVisibility,
      pharmacistVisibility:
        this.prescriptionToModify.pharmacistVisibility ??
        base.pharmacistVisibility,
    };
  }

  private initForm(): void {
    this.prescriptionForm = this.fb.group({
      medicationTitle: [{ value: '', disabled: true }, Validators.required],
      ...this.fb.group(this.getInitialFormValues()).controls,
    });

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
  }

  onCancel() {
    this.handleCancel.emit();
    this.prescriptionForm.reset();
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
  }

  private setupDosageSuggestionLogic(): void {
    const dosageControl = this.getControl('dosage');
    if (!dosageControl) return;

    this.subscriptions.push(
      dosageControl.valueChanges.subscribe((newValue: string) => {
        if (!newValue?.trim()) {
          this.dosageSuggestions = [];
          return;
        }

        setTimeout(() => {
          if (dosageControl.value === newValue) {
            this.dosageSuggestions = completePosology(newValue);
          }
        }, 100);
      })
    );
  }
  private findCommonSequence(a: string, b: string): string {
    let i = 0;
    while (i < a.length && a[i] === b[i]) i++;
    return a.slice(0, i);
  }

  validateSuggestion(index: number): void {
    const dosageCtrl = this.getControl('dosage');
    const dosage = dosageCtrl?.value;
    const suggestion = this.dosageSuggestions[index];

    if (!suggestion || !dosage) return;

    const common = this.findCommonSequence(dosage, suggestion);
    const newDosage = (
      dosage +
      (common.length ? suggestion.slice(common.length) : ' ' + suggestion)
    )
      .replace(/ {2,}/g, ' ')
      .replace(/\/ /g, '/');

    dosageCtrl?.setValue(newDosage);
    this.dosageSuggestions = [];
    this.focusedDosageIndex = -1;
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
  }
}
