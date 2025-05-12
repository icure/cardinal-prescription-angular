export class ComplexStrength {
    constructor(partial) {
        this.operator = undefined;
        this.quantity = undefined;
        this.secondQuantity = undefined;
        if ('operator' in partial)
            this.operator = partial.operator;
        if ('quantity' in partial)
            this.quantity = partial.quantity;
        if ('secondQuantity' in partial)
            this.secondQuantity = partial.secondQuantity;
    }
}
//# sourceMappingURL=ComplexStrength.mjs.map