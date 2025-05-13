import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonComponent } from '../form-elements/button/button.component';
import { CommonModule } from '@angular/common';
import {
  NonNullableFormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TextInputComponent } from '../form-elements/text-input/text-input.component';
import { SelectInputComponent } from '../form-elements/select-input/select-input.component';
import { RadioInputComponent } from '../form-elements/radio-input/radio-input.component';
import { ToggleSwitchComponent } from '../form-elements/toggle-switch/toggle-switch.component';
import { TextareaInputComponent } from '../form-elements/textarea-input/textarea-input.component';
import { PrescribedMedicationType } from '../../types';
import {
  getTreatmentStartDate,
  getExecutableUntilDate,
} from '../../services/helpers/date-helpers.service';
import {
  durationTimeUnits,
  periodicityTimeUnits,
} from '../../services/helpers/medication-helpers.service';
import {
  practitionerVisibilityOptions,
  pharmacistVisibilityOptions,
} from '../../services/helpers/visibility-helpers.service';
import { reimbursementOptions } from '../../services/helpers/reimbursement-helpers.service';
import { CloseIcnComponent } from '../icons/close-icn/close-icn.component';

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
export class PrescriptionModalComponent implements OnInit {
  @Input() prescribedMedication: PrescribedMedicationType | undefined;
  @Input() modalTitle!: string;

  @Output() handleSubmit = new EventEmitter<void>();
  @Output() handleCancel = new EventEmitter<void>();

  prescriptionForm!: FormGroup;

  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit(): void {
    this.prescriptionForm = this.fb.group({
      medicationTitle: [
        {
          value: 'ibuprofène oral 200 mg [CAVE séc., solide/liq.]',
          disabled: true,
        },
        Validators.required,
      ],
      dosage: ['', Validators.required],
      duration: [1, Validators.required],
      durationTimeUnit: [durationTimeUnits[0].value, Validators.required],
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

    if (this.prescribedMedication) {
      this.prescriptionForm.patchValue({
        medicationTitle:
          this.prescribedMedication.medication.medicinalProduct?.intendedname ??
          '',
        treatmentStartDate: getTreatmentStartDate(this.prescribedMedication),
        executableUntil: getExecutableUntilDate(this.prescribedMedication),
      });
    }

    this.subscribeToValidationChanges();
  }

  get prescriptionFormValues() {
    return this.prescriptionForm?.value;
  }
  getErrorMessage(fieldName: string): string | undefined {
    const control = this.prescriptionForm.get(fieldName);

    if (control?.valid || !control?.touched || control?.disabled)
      return undefined;

    if (control?.errors?.['required']) return 'Ce champ est requis';

    // You can add more error types if needed (minlength, pattern, etc.)
    return 'Champ invalide';
  }

  get selectedReimbursementLabel(): string {
    const option = this.reimbursementOptions?.find(
      x => x.value === this.prescriptionFormValues.instructionsForReimbursement
    );
    return option?.label ?? 'Aucun';
  }
  get selectedPractitionerVisibilityLabel(): string {
    const option = this.practitionerVisibilityOptions?.find(
      x => x.value === this.prescriptionFormValues.practitionerVisibility
    );
    return option?.label ?? 'Aucun';
  }
  get selectedPharmacistVisibilityLabel(): string {
    const option = this.pharmacistVisibilityOptions?.find(
      x => x.value === this.prescriptionFormValues.pharmacistVisibility
    );
    return option?.label ?? 'Aucun';
  }

  onSubmit() {
    if (this.prescriptionForm.invalid) {
      this.prescriptionForm.markAllAsTouched();
      return;
    }

    this.handleSubmit.emit();
    if (this.prescriptionForm.valid) {
      console.log('Form submitted!', this.prescriptionForm.value);
      this.prescriptionForm.reset();
    }
  }

  onCancel() {
    this.handleCancel.emit();
    this.prescriptionForm.reset();
  }

  protected readonly periodicityTimeUnits = periodicityTimeUnits;
  protected readonly durationTimeUnits = durationTimeUnits;
  protected readonly reimbursementOptions = reimbursementOptions;
  protected readonly practitionerVisibilityOptions =
    practitionerVisibilityOptions;
  protected readonly pharmacistVisibilityOptions = pharmacistVisibilityOptions;

  private subscribeToValidationChanges(): void {
    const prescriptionsNumberCtrl = this.prescriptionForm.get(
      'prescriptionsNumber'
    );
    const periodicityTimeUnitCtrl = this.prescriptionForm.get(
      'periodicityTimeUnit'
    );

    prescriptionsNumberCtrl?.valueChanges.subscribe(() => {
      this.updatePeriodicityValidators();
    });

    periodicityTimeUnitCtrl?.valueChanges.subscribe(() => {
      this.updatePeriodicityValidators();
    });

    this.updatePeriodicityValidators();
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
}
