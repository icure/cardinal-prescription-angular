import { PharmacistVisibility, PractitionerVisibility } from '../../types';

export const practitionerVisibilityOptions: {
  value: PractitionerVisibility;
  label: string;
}[] = [
  { value: 'open', label: 'Visible pour tous les prescripteurs' },
  { value: 'locked', label: 'Visible uniquement pour moi-même' },
  {
    value: 'gmd_prescriber',
    label: 'Visible uniquement pour le titulaire du DMG',
  },
];

export const pharmacistVisibilityOptions: {
  value: PharmacistVisibility;
  label: string;
}[] = [
  {
    value: 'NULL',
    label: 'Le médicament est visible par tous les pharmaciens',
  },
  {
    value: 'locked',
    label: 'Le médicament n`est pas visible par tous les pharmaciens',
  },
];
