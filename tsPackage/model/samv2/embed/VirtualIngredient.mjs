export class VirtualIngredient {
    constructor(partial) {
        this.from = undefined;
        this.to = undefined;
        this.rank = undefined;
        this.type = undefined;
        this.strengthRange = undefined;
        this.substance = undefined;
        if ('from' in partial)
            this.from = partial.from;
        if ('to' in partial)
            this.to = partial.to;
        if ('rank' in partial)
            this.rank = partial.rank;
        if ('type' in partial)
            this.type = partial.type;
        if ('strengthRange' in partial)
            this.strengthRange = partial.strengthRange;
        if ('substance' in partial)
            this.substance = partial.substance;
    }
}
//# sourceMappingURL=VirtualIngredient.mjs.map