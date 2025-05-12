export class AmppComponent {
    constructor(partial) {
        this.from = undefined;
        this.to = undefined;
        this.contentType = undefined;
        this.contentMultiplier = undefined;
        this.packSpecification = undefined;
        this.deviceType = undefined;
        this.packagingType = undefined;
        if ('from' in partial)
            this.from = partial.from;
        if ('to' in partial)
            this.to = partial.to;
        if ('contentType' in partial)
            this.contentType = partial.contentType;
        if ('contentMultiplier' in partial)
            this.contentMultiplier = partial.contentMultiplier;
        if ('packSpecification' in partial)
            this.packSpecification = partial.packSpecification;
        if ('deviceType' in partial)
            this.deviceType = partial.deviceType;
        if ('packagingType' in partial)
            this.packagingType = partial.packagingType;
    }
}
//# sourceMappingURL=AmppComponent.mjs.map