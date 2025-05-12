export class Copayment {
    constructor(partial) {
        this.regimeType = undefined;
        this.from = undefined;
        this.to = undefined;
        this.feeAmount = undefined;
        if ('regimeType' in partial)
            this.regimeType = partial.regimeType;
        if ('from' in partial)
            this.from = partial.from;
        if ('to' in partial)
            this.to = partial.to;
        if ('feeAmount' in partial)
            this.feeAmount = partial.feeAmount;
    }
}
//# sourceMappingURL=Copayment.mjs.map