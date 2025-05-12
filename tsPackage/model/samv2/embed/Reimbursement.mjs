export class Reimbursement {
    constructor(partial) {
        this.from = undefined;
        this.to = undefined;
        this.deliveryEnvironment = undefined;
        this.code = undefined;
        this.codeType = undefined;
        this.multiple = undefined;
        this.temporary = undefined;
        this.reference = undefined;
        this.legalReferencePath = undefined;
        this.flatRateSystem = undefined;
        this.reimbursementBasePrice = undefined;
        this.referenceBasePrice = undefined;
        this.copaymentSupplement = undefined;
        this.pricingUnit = undefined;
        this.pricingSlice = undefined;
        this.reimbursementCriterion = undefined;
        this.copayments = undefined;
        if ('from' in partial)
            this.from = partial.from;
        if ('to' in partial)
            this.to = partial.to;
        if ('deliveryEnvironment' in partial)
            this.deliveryEnvironment = partial.deliveryEnvironment;
        if ('code' in partial)
            this.code = partial.code;
        if ('codeType' in partial)
            this.codeType = partial.codeType;
        if ('multiple' in partial)
            this.multiple = partial.multiple;
        if ('temporary' in partial)
            this.temporary = partial.temporary;
        if ('reference' in partial)
            this.reference = partial.reference;
        if ('legalReferencePath' in partial)
            this.legalReferencePath = partial.legalReferencePath;
        if ('flatRateSystem' in partial)
            this.flatRateSystem = partial.flatRateSystem;
        if ('reimbursementBasePrice' in partial)
            this.reimbursementBasePrice = partial.reimbursementBasePrice;
        if ('referenceBasePrice' in partial)
            this.referenceBasePrice = partial.referenceBasePrice;
        if ('copaymentSupplement' in partial)
            this.copaymentSupplement = partial.copaymentSupplement;
        if ('pricingUnit' in partial)
            this.pricingUnit = partial.pricingUnit;
        if ('pricingSlice' in partial)
            this.pricingSlice = partial.pricingSlice;
        if ('reimbursementCriterion' in partial)
            this.reimbursementCriterion = partial.reimbursementCriterion;
        if ('copayments' in partial)
            this.copayments = partial.copayments;
    }
}
//# sourceMappingURL=Reimbursement.mjs.map