export class Ingredient {
    constructor(partial) {
        this.from = undefined;
        this.to = undefined;
        this.rank = undefined;
        this.type = undefined;
        this.knownEffect = undefined;
        this.strengthDescription = undefined;
        this.strength = undefined;
        this.additionalInformation = undefined;
        this.substance = undefined;
        if ('from' in partial)
            this.from = partial.from;
        if ('to' in partial)
            this.to = partial.to;
        if ('rank' in partial)
            this.rank = partial.rank;
        if ('type' in partial)
            this.type = partial.type;
        if ('knownEffect' in partial)
            this.knownEffect = partial.knownEffect;
        if ('strengthDescription' in partial)
            this.strengthDescription = partial.strengthDescription;
        if ('strength' in partial)
            this.strength = partial.strength;
        if ('additionalInformation' in partial)
            this.additionalInformation = partial.additionalInformation;
        if ('substance' in partial)
            this.substance = partial.substance;
    }
}
//# sourceMappingURL=Ingredient.mjs.map