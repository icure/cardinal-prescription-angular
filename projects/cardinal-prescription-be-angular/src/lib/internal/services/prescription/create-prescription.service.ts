import { Injectable } from '@angular/core';

import { Duration, Medication, Substanceproduct } from '@icure/be-fhc-api';
import { Medicinalproduct } from '@icure/be-fhc-api/model/Medicinalproduct';
import { v4 as uuid } from 'uuid'; // For generating UUIDs
import { FhcService } from '../../../shared/services/api/fhc.service';
import { offsetDate } from '../../utils/date-helpers';
import {
  durationTimeUnitsEnum,
  getDurationInDays,
} from '../../utils/prescription-duration-helpers';
import { PrescriptionFormType } from '../../types'; // Assuming you have utility functions
import {
  MedicationType,
  PrescribedMedicationType,
} from '../../../shared/types';

@Injectable({
  providedIn: 'root',
})
export class CreatePrescriptionService {
  constructor(private fhcService: FhcService) {}

  createPrescribedMedication(
    formValues: PrescriptionFormType,
    prescribedMedication?: PrescribedMedicationType | undefined,
    medicationToPrescribe?: MedicationType | undefined
  ): PrescribedMedicationType[] {
    if (prescribedMedication) {
      return this.createSinglePrescribedMedication(
        prescribedMedication,
        formValues
      );
    } else if (medicationToPrescribe) {
      return this.createMultiplePrescribedMedications(
        formValues,
        medicationToPrescribe
      );
    } else {
      return [];
    }
  }

  private createSinglePrescribedMedication(
    prescribedMedication: PrescribedMedicationType,
    formValues: PrescriptionFormType
  ) {
    return [
      {
        ...prescribedMedication,
        medication: new Medication({
          ...prescribedMedication.medication,
          duration: new Duration({
            unit: this.fhcService.createFhcFromCode('CD-TIMEUNIT', 'D'),
            value: getDurationInDays(
              formValues.durationTimeUnit as durationTimeUnitsEnum,
              formValues.duration as number
            ),
          }),
          instructionForPatient: formValues.dosage,
          recipeInstructionForPatient: formValues.recipeInstructionForPatient,
          instructionsForReimbursement: formValues.instructionsForReimbursement,
          substitutionAllowed: formValues.substitutionAllowed,
        }),
        prescriberVisibility: formValues.prescriberVisibility,
        pharmacistVisibility: formValues.pharmacistVisibility,
      },
    ];
  }

  private createMultiplePrescribedMedications(
    formValues: PrescriptionFormType,
    medicationToPrescribe: MedicationType
  ) {
    const prescriptionsNumber = formValues.prescriptionsNumber ?? 1;
    return Array.from({ length: prescriptionsNumber }, (_, idx) => {
      return {
        uuid: uuid(),
        medication: this.createMedicationForPrescription(
          formValues,
          medicationToPrescribe,
          idx
        ),
        prescriberVisibility: formValues.prescriberVisibility,
        pharmacistVisibility: formValues.pharmacistVisibility,
      };
    });
  }

  private createMedicationForPrescription(
    formValues: PrescriptionFormType,
    medicationToPrescribe: MedicationType,
    idx: number
  ): Medication {
    const medicationData = this.determineMedicationData(medicationToPrescribe);

    return new Medication({
      ...medicationData,
      beginMoment: offsetDate(
        parseInt((formValues.treatmentStartDate as string).replace(/-/g, '')),
        this.calculateOffset(formValues, idx)
      ),
      endMoment: offsetDate(
        parseInt((formValues.executableUntil as string).replace(/-/g, '')),
        this.calculateOffset(formValues, idx)
      ),
      duration: new Duration({
        unit: this.fhcService.createFhcFromCode('CD-TIMEUNIT', 'D'),
        value: getDurationInDays(
          formValues.durationTimeUnit as durationTimeUnitsEnum,
          formValues.duration as number
        ),
      }),
      instructionForPatient: formValues.dosage,
      recipeInstructionForPatient: formValues.recipeInstructionForPatient,
      instructionsForReimbursement: formValues.instructionsForReimbursement,
      substitutionAllowed: formValues.substitutionAllowed,
    });
  }

  private determineMedicationData(medicationToPrescribe: MedicationType) {
    if (
      medicationToPrescribe?.ampId &&
      !medicationToPrescribe.genericPrescriptionRequired &&
      medicationToPrescribe.cnk
    ) {
      return {
        medicinalProduct: new Medicinalproduct({
          samId: medicationToPrescribe.dmppProductId,
          intendedcds: [
            this.fhcService.createFhcFromCode(
              'CD-DRUG-CNK',
              medicationToPrescribe.cnk
            ),
          ],
          intendedname: medicationToPrescribe.intendedName,
        }),
      };
    } else if (medicationToPrescribe?.vmpGroupId) {
      return {
        substanceProduct: new Substanceproduct({
          samId: medicationToPrescribe.vmpGroupId,
          intendedcds: [
            this.fhcService.createFhcFromCode(
              'CD_VMPGROUP',
              medicationToPrescribe.vmpGroupId
            ),
          ],
          intendedname:
            medicationToPrescribe.vmpTitle ?? medicationToPrescribe.title,
        }),
      };
    } else {
      return { compoundPrescription: medicationToPrescribe.title };
    }
  }

  private calculateOffset(
    formValues: PrescriptionFormType,
    idx: number
  ): number {
    return formValues.periodicityTimeUnit
      ? parseInt(formValues.periodicityTimeUnit) *
          (formValues.periodicityDaysNumber ?? 1) *
          idx
      : 0;
  }
}
