export class CodeStub {
    constructor(partial) {
        this.id = undefined;
        this.context = undefined;
        this.type = undefined;
        this.code = undefined;
        this.version = undefined;
        this.contextLabel = undefined;
        this.label = undefined;
        if ('id' in partial)
            this.id = partial.id;
        if ('context' in partial)
            this.context = partial.context;
        if ('type' in partial)
            this.type = partial.type;
        if ('code' in partial)
            this.code = partial.code;
        if ('version' in partial)
            this.version = partial.version;
        if ('contextLabel' in partial)
            this.contextLabel = partial.contextLabel;
        if ('label' in partial)
            this.label = partial.label;
    }
}
//# sourceMappingURL=CodeStub.mjs.map