export class StandardDosage {
    constructor(partial) {
        this.code = undefined;
        this.targetGroup = undefined;
        this.kidneyFailureClass = undefined;
        this.liverFailureClass = undefined;
        this.treatmentDurationType = undefined;
        this.temporalityDuration = undefined;
        this.temporalityUserProvided = undefined;
        this.temporalityNote = undefined;
        this.quantity = undefined;
        this.quantityDenominator = undefined;
        this.quantityMultiplicator = undefined;
        this.quantityRangeLower = undefined;
        this.quantityRangeLowerDenominator = undefined;
        this.quantityRangeUpper = undefined;
        this.quantityRangeUpperDenominator = undefined;
        this.administrationFrequencyQuantity = undefined;
        this.administrationFrequencyIsMax = undefined;
        this.administrationFrequencyTimeframe = undefined;
        this.maximumAdministrationQuantity = undefined;
        this.maximumAdministrationQuantityDenominator = undefined;
        this.maximumAdministrationQuantityMultiplicator = undefined;
        this.maximumDailyQuantity = undefined;
        this.maximumDailyQuantityDenominator = undefined;
        this.maximumDailyQuantityMultiplicator = undefined;
        this.textualDosage = undefined;
        this.supplementaryInfo = undefined;
        this.routeSpecification = undefined;
        this.indication = undefined;
        this.parameterBounds = undefined;
        this.routeOfAdministration = undefined;
        if ('code' in partial)
            this.code = partial.code;
        if ('targetGroup' in partial)
            this.targetGroup = partial.targetGroup;
        if ('kidneyFailureClass' in partial)
            this.kidneyFailureClass = partial.kidneyFailureClass;
        if ('liverFailureClass' in partial)
            this.liverFailureClass = partial.liverFailureClass;
        if ('treatmentDurationType' in partial)
            this.treatmentDurationType = partial.treatmentDurationType;
        if ('temporalityDuration' in partial)
            this.temporalityDuration = partial.temporalityDuration;
        if ('temporalityUserProvided' in partial)
            this.temporalityUserProvided = partial.temporalityUserProvided;
        if ('temporalityNote' in partial)
            this.temporalityNote = partial.temporalityNote;
        if ('quantity' in partial)
            this.quantity = partial.quantity;
        if ('quantityDenominator' in partial)
            this.quantityDenominator = partial.quantityDenominator;
        if ('quantityMultiplicator' in partial)
            this.quantityMultiplicator = partial.quantityMultiplicator;
        if ('quantityRangeLower' in partial)
            this.quantityRangeLower = partial.quantityRangeLower;
        if ('quantityRangeLowerDenominator' in partial)
            this.quantityRangeLowerDenominator = partial.quantityRangeLowerDenominator;
        if ('quantityRangeUpper' in partial)
            this.quantityRangeUpper = partial.quantityRangeUpper;
        if ('quantityRangeUpperDenominator' in partial)
            this.quantityRangeUpperDenominator = partial.quantityRangeUpperDenominator;
        if ('administrationFrequencyQuantity' in partial)
            this.administrationFrequencyQuantity = partial.administrationFrequencyQuantity;
        if ('administrationFrequencyIsMax' in partial)
            this.administrationFrequencyIsMax = partial.administrationFrequencyIsMax;
        if ('administrationFrequencyTimeframe' in partial)
            this.administrationFrequencyTimeframe = partial.administrationFrequencyTimeframe;
        if ('maximumAdministrationQuantity' in partial)
            this.maximumAdministrationQuantity = partial.maximumAdministrationQuantity;
        if ('maximumAdministrationQuantityDenominator' in partial)
            this.maximumAdministrationQuantityDenominator = partial.maximumAdministrationQuantityDenominator;
        if ('maximumAdministrationQuantityMultiplicator' in partial)
            this.maximumAdministrationQuantityMultiplicator = partial.maximumAdministrationQuantityMultiplicator;
        if ('maximumDailyQuantity' in partial)
            this.maximumDailyQuantity = partial.maximumDailyQuantity;
        if ('maximumDailyQuantityDenominator' in partial)
            this.maximumDailyQuantityDenominator = partial.maximumDailyQuantityDenominator;
        if ('maximumDailyQuantityMultiplicator' in partial)
            this.maximumDailyQuantityMultiplicator = partial.maximumDailyQuantityMultiplicator;
        if ('textualDosage' in partial)
            this.textualDosage = partial.textualDosage;
        if ('supplementaryInfo' in partial)
            this.supplementaryInfo = partial.supplementaryInfo;
        if ('routeSpecification' in partial)
            this.routeSpecification = partial.routeSpecification;
        if ('indication' in partial)
            this.indication = partial.indication;
        if ('parameterBounds' in partial)
            this.parameterBounds = partial.parameterBounds;
        if ('routeOfAdministration' in partial)
            this.routeOfAdministration = partial.routeOfAdministration;
    }
}
//# sourceMappingURL=StandardDosage.mjs.map