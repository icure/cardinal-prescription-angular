export class PharmaceuticalFormStub {
    constructor(partial) {
        this.id = undefined;
        this.code = undefined;
        this.name = undefined;
        this.standardForms = [];
        if ('id' in partial)
            this.id = partial.id;
        if ('code' in partial)
            this.code = partial.code;
        if ('name' in partial)
            this.name = partial.name;
        if ('standardForms' in partial && partial.standardForms !== undefined)
            this.standardForms = partial.standardForms;
    }
}
//# sourceMappingURL=PharmaceuticalFormStub.mjs.map