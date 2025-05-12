export class Dmpp {
    constructor(partial) {
        this.id = undefined;
        this.from = undefined;
        this.to = undefined;
        this.deliveryEnvironment = undefined;
        this.code = undefined;
        this.codeType = undefined;
        this.price = undefined;
        this.cheap = undefined;
        this.cheapest = undefined;
        this.reimbursable = undefined;
        this.reimbursements = undefined;
        this.productId = undefined;
        if ('id' in partial)
            this.id = partial.id;
        if ('from' in partial)
            this.from = partial.from;
        if ('to' in partial)
            this.to = partial.to;
        if ('deliveryEnvironment' in partial)
            this.deliveryEnvironment = partial.deliveryEnvironment;
        if ('code' in partial)
            this.code = partial.code;
        if ('codeType' in partial)
            this.codeType = partial.codeType;
        if ('price' in partial)
            this.price = partial.price;
        if ('cheap' in partial)
            this.cheap = partial.cheap;
        if ('cheapest' in partial)
            this.cheapest = partial.cheapest;
        if ('reimbursable' in partial)
            this.reimbursable = partial.reimbursable;
        if ('reimbursements' in partial)
            this.reimbursements = partial.reimbursements;
        if ('productId' in partial)
            this.productId = partial.productId;
    }
}
//# sourceMappingURL=Dmpp.mjs.map