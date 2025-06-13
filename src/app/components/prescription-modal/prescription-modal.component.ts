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

import { ButtonComponent } from '../form-elements/button/button.component';
import { TextInputComponent } from '../form-elements/text-input/text-input.component';
import { SelectInputComponent } from '../form-elements/select-input/select-input.component';
import { RadioInputComponent } from '../form-elements/radio-input/radio-input.component';
import { ToggleSwitchComponent } from '../form-elements/toggle-switch/toggle-switch.component';
import { TextareaInputComponent } from '../form-elements/textarea-input/textarea-input.component';
import { CloseIcnComponent } from '../common/icons/close-icn/close-icn.component';

import { MedicationType, PrescribedMedicationType } from '../../types';
import {
  getTreatmentStartDate,
  getExecutableUntilDate,
} from '../../utils/date-helpers';
import {
  durationTimeUnits,
  getDurationFromDays,
  periodicityTimeUnits,
} from '../../utils/prescription-duration-helpers';
import {
  practitionerVisibilityOptions,
  pharmacistVisibilityOptions,
} from '../../utils/visibility-helpers';
import { reimbursementOptions } from '../../utils/reimbursement-helpers';
import { CreatePrescriptionService } from '../../services/prescription/create-prescription.service';
import { TranslationService } from '../../services/translation/translation.service';

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

  prescriptionForm!: FormGroup;
  private subscriptions: Subscription[] = [];

  recipeInstructionForPatientLabel: string | undefined;
  selectedReimbursementLabel: string | undefined =
    reimbursementOptions[0].label;
  selectedPractitionerVisibilityLabel: string | undefined =
    practitionerVisibilityOptions[0].label;
  selectedPharmacistVisibilityLabel: string | undefined =
    pharmacistVisibilityOptions[0].label;

  constructor(
    private fb: NonNullableFormBuilder,
    private createPrescriptionService: CreatePrescriptionService,
    private translationService: TranslationService
  ) {}

  t(key: string): string {
    return this.translationService.translate(key);
  }

  ngOnInit(): void {
    this.initForm();
    this.subscribeToValidationChanges();
    this.subscribeToLabelChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private initForm(): void {
    this.prescriptionForm = this.fb.group({
      medicationTitle: [{ value: '', disabled: true }, Validators.required],
      dosage: ['', Validators.required],
      duration: [1, Validators.required],
      durationTimeUnit: [durationTimeUnits[0].label, Validators.required],
      treatmentStartDate: [getTreatmentStartDate(), Validators.required],
      executableUntil: [getExecutableUntilDate(), Validators.required],
      prescriptionsNumber: [1, Validators.required],
      substitutionAllowed: [false, Validators.required],
      showExtraFields: [false],
      periodicityTimeUnit: [periodicityTimeUnits[0].value],
      periodicityDaysNumber: [1],
      recipeInstructionForPatient: [],
      instructionsForReimbursement: [reimbursementOptions[0].value],
      prescriberVisibility: [practitionerVisibilityOptions[0].value],
      pharmacistVisibility: [pharmacistVisibilityOptions[0].value],
    });

    if (this.prescriptionToModify) {
      const recoveredDuration = getDurationFromDays(
        this.prescriptionToModify.medication.duration?.value ?? 1
      );
      this.prescriptionForm.patchValue(
        {
          medicationTitle:
            this.prescriptionToModify.medication.medicinalProduct
              ?.intendedname ?? '',
          dosage: this.prescriptionToModify.medication.instructionForPatient,
          duration: recoveredDuration.duration,
          durationTimeUnit: recoveredDuration.durationTimeUnit,
          treatmentStartDate: getTreatmentStartDate(this.prescriptionToModify),
          executableUntil: getExecutableUntilDate(this.prescriptionToModify),
          recipeInstructionForPatient:
            this.prescriptionToModify.medication.recipeInstructionForPatient,
          substitutionAllowed:
            this.prescriptionToModify.medication.substitutionAllowed,
          instructionsForReimbursement:
            this.prescriptionToModify.medication.instructionsForReimbursement ??
            reimbursementOptions[0].value,
          prescriberVisibility:
            this.prescriptionToModify.prescriberVisibility ??
            practitionerVisibilityOptions[0].value,
          pharmacistVisibility:
            this.prescriptionToModify.pharmacistVisibility ??
            pharmacistVisibilityOptions[0].value,
        },
        { emitEvent: false }
      );

      this.recipeInstructionForPatientLabel =
        this.prescriptionToModify.medication.recipeInstructionForPatient ??
        this.t('prescription.form.instructionLabelNone');
      if (this.prescriptionToModify.medication.instructionsForReimbursement) {
        this.selectedReimbursementLabel = this.reimbursementOptions.find(
          x =>
            x.value ===
            this.prescriptionToModify?.medication.instructionsForReimbursement
        )?.label;
      }
      if (this.prescriptionToModify.prescriberVisibility) {
        this.selectedPractitionerVisibilityLabel =
          this.practitionerVisibilityOptions.find(
            x => x.value === this.prescriptionToModify?.prescriberVisibility
          )?.label;
      }
      if (this.prescriptionToModify.pharmacistVisibility) {
        this.selectedPharmacistVisibilityLabel =
          this.pharmacistVisibilityOptions.find(
            x => x.value === this.prescriptionToModify?.pharmacistVisibility
          )?.label;
      }
    }

    if (this.medicationToPrescribe) {
      this.recipeInstructionForPatientLabel = this.t(
        'prescription.form.instructionLabelNone'
      );
      this.prescriptionForm.patchValue(
        {
          medicationTitle: this.medicationToPrescribe.title ?? '',
          treatmentStartDate: getTreatmentStartDate(this.prescriptionToModify),
          executableUntil: getExecutableUntilDate(this.prescriptionToModify),
        },
        { emitEvent: false }
      );
    }
  }

  getErrorMessage(fieldName: string): string | undefined {
    const control = this.prescriptionForm.get(fieldName);
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

    const formValues = this.prescriptionForm.value;
    const prescribedMedications =
      this.createPrescriptionService.createPrescribedMedication(
        formValues,
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
    const prescriptionsNumberCtrl = this.prescriptionForm.get(
      'prescriptionsNumber'
    );
    const periodicityTimeUnitCtrl = this.prescriptionForm.get(
      'periodicityTimeUnit'
    );

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

  private subscribeToLabelChanges(): void {
    const reimbursementCtrl = this.prescriptionForm.get(
      'instructionsForReimbursement'
    );
    const practitionerCtrl = this.prescriptionForm.get('prescriberVisibility');
    const pharmacistCtrl = this.prescriptionForm.get('pharmacistVisibility');
    const recipeInstructionCtrl = this.prescriptionForm.get(
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
          const option = reimbursementOptions.find(opt => opt.value === value);
          this.selectedReimbursementLabel =
            option?.label ?? this.t('prescription.form.instructionLabelNone');
        }),
        practitionerCtrl.valueChanges.subscribe(value => {
          const option = practitionerVisibilityOptions.find(
            opt => opt.value === value
          );
          this.selectedPractitionerVisibilityLabel =
            option?.label ?? this.t('prescription.form.instructionLabelNone');
        }),
        pharmacistCtrl.valueChanges.subscribe(value => {
          const option = pharmacistVisibilityOptions.find(
            opt => opt.value === value
          );
          this.selectedPharmacistVisibilityLabel =
            option?.label ?? this.t('prescription.form.instructionLabelNone');
        }),
        recipeInstructionCtrl.valueChanges.subscribe(value => {
          this.recipeInstructionForPatientLabel = value;
        })
      );
    }
  }

  private updatePeriodicityValidators(): void {
    const prescriptionsNumber = this.prescriptionForm.get(
      'prescriptionsNumber'
    )?.value;
    const periodicityTimeUnit = this.prescriptionForm.get(
      'periodicityTimeUnit'
    )?.value;

    const periodicityTimeUnitCtrl = this.prescriptionForm.get(
      'periodicityTimeUnit'
    );
    const periodicityDaysNumberCtrl = this.prescriptionForm.get(
      'periodicityDaysNumber'
    );

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

  protected readonly periodicityTimeUnits = periodicityTimeUnits;
  protected readonly durationTimeUnits = durationTimeUnits;
  protected readonly reimbursementOptions = reimbursementOptions;
  protected readonly practitionerVisibilityOptions =
    practitionerVisibilityOptions;
  protected readonly pharmacistVisibilityOptions = pharmacistVisibilityOptions;
}
