import { Medication } from '@icure/be-fhc-lite-api';
import {
  Commercialization,
  Reimbursement,
  SupplyProblem,
  VmpStub,
} from '@icure/cardinal-be-sam-sdk';

import {
  PractitionerVisibilityType,
  PharmacistVisibilityType,
} from '../../internal/types';

export type DeliveryModusSpecificationCodeType =
  | 'Sp'
  | 'Sp1'
  | 'Sp/S'
  | 'Sp1/S'
  | 'IMP/Sp'
  | 'IMP/Sp1';

export type MedicationType = {
  ampId?: string;
  vmpGroupId?: string;
  nmpId?: string;
  cnk?: string;
  dmppProductId?: string;
  id?: string;
  title: string;
  vmpTitle?: string;
  activeIngredient?: string;
  price?: string;
  crmLink?: string;
  patientInformationLeafletLink?: string;
  blackTriangle?: boolean;
  speciallyRegulated?: number;
  genericPrescriptionRequired?: boolean;
  intendedName?: string;
  rmaProfessionalLink?: string;
  spcLink?: string;
  dhpcLink?: string;
  rmakeyMessages?: string;
  vmp?: VmpStub;
  supplyProblems?: SupplyProblem[];
  commercializations?: Commercialization[];
  deliveryModusCode?: string;
  deliveryModus?: string;
  deliveryModusSpecificationCode?: DeliveryModusSpecificationCodeType;
  deliveryModusSpecification?: string;
  reimbursements?: Reimbursement;
};

export type PrescribedMedicationType = {
  uuid: string;
  medication: Medication;
  rid?: string;
  ampId?: string;
  cnk?: string;
  dmppProductId?: string;
  prescriberVisibility?: PractitionerVisibilityType;
  pharmacistVisibility?: PharmacistVisibilityType;
};
