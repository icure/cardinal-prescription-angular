export class BoundedParameter {
    constructor(partial) {
        this.dosageParameter = undefined;
        this.lowerBound = undefined;
        this.upperBound = undefined;
        if ('dosageParameter' in partial)
            this.dosageParameter = partial.dosageParameter;
        if ('lowerBound' in partial)
            this.lowerBound = partial.lowerBound;
        if ('upperBound' in partial)
            this.upperBound = partial.upperBound;
    }
}
//# sourceMappingURL=BoundedParameter.mjs.map