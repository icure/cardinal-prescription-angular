import { SamText } from './SamText.mjs';
export declare class DosageParameter {
    code: string | undefined;
    name: SamText | undefined;
    definition: SamText | undefined;
    standardUnit: string | undefined;
    snomedCT: string | undefined;
    constructor(partial: Partial<DosageParameter>);
}
