export class Vtm {
    constructor(partial) {
        this.from = undefined;
        this.to = undefined;
        this.code = undefined;
        this.name = undefined;
        if ('from' in partial)
            this.from = partial.from;
        if ('to' in partial)
            this.to = partial.to;
        if ('code' in partial)
            this.code = partial.code;
        if ('name' in partial)
            this.name = partial.name;
    }
}
//# sourceMappingURL=Vtm.mjs.map