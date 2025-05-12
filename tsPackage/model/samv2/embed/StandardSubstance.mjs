export class StandardSubstance {
    constructor(partial) {
        this.code = undefined;
        this.type = undefined;
        this.name = undefined;
        this.definition = undefined;
        this.url = undefined;
        if ('code' in partial)
            this.code = partial.code;
        if ('type' in partial)
            this.type = partial.type;
        if ('name' in partial)
            this.name = partial.name;
        if ('definition' in partial)
            this.definition = partial.definition;
        if ('url' in partial)
            this.url = partial.url;
    }
}
//# sourceMappingURL=StandardSubstance.mjs.map