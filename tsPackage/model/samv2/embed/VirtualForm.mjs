export class VirtualForm {
    constructor(partial) {
        this.name = undefined;
        this.standardForms = [];
        if ('name' in partial)
            this.name = partial.name;
        if ('standardForms' in partial && partial.standardForms !== undefined)
            this.standardForms = partial.standardForms;
    }
}
//# sourceMappingURL=VirtualForm.mjs.map