import { PharmacistVisibilityType, PractitionerVisibilityType } from '../types';
import { TranslationService } from '../services/translation/translation.service';

export function getPractitionerVisibilityOptions(
  t: TranslationService['translate']
): {
  value: PractitionerVisibilityType;
  label: string;
}[] {
  return [
    {
      value: 'open',
      label: t('prescriptionVisibilityHelper.practitionerVisibility.open'),
    },
    {
      value: 'locked',
      label: t('prescriptionVisibilityHelper.practitionerVisibility.locked'),
    },
    {
      value: 'gmd_prescriber',
      label: t(
        'prescriptionVisibilityHelper.practitionerVisibility.gmd_prescriber'
      ),
    },
  ];
}

export function getPharmacistVisibilityOptions(
  t: TranslationService['translate']
): {
  value: PharmacistVisibilityType;
  label: string;
}[] {
  return [
    {
      value: null,
      label: t('prescriptionVisibilityHelper.pharmacistVisibility.null'),
    },
    {
      value: 'locked',
      label: t('prescriptionVisibilityHelper.pharmacistVisibility.locked'),
    },
  ];
}
