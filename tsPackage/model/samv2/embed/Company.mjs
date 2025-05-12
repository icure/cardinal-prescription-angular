export class Company {
    constructor(partial) {
        this.from = undefined;
        this.to = undefined;
        this.authorisationNr = undefined;
        this.vatNr = undefined;
        this.europeanNr = undefined;
        this.denomination = undefined;
        this.legalForm = undefined;
        this.building = undefined;
        this.streetName = undefined;
        this.streetNum = undefined;
        this.postbox = undefined;
        this.postcode = undefined;
        this.city = undefined;
        this.countryCode = undefined;
        this.phone = undefined;
        this.language = undefined;
        this.website = undefined;
        if ('from' in partial)
            this.from = partial.from;
        if ('to' in partial)
            this.to = partial.to;
        if ('authorisationNr' in partial)
            this.authorisationNr = partial.authorisationNr;
        if ('vatNr' in partial)
            this.vatNr = partial.vatNr;
        if ('europeanNr' in partial)
            this.europeanNr = partial.europeanNr;
        if ('denomination' in partial)
            this.denomination = partial.denomination;
        if ('legalForm' in partial)
            this.legalForm = partial.legalForm;
        if ('building' in partial)
            this.building = partial.building;
        if ('streetName' in partial)
            this.streetName = partial.streetName;
        if ('streetNum' in partial)
            this.streetNum = partial.streetNum;
        if ('postbox' in partial)
            this.postbox = partial.postbox;
        if ('postcode' in partial)
            this.postcode = partial.postcode;
        if ('city' in partial)
            this.city = partial.city;
        if ('countryCode' in partial)
            this.countryCode = partial.countryCode;
        if ('phone' in partial)
            this.phone = partial.phone;
        if ('language' in partial)
            this.language = partial.language;
        if ('website' in partial)
            this.website = partial.website;
    }
}
//# sourceMappingURL=Company.mjs.map