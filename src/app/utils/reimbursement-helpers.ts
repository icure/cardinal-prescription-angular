import { Medication } from '@icure/be-fhc-api';

export const reimbursementOptions = [
  {
    value: null,
    label: 'Aucun',
  },
  {
    value: Medication.InstructionsForReimbursementEnum.PAYINGTHIRDPARTY,
    label: 'Tiers Payant',
  },
  {
    value: Medication.InstructionsForReimbursementEnum.FIRSTDOSE,
    label: 'Première Dose',
  },
  {
    value: Medication.InstructionsForReimbursementEnum.SECONDDOSE,
    label: 'Deuxième Dose',
  },
  {
    value: Medication.InstructionsForReimbursementEnum.THIRDDOSE,
    label: 'Troisième Dose',
  },
  {
    value: Medication.InstructionsForReimbursementEnum.CHRONICKINDEYDISEASE,
    label: 'Maladie Rénale Chronique',
  },
  {
    value: Medication.InstructionsForReimbursementEnum.DIABETESTREATMENT,
    label: 'Traitement du Diabète',
  },
  {
    value: Medication.InstructionsForReimbursementEnum.DIABETESCONVENTION,
    label: 'Convention Diabète',
  },
  {
    value: Medication.InstructionsForReimbursementEnum.NOTREIMBURSABLE,
    label: 'Non Remboursable',
  },
  {
    value: Medication.InstructionsForReimbursementEnum.EXPLAINMEDICATION,
    label: 'Explication du Médicament',
  },
  {
    value: Medication.InstructionsForReimbursementEnum.DIABETESSTARTPATH,
    label: 'Parcours Initial Diabète',
  },
];
