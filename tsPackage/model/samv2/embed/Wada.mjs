export class Wada {
    constructor(partial) {
        this.code = undefined;
        this.name = undefined;
        this.description = undefined;
        if ('code' in partial)
            this.code = partial.code;
        if ('name' in partial)
            this.name = partial.name;
        if ('description' in partial)
            this.description = partial.description;
    }
}
//# sourceMappingURL=Wada.mjs.map