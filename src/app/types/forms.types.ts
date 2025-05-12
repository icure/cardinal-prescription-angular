import { Duration } from '@icure/be-fhc-api';
import {
  PractitionerVisibility,
  PharmacistVisibility,
} from './visibility.types';

export type AddMedicationFormType = {
  medicationTitle?: string;
  dosage?: string;
  duration?: number | Duration;
  durationTimeUnit?: string;
  treatmentStartDate?: string;
  executableUntil?: string;
  prescriptionsNumber?: number;
  periodicityTimeUnit?: string;
  periodicityDaysNumber?: number;
  substitutionAllowed?: boolean;
  recipeInstructionForPatient?: string;
  instructionsForReimbursement?: string;
  prescriberVisibility?: PractitionerVisibility;
  pharmacistVisibility?: PharmacistVisibility;
};
