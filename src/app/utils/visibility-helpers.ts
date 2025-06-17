import { PharmacistVisibilityType, PractitionerVisibilityType } from '../types';

export const practitionerVisibilityOptions: {
  value: PractitionerVisibilityType;
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
  value: PharmacistVisibilityType;
  label: string;
}[] = [
  {
    value: null,
    label: 'Le médicament est visible par tous les pharmaciens',
  },
  {
    value: 'locked',
    label: 'Le médicament n`est pas visible par tous les pharmaciens',
  },
];
