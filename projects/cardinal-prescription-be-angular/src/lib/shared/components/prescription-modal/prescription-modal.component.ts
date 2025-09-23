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
import { makeParser } from '@icure/medication-sdk';
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
import { CreatePrescriptionService } from '../../../internal/services/prescription/create-prescription.service';
import { ReimbursementType } from '../../../internal/types/reimbursement';
import { getReimbursementOptions } from '../../../internal/utils/reimbursement-helpers';

import { TranslationService } from '../../services/translation/translation.service';
import { MedicationType, PrescribedMedicationType } from '../../types';

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

  private getInitialFormValues(): Record<string, any> {
    const medicationTitleValue =
      this.medicationToPrescribe?.title ??
      this.prescriptionToModify?.medication.medicinalProduct?.intendedname ??
      this.prescriptionToModify?.medication.substanceProduct?.intendedname ??
      this.prescriptionToModify?.medication.compoundPrescription ??
      '';

    return {
      medicationTitle: {
        value: medicationTitleValue,
        disabled: true,
      },
      dosage: this.prescriptionToModify?.medication.instructionForPatient ?? '',
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
        if (!newValue?.trim()) {
          this.dosageSuggestions = [];
          return;
        }

        setTimeout(() => {
          if (dosageControl.value === newValue) {
            this.dosageSuggestions = completeDosage(newValue);
          }
        }, 100);
      })
    );
    this.cdr.markForCheck();
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
}
