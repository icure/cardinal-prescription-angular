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
import { StandardDosage } from '@icure/cardinal-be-sam-sdk';

export interface StandardDosageContext {
  ageInYears?: number;
  weightInKg?: number;
  renalFunctionMlPerMin?: number;
}

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
      const parsedPosologies: ParsedRegimenItem[] | undefined = dosage ? parsePosology(dosage) : undefined;

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

  createPosologyFromStandardDosage(dosages: StandardDosage[] | undefined, context: StandardDosageContext): ParsedRegimenItem[] {
    if (!dosages || dosages.length === 0) {
      return [];
    }

    // Filter dosages based on context (age, weight, renal function)
    const filteredDosages = dosages.filter(dosage => {
      // Check target group based on age
      if (dosage.targetGroup && context.ageInYears !== undefined) {
        const targetGroup = dosage.targetGroup;
        const age = context.ageInYears;

        // Target groups: Neonate (0-1 month), Paediatrics (1 month - 12 years),
        // Adolescent (12-18 years), Adult (18+ years)
        if (targetGroup === 'NEONATE' && age >= 1/12) return false;
        if (targetGroup === 'PAEDIATRICS' && (age < 1/12 || age >= 12)) return false;
        if (targetGroup === 'ADOLESCENT' && (age < 12 || age >= 18)) return false;
        if (targetGroup === 'ADULT' && age < 18) return false;
      }

      // Check kidney failure class based on creatinine clearance
      if (dosage.kidneyFailureClass !== undefined && context.renalFunctionMlPerMin !== undefined) {
        const clearance = context.renalFunctionMlPerMin;
        const kidneyClass = dosage.kidneyFailureClass;

        // 0 - Normal (>60), 1 - (30-60), 2 - (10-30), 3 - (<10)
        if (kidneyClass === 0 && clearance < 60) return false;
        if (kidneyClass === 1 && (clearance < 30 || clearance >= 60)) return false;
        if (kidneyClass === 2 && (clearance < 10 || clearance >= 30)) return false;
        if (kidneyClass === 3 && clearance >= 10) return false;
      }

      if (dosage.parameterBounds && dosage.parameterBounds.length > 0 && !dosage.parameterBounds.some((bound) =>{
        if (bound.dosageParameter?.code?.toLowerCase() === 'age' && context.ageInYears !== undefined) {
          const age = context.ageInYears;
          if (bound.lowerBound !== undefined && age < bound.lowerBound) return false;
          if (bound.upperBound !== undefined && age > bound.upperBound) return false;
          return true;
        } else if (bound.dosageParameter?.code?.toLowerCase() === 'weight' && context.weightInKg !== undefined) {
          const weight = context.weightInKg;
          if (bound.lowerBound !== undefined && weight < bound.lowerBound) return false;
          if (bound.upperBound !== undefined && weight > bound.upperBound) return false;
          return true;
        } else {
          return false;
        }
      })) {
        return false;
      }
      return true;
    });

    // Convert filtered dosages to ParsedRegimenItem format
    return filteredDosages.flatMap(dosage => {
      // Calculate the quantity considering multiplicator and patient parameters
      let quantity = dosage.quantity ?? 1;
      if (dosage.quantityDenominator) {
        quantity = quantity / dosage.quantityDenominator;
      }

      // Apply multiplicator based on patient parameters
      if (dosage.quantityMultiplicator && context.weightInKg) {
        if (dosage.quantityMultiplicator.toLowerCase().includes('weight') ||
            dosage.quantityMultiplicator.toLowerCase().includes('kg')) {
          quantity = quantity * context.weightInKg;
        }
      }

      // Determine frequency and timeframe
      const frequency = dosage.administrationFrequencyQuantity ?? 1;

      // Parse administrationFrequencyTimeframe (format: "value unit", e.g., "1 D" or "2 W")
      const timeframeValue = dosage.administrationFrequencyTimeframe?.value ?? 1;
      const timeframeUnit = dosage.administrationFrequencyTimeframe?.unit ?? 'D';

      // Convert timeframe unit to temporal unit (only 'day' and 'week' are supported)
      const temporalUnit: 'day' | 'week' = (timeframeUnit === 'W' || timeframeUnit === 'WK' || timeframeUnit.toLowerCase().includes('week')) ? 'week': 'day';

      // Create the regimen item
      const regimenItem: ParsedRegimenItem = {
        regimenQuantity: {
          quantity: quantity,
          galenic: 'unit' // Could be extracted from dosage if available
        },
        frequency: frequency, // Normalize to per temporal unit
        period: {
          timeframeValue: timeframeValue,
          temporalUnit: temporalUnit
        },
        moments: [] // No specific moments defined in standard dosage
      };

      return [regimenItem];
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
