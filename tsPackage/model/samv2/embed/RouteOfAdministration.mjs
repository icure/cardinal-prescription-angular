export class RouteOfAdministration {
    constructor(partial) {
        this.code = undefined;
        this.name = undefined;
        this.standardRoutes = [];
        if ('code' in partial)
            this.code = partial.code;
        if ('name' in partial)
            this.name = partial.name;
        if ('standardRoutes' in partial && partial.standardRoutes !== undefined)
            this.standardRoutes = partial.standardRoutes;
    }
}
//# sourceMappingURL=RouteOfAdministration.mjs.map