import { PrescribedMedicationType } from '../../shared/types';

export const convertYyyyMmDdNumberToIsoDate = (dateNumber: number): string => {
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
    return convertYyyyMmDdNumberToIsoDate(
      prescribedMedication?.medication.beginMoment
    );
  } else {
    return new Date().toISOString().split('T')[0];
  }
};

export const getExecutableUntilDate = (
  prescribedMedication?: PrescribedMedicationType
): string => {
  if (prescribedMedication?.medication.endMoment) {
    return convertYyyyMmDdNumberToIsoDate(
      prescribedMedication.medication.endMoment
    );
  } else {
    const startDay = new Date();
    const nextYear = new Date(startDay);
    nextYear.setFullYear(startDay.getFullYear() + 1);
    return nextYear.toISOString().split('T')[0];
  }
};

export const formatToDayMonthYear = (timestamp: number): string | undefined => {
  if (!timestamp) {
    return undefined;
  } else {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }
};

export function dateDecode(date: number): Date {
  return date > 99990000
    ? new Date(
        date / 10000000000,
        ((date / 100000000) % 100) - 1,
        (date / 1000000) % 100
      )
    : new Date(date / 10000, ((date / 100) % 100) - 1, date % 100);
}

export function dateEncode(date: Date): number {
  return (
    date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()
  );
}

export function offsetDate(date: number, offsetInDays: number): number {
  const result = new Date(dateDecode(date)); // Decode the date
  result.setDate(result.getDate() + offsetInDays); // Add or subtract the offset in days
  return dateEncode(result); // Encode it back to the required format
}
