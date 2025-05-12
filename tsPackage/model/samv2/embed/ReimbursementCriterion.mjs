export class ReimbursementCriterion {
    constructor(partial) {
        this.category = undefined;
        this.code = undefined;
        this.description = undefined;
        if ('category' in partial)
            this.category = partial.category;
        if ('code' in partial)
            this.code = partial.code;
        if ('description' in partial)
            this.description = partial.description;
    }
}
//# sourceMappingURL=ReimbursementCriterion.mjs.map