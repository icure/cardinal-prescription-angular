export class Pricing {
    constructor(partial) {
        this.quantity = undefined;
        this.label = undefined;
        if ('quantity' in partial)
            this.quantity = partial.quantity;
        if ('label' in partial)
            this.label = partial.label;
    }
}
//# sourceMappingURL=Pricing.mjs.map