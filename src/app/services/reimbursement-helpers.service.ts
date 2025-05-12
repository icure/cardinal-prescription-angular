// import {Medication} from "@icure/be-fhc-api";
// Must be used like: Medication.InstructionsForReimbursementEnum.PAYINGTHIRDPARTY,

export enum InstructionsForReimbursementEnum {
  PAYINGTHIRDPARTY = 'PAYING_THIRD_PARTY',
  FIRSTDOSE = 'FIRST_DOSE',
  SECONDDOSE = 'SECOND_DOSE',
  THIRDDOSE = 'THIRD_DOSE',
  CHRONICKINDEYDISEASE = 'CHRONIC_KINDEY_DISEASE',
  DIABETESTREATMENT = 'DIABETES_TREATMENT',
  DIABETESCONVENTION = 'DIABETES_CONVENTION',
  NOTREIMBURSABLE = 'NOT_REIMBURSABLE',
  EXPLAINMEDICATION = 'EXPLAIN_MEDICATION',
  DIABETESSTARTPATH = 'DIABETES_STARTPATH',
}

export const reimbursementOptions = [
  {
    value: null,
    label: 'Aucun',
  },
  {
    value: InstructionsForReimbursementEnum.PAYINGTHIRDPARTY,
    label: 'Tiers Payant',
  },
  {
    value: InstructionsForReimbursementEnum.FIRSTDOSE,
    label: 'Première Dose',
  },
  {
    value: InstructionsForReimbursementEnum.SECONDDOSE,
    label: 'Deuxième Dose',
  },
  {
    value: InstructionsForReimbursementEnum.THIRDDOSE,
    label: 'Troisième Dose',
  },
  {
    value: InstructionsForReimbursementEnum.CHRONICKINDEYDISEASE,
    label: 'Maladie Rénale Chronique',
  },
  {
    value: InstructionsForReimbursementEnum.DIABETESTREATMENT,
    label: 'Traitement du Diabète',
  },
  {
    value: InstructionsForReimbursementEnum.DIABETESCONVENTION,
    label: 'Convention Diabète',
  },
  {
    value: InstructionsForReimbursementEnum.NOTREIMBURSABLE,
    label: 'Non Remboursable',
  },
  {
    value: InstructionsForReimbursementEnum.EXPLAINMEDICATION,
    label: 'Explication du Médicament',
  },
  {
    value: InstructionsForReimbursementEnum.DIABETESSTARTPATH,
    label: 'Parcours Initial Diabète',
  },
];
