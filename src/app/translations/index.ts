import { homeTranslations } from './home.translations';
import { prescriptionTranslations } from './prescription.translations';
import { medicationTranslations } from './medication.translations';
import { practitionerTranslations } from './practitioner.translations';
import { prescriptionVisibilityTranslations } from './utils/visibility-helpers.translations';
import { reimbursementTranslations } from './utils/reimbursement-helpers.translations';
import { prescriptionDurationTranslations } from './utils/prescription-duration-helpers.translations';
import { deliveryModusTranslations } from './utils/delivery-helpers.translations';

export const appTranslations = {
  fr: {
    home: homeTranslations.fr,
    prescription: prescriptionTranslations.fr,
    medication: medicationTranslations.fr,
    practitioner: practitionerTranslations.fr,
    prescriptionVisibilityHelper: prescriptionVisibilityTranslations.fr,
    reimbursementHelper: reimbursementTranslations.fr,
    prescriptionDurationHelper: prescriptionDurationTranslations.fr,
    deliveryModusHelper: deliveryModusTranslations.fr,
  },
  en: {
    home: homeTranslations.en,
    prescription: prescriptionTranslations.en,
    medication: medicationTranslations.en,
    practitioner: practitionerTranslations.en,
    prescriptionVisibilityHelper: prescriptionVisibilityTranslations.en,
    reimbursementHelper: reimbursementTranslations.en,
    prescriptionDurationHelper: prescriptionDurationTranslations.en,
    deliveryModusHelper: deliveryModusTranslations.en,
  },
};
