import { Duration } from '@icure/be-fhc-lite-api';
import {
  PractitionerVisibilityType,
  PharmacistVisibilityType,
} from './visibility';
import { ReimbursementType } from './reimbursement';

export type PrescriptionFormType = {
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
  instructionsForReimbursement?: ReimbursementType;
  prescriberVisibility?: PractitionerVisibilityType;
  pharmacistVisibility?: PharmacistVisibilityType;
};
