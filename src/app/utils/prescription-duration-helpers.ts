export enum durationTimeUnitsEnum {
  DAY = 'DAY',
  WEEK = 'WEEK',
}

export const getDurationTimeUnits = (t: (key: string) => string) => [
  {
    value: durationTimeUnitsEnum.DAY,
    label: t('prescriptionDurationHelper.durationUnits.day'),
  },
  {
    value: durationTimeUnitsEnum.WEEK,
    label: t('prescriptionDurationHelper.durationUnits.week'),
  },
];

export enum periodicityTimeUnitsEnum {
  NONE = '0',
  WEEK = '7',
  TWO_WEEKS = '14',
  THREE_WEEKS = '21',
  NUMBER_OF_DAYS = '1',
}

export const getPeriodicityTimeUnits = (t: (key: string) => string) => [
  {
    value: periodicityTimeUnitsEnum.NONE,
    label: t('prescriptionDurationHelper.periodicityUnits.none'),
  },
  {
    value: periodicityTimeUnitsEnum.WEEK,
    label: t('prescriptionDurationHelper.periodicityUnits.week'),
  },
  {
    value: periodicityTimeUnitsEnum.TWO_WEEKS,
    label: t('prescriptionDurationHelper.periodicityUnits.twoWeeks'),
  },
  {
    value: periodicityTimeUnitsEnum.THREE_WEEKS,
    label: t('prescriptionDurationHelper.periodicityUnits.threeWeeks'),
  },
  {
    value: periodicityTimeUnitsEnum.NUMBER_OF_DAYS,
    label: t('prescriptionDurationHelper.periodicityUnits.numberOfDays'),
  },
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
