import { PrescribedMedicationType } from '../types';

export const formatDateForInput = (dateNumber: number): string => {
  const year = Math.floor(dateNumber / 10000);
  const month = Math.floor((dateNumber % 10000) / 100)
    .toString()
    .padStart(2, '0');
  const day = (dateNumber % 100).toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getTreatmentStartDate = (
  prescribedMedication?: PrescribedMedicationType
): string => {
  if (prescribedMedication?.medication.beginMoment) {
    return formatDateForInput(prescribedMedication?.medication.beginMoment);
  } else {
    return new Date().toISOString().split('T')[0];
  }
};

export const getExecutableUntilDate = (
  prescribedMedication?: PrescribedMedicationType
): string => {
  if (prescribedMedication?.medication.endMoment) {
    return formatDateForInput(prescribedMedication.medication.endMoment);
  } else {
    const startDay = new Date();
    const nextYear = new Date(startDay);
    nextYear.setFullYear(startDay.getFullYear() + 1);
    return nextYear.toISOString().split('T')[0];
  }
};
