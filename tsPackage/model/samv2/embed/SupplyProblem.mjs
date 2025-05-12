export class SupplyProblem {
    constructor(partial) {
        this.from = undefined;
        this.to = undefined;
        this.reason = undefined;
        this.expectedEndOn = undefined;
        this.impact = undefined;
        this.additionalInformation = undefined;
        if ('from' in partial)
            this.from = partial.from;
        if ('to' in partial)
            this.to = partial.to;
        if ('reason' in partial)
            this.reason = partial.reason;
        if ('expectedEndOn' in partial)
            this.expectedEndOn = partial.expectedEndOn;
        if ('impact' in partial)
            this.impact = partial.impact;
        if ('additionalInformation' in partial)
            this.additionalInformation = partial.additionalInformation;
    }
}
//# sourceMappingURL=SupplyProblem.mjs.map