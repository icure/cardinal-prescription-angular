export class Commercialization {
    constructor(partial) {
        this.from = undefined;
        this.to = undefined;
        this.reason = undefined;
        this.endOfComercialization = undefined;
        this.impact = undefined;
        this.additionalInformation = undefined;
        if ('from' in partial)
            this.from = partial.from;
        if ('to' in partial)
            this.to = partial.to;
        if ('reason' in partial)
            this.reason = partial.reason;
        if ('endOfComercialization' in partial)
            this.endOfComercialization = partial.endOfComercialization;
        if ('impact' in partial)
            this.impact = partial.impact;
        if ('additionalInformation' in partial)
            this.additionalInformation = partial.additionalInformation;
    }
}
//# sourceMappingURL=Commercialization.mjs.map