import { Medication } from '@icure/be-fhc-api';
import { ReimbursementType } from '../types/reimbursement';

export const getReimbursementOptions = (
  t: (key: string) => string
): { value: ReimbursementType; label: string }[] => [
  {
    value: null,
    label: t('reimbursementHelper.none'),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.PAYINGTHIRDPARTY,
    label: t('reimbursementHelper.PAYINGTHIRDPARTY'),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.FIRSTDOSE,
    label: t('reimbursementHelper.FIRSTDOSE'),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.SECONDDOSE,
    label: t('reimbursementHelper.SECONDDOSE'),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.THIRDDOSE,
    label: t('reimbursementHelper.THIRDDOSE'),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.CHRONICKINDEYDISEASE,
    label: t('reimbursementHelper.CHRONICKINDEYDISEASE'),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.DIABETESTREATMENT,
    label: t('reimbursementHelper.DIABETESTREATMENT'),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.DIABETESCONVENTION,
    label: t('reimbursementHelper.DIABETESCONVENTION'),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.NOTREIMBURSABLE,
    label: t('reimbursementHelper.NOTREIMBURSABLE'),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.EXPLAINMEDICATION,
    label: t('reimbursementHelper.EXPLAINMEDICATION'),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.DIABETESSTARTPATH,
    label: t('reimbursementHelper.DIABETESSTARTPATH'),
  },
];
