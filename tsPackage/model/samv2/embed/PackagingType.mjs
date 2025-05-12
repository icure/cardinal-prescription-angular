export class PackagingType {
    constructor(partial) {
        this.code = undefined;
        this.name = undefined;
        this.edqmCode = undefined;
        this.edqmDefinition = undefined;
        if ('code' in partial)
            this.code = partial.code;
        if ('name' in partial)
            this.name = partial.name;
        if ('edqmCode' in partial)
            this.edqmCode = partial.edqmCode;
        if ('edqmDefinition' in partial)
            this.edqmDefinition = partial.edqmDefinition;
    }
}
//# sourceMappingURL=PackagingType.mjs.map