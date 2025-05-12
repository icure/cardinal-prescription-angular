export class AmpComponent {
    constructor(partial) {
        this.from = undefined;
        this.to = undefined;
        this.ingredients = undefined;
        this.pharmaceuticalForms = undefined;
        this.routeOfAdministrations = undefined;
        this.dividable = undefined;
        this.scored = undefined;
        this.crushable = undefined;
        this.containsAlcohol = undefined;
        this.sugarFree = undefined;
        this.modifiedReleaseType = undefined;
        this.specificDrugDevice = undefined;
        this.dimensions = undefined;
        this.name = undefined;
        this.note = undefined;
        if ('from' in partial)
            this.from = partial.from;
        if ('to' in partial)
            this.to = partial.to;
        if ('ingredients' in partial)
            this.ingredients = partial.ingredients;
        if ('pharmaceuticalForms' in partial)
            this.pharmaceuticalForms = partial.pharmaceuticalForms;
        if ('routeOfAdministrations' in partial)
            this.routeOfAdministrations = partial.routeOfAdministrations;
        if ('dividable' in partial)
            this.dividable = partial.dividable;
        if ('scored' in partial)
            this.scored = partial.scored;
        if ('crushable' in partial)
            this.crushable = partial.crushable;
        if ('containsAlcohol' in partial)
            this.containsAlcohol = partial.containsAlcohol;
        if ('sugarFree' in partial)
            this.sugarFree = partial.sugarFree;
        if ('modifiedReleaseType' in partial)
            this.modifiedReleaseType = partial.modifiedReleaseType;
        if ('specificDrugDevice' in partial)
            this.specificDrugDevice = partial.specificDrugDevice;
        if ('dimensions' in partial)
            this.dimensions = partial.dimensions;
        if ('name' in partial)
            this.name = partial.name;
        if ('note' in partial)
            this.note = partial.note;
    }
}
//# sourceMappingURL=AmpComponent.mjs.map