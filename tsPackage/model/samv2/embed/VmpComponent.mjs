export class VmpComponent {
    constructor(partial) {
        this.code = undefined;
        this.virtualForm = undefined;
        this.routeOfAdministrations = undefined;
        this.name = undefined;
        this.phaseNumber = undefined;
        this.virtualIngredients = undefined;
        if ('code' in partial)
            this.code = partial.code;
        if ('virtualForm' in partial)
            this.virtualForm = partial.virtualForm;
        if ('routeOfAdministrations' in partial)
            this.routeOfAdministrations = partial.routeOfAdministrations;
        if ('name' in partial)
            this.name = partial.name;
        if ('phaseNumber' in partial)
            this.phaseNumber = partial.phaseNumber;
        if ('virtualIngredients' in partial)
            this.virtualIngredients = partial.virtualIngredients;
    }
}
//# sourceMappingURL=VmpComponent.mjs.map