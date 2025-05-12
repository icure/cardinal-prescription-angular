export class Indication {
    constructor(partial) {
        this.code = undefined;
        this.name = undefined;
        this.snomedCT = undefined;
        if ('code' in partial)
            this.code = partial.code;
        if ('name' in partial)
            this.name = partial.name;
        if ('snomedCT' in partial)
            this.snomedCT = partial.snomedCT;
    }
}
//# sourceMappingURL=Indication.mjs.map