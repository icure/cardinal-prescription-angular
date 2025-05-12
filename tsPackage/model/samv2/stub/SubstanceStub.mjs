export class SubstanceStub {
    constructor(partial) {
        this.id = undefined;
        this.code = undefined;
        this.chemicalForm = undefined;
        this.name = undefined;
        this.note = undefined;
        this.standardSubstances = undefined;
        if ('id' in partial)
            this.id = partial.id;
        if ('code' in partial)
            this.code = partial.code;
        if ('chemicalForm' in partial)
            this.chemicalForm = partial.chemicalForm;
        if ('name' in partial)
            this.name = partial.name;
        if ('note' in partial)
            this.note = partial.note;
        if ('standardSubstances' in partial)
            this.standardSubstances = partial.standardSubstances;
    }
}
//# sourceMappingURL=SubstanceStub.mjs.map