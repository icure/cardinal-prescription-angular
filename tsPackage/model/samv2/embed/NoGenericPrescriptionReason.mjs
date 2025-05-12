export class NoGenericPrescriptionReason {
    constructor(partial) {
        this.code = undefined;
        this.description = undefined;
        if ('code' in partial)
            this.code = partial.code;
        if ('description' in partial)
            this.description = partial.description;
    }
}
//# sourceMappingURL=NoGenericPrescriptionReason.mjs.map