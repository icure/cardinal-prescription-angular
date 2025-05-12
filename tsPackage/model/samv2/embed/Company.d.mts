import { DataPeriod } from './DataPeriod.mjs';
export declare class Company implements DataPeriod {
    from: number | undefined;
    to: number | undefined;
    authorisationNr: string | undefined;
    vatNr: {
        [key: string]: string;
    } | undefined;
    europeanNr: string | undefined;
    denomination: string | undefined;
    legalForm: string | undefined;
    building: string | undefined;
    streetName: string | undefined;
    streetNum: string | undefined;
    postbox: string | undefined;
    postcode: string | undefined;
    city: string | undefined;
    countryCode: string | undefined;
    phone: string | undefined;
    language: string | undefined;
    website: string | undefined;
    constructor(partial: Partial<Company>);
}
