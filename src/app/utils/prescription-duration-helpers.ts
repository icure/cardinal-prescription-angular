export enum durationTimeUnitsEnum {
  DAY = 'jour',
  WEEK = 'semaine',
}

export const durationTimeUnits = [
  { value: durationTimeUnitsEnum.DAY, label: durationTimeUnitsEnum.DAY },
  { value: durationTimeUnitsEnum.WEEK, label: durationTimeUnitsEnum.WEEK },
];

export enum periodicityTimeUnitsEnum {
  NONE = 'aucune',
  WEEK = 'semaine',
  TWO_WEEKS = '2 semaines',
  THREE_WEEKS = '3 semaines',
  NUMBER_OF_DAYS = 'x nombre de jours',
}

export const periodicityTimeUnits = [
  { value: '0', label: periodicityTimeUnitsEnum.NONE },
  { value: '7', label: periodicityTimeUnitsEnum.WEEK },
  { value: '14', label: periodicityTimeUnitsEnum.TWO_WEEKS },
  { value: '21', label: periodicityTimeUnitsEnum.THREE_WEEKS },
  { value: '1', label: periodicityTimeUnitsEnum.NUMBER_OF_DAYS },
];

export const getDurationInDays = (
  timeUnit: durationTimeUnitsEnum,
  value: number
): number => {
  if (timeUnit === durationTimeUnitsEnum.DAY) {
    return value;
  } else if (timeUnit === durationTimeUnitsEnum.WEEK) {
    return value * 7;
  }
  // Handle unexpected values of timeUnit (optional but recommended)
  throw new Error(`Invalid time unit: ${timeUnit}`);
};

export const getDurationFromDays = (numberOfDays: number) => {
  if (numberOfDays % 7 === 0) {
    return {
      duration: numberOfDays / 7,
      durationTimeUnit: durationTimeUnitsEnum.WEEK,
    };
  } else {
    return {
      duration: numberOfDays,
      durationTimeUnit: durationTimeUnitsEnum.DAY,
    };
  }
};
