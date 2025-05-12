export class StrengthRange {
    constructor(partial) {
        this.numeratorRange = undefined;
        this.denominator = undefined;
        if ('numeratorRange' in partial)
            this.numeratorRange = partial.numeratorRange;
        if ('denominator' in partial)
            this.denominator = partial.denominator;
    }
}
//# sourceMappingURL=StrengthRange.mjs.map