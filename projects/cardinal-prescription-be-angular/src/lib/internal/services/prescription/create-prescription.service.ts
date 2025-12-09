import { Injectable } from '@angular/core';

import {
  Duration,
  Medication,
  Substanceproduct,
  Medicinalproduct,
  RegimenItem,
} from '@icure/be-fhc-lite-api';
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
import {
  makeParser,
  RegimenItem as ParsedRegimenItem,
} from '@icure/medication-sdk';

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

  private createRegimenItemsFromDosage(
    dosage: string | undefined
  ): RegimenItem[] | undefined {
    try {
      const { parsePosology } = makeParser('fr');
      const parsedPosologies = dosage ? parsePosology(dosage) : undefined;

      if (!parsedPosologies || parsedPosologies.length === 0) {
        return undefined;
      }

      const errors = [];
      //Check the consistency of items
      parsedPosologies.forEach((posology: ParsedRegimenItem) => {
        if ((posology.period?.temporalUnit ?? 'day') === 'day') {
          const dayMoments = posology.moments.filter(m => m.periodOfTime || m.fullTime);
          if (
            dayMoments.length >
              0 &&
            posology.frequency &&
            posology.frequency != dayMoments.length
          ) {
            errors.push(
              `Inconsistent posology: frequency ${posology.frequency}/day does not match the number of day periods specified`
            );
          }
        } else if (posology.period?.temporalUnit === 'week') {
          if (
            posology.moments.filter(m => m.dayOfWeek).length > 0 &&
            posology.frequency &&
            posology.frequency != posology.moments.length
          ) {
            errors.push(
              `Inconsistent posology: frequency ${posology.frequency}/week does not match number of days specified`
            );
          }
          if (
            posology.moments.filter(m => m.periodOfTime || m.fullTime).length >
            1
          ) {
            errors.push(
              `Inconsistent posology: for weekly posologies, only one time of day specification is allowed`
            );
          }
        }
      });

      return errors.length > 0
        ? undefined
        : parsedPosologies.flatMap((posology: ParsedRegimenItem) => {
            if ((posology.period?.temporalUnit ?? 'day') === 'day') {
              const dailyRegiment = [
                ...new Array(
                  Math.max(
                    (posology.frequency ?? 1) -
                      posology.moments.filter(m => m.periodOfTime || m.fullTime)
                        .length,
                    0
                  )
                ),
              ]
                .map(() => {
                  return new RegimenItem({
                    administratedQuantity: {
                      quantity: posology.regimenQuantity?.quantity ?? 1,
                      unit: posology.regimenQuantity?.galenic ?? 'unit',
                    },
                  });
                })
                .concat(
                  posology.moments
                    .filter(m => m.periodOfTime)
                    .map(moment => {
                      return new RegimenItem({
                        administratedQuantity: {
                          quantity: posology.regimenQuantity?.quantity ?? 1,
                          unit: posology.regimenQuantity?.galenic ?? 'unit',
                        },
                        dayPeriod: {
                          type: 'CD-PERIOD',
                          code: moment.periodOfTime,
                        },
                      });
                    })
                )
                .concat(
                  posology.moments
                    .filter(m => m.fullTime)
                    .map(moment => {
                      return new RegimenItem({
                        administratedQuantity: {
                          quantity: posology.regimenQuantity?.quantity ?? 1,
                          unit: posology.regimenQuantity?.galenic ?? 'unit',
                        },
                        timeOfDay: parseInt(
                          moment.fullTime?.replace(':', '') ?? '0000'
                        ),
                      });
                    })
                );
              const weekMoments = posology.moments
                .filter(m => m.dayOfWeek)

              return weekMoments.length > 0 ? dailyRegiment.flatMap(item =>
                weekMoments
                  .map(moment => {
                    return new RegimenItem({
                      ...item,
                      weekday: {
                        weekDay: { type: 'CD-WEEKDAY', code: moment.dayOfWeek },
                      },
                    });
                  })
              ) : dailyRegiment;
            } else if ((posology.frequency ?? 1) === posology.moments.length) {
              const periodOfTimeItem = posology.moments.find(
                m => m.periodOfTime
              );
              const timeOfDayItem = posology.moments.find(m => m.fullTime);

              return posology.moments
                .filter(m => m.dayOfWeek)
                .map(moment => {
                  return new RegimenItem({
                    administratedQuantity: {
                      quantity: posology.regimenQuantity?.quantity ?? 1,
                      unit: posology.regimenQuantity?.galenic ?? 'unit',
                    },
                    weekday: {
                      weekDay: { type: 'CD-WEEKDAY', code: moment.dayOfWeek },
                    },
                    dayPeriod: periodOfTimeItem
                      ? {
                          type: 'CD-PERIOD',
                          code: periodOfTimeItem.periodOfTime,
                        }
                      : undefined,
                    timeOfDay: timeOfDayItem
                      ? parseInt(
                          timeOfDayItem.fullTime?.replace(':', '') ?? '0000'
                        )
                      : undefined,
                  });
                });
            } else {
              return [];
            }
          });
    } catch (e) {
      console.error('Error parsing dosage:', dosage, e);
      return undefined;
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
          beginMoment: offsetDate(
            parseInt(
              (formValues.treatmentStartDate as string)?.replace(/-/g, '')
            ),
            formValues.periodicityTimeUnit
              ? parseInt(formValues.periodicityTimeUnit) *
                  (formValues.periodicityDaysNumber ?? 1)
              : 0
          ),

          endMoment: offsetDate(
            parseInt((formValues.executableUntil as string)?.replace(/-/g, '')),
            formValues.periodicityTimeUnit
              ? parseInt(formValues.periodicityTimeUnit) *
                  (formValues.periodicityDaysNumber ?? 1)
              : 0
          ),
          duration: new Duration({
            unit: this.fhcService.createFhcFromCode('CD-TIMEUNIT', 'D'),
            value: getDurationInDays(
              formValues.durationTimeUnit as durationTimeUnitsEnum,
              formValues.duration as number
            ),
          }),
          regimen: this.createRegimenItemsFromDosage(formValues.dosage),
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
        parseInt((formValues.treatmentStartDate as string)?.replace(/-/g, '')),
        formValues.periodicityTimeUnit
          ? parseInt(formValues.periodicityTimeUnit ?? '1') *
              (formValues.periodicityDaysNumber ?? 1) *
              idx
          : 0
      ),

      endMoment: offsetDate(
        parseInt((formValues.executableUntil as string)?.replace(/-/g, '')),
        formValues.periodicityTimeUnit
          ? parseInt(formValues.periodicityTimeUnit ?? '1') *
              (formValues.periodicityDaysNumber ?? 1) *
              idx
          : 0
      ),
      duration: new Duration({
        unit: this.fhcService.createFhcFromCode('CD-TIMEUNIT', 'D'),
        value: getDurationInDays(
          formValues.durationTimeUnit as durationTimeUnitsEnum,
          formValues.duration as number
        ),
      }),
      regimen: this.createRegimenItemsFromDosage(formValues.dosage),
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
}
