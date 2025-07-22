import { Medication } from '@icure/be-fhc-lite-api';
import { ReimbursementType } from '../types/reimbursement';

export const getReimbursementOptions = (
  t: (key: string) => string
): { value: ReimbursementType; label: string }[] => [
  {
    value: null,
    label: t('reimbursementHelper.practitionerSelectionOptions.none'),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.PAYINGTHIRDPARTY,
    label: t(
      'reimbursementHelper.practitionerSelectionOptions.PAYINGTHIRDPARTY'
    ),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.FIRSTDOSE,
    label: t('reimbursementHelper.practitionerSelectionOptions.FIRSTDOSE'),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.SECONDDOSE,
    label: t('reimbursementHelper.practitionerSelectionOptions.SECONDDOSE'),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.THIRDDOSE,
    label: t('reimbursementHelper.practitionerSelectionOptions.THIRDDOSE'),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.CHRONICKINDEYDISEASE,
    label: t(
      'reimbursementHelper.practitionerSelectionOptions.CHRONICKINDEYDISEASE'
    ),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.DIABETESTREATMENT,
    label: t(
      'reimbursementHelper.practitionerSelectionOptions.DIABETESTREATMENT'
    ),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.DIABETESCONVENTION,
    label: t(
      'reimbursementHelper.practitionerSelectionOptions.DIABETESCONVENTION'
    ),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.NOTREIMBURSABLE,
    label: t(
      'reimbursementHelper.practitionerSelectionOptions.NOTREIMBURSABLE'
    ),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.EXPLAINMEDICATION,
    label: t(
      'reimbursementHelper.practitionerSelectionOptions.EXPLAINMEDICATION'
    ),
  },
  {
    value: Medication.InstructionsForReimbursementEnum.DIABETESSTARTPATH,
    label: t(
      'reimbursementHelper.practitionerSelectionOptions.DIABETESSTARTPATH'
    ),
  },
];

export function getCategoryLabelForReimbursement(
  code: string | undefined,
  translate: (key: string) => string
): string {
  if (!code) return '';
  return translate(`reimbursementHelper.categoryOptions.${code}`) || code;
}
