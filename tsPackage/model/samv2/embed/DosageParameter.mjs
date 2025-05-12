export class DosageParameter {
    constructor(partial) {
        this.code = undefined;
        this.name = undefined;
        this.definition = undefined;
        this.standardUnit = undefined;
        this.snomedCT = undefined;
        if ('code' in partial)
            this.code = partial.code;
        if ('name' in partial)
            this.name = partial.name;
        if ('definition' in partial)
            this.definition = partial.definition;
        if ('standardUnit' in partial)
            this.standardUnit = partial.standardUnit;
        if ('snomedCT' in partial)
            this.snomedCT = partial.snomedCT;
    }
}
//# sourceMappingURL=DosageParameter.mjs.map