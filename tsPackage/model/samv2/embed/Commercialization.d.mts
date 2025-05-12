import { DataPeriod } from './DataPeriod.mjs';
import { SamText } from './SamText.mjs';
export declare class Commercialization implements DataPeriod {
    from: number | undefined;
    to: number | undefined;
    reason: SamText | undefined;
    endOfComercialization: SamText | undefined;
    impact: SamText | undefined;
    additionalInformation: SamText | undefined;
    constructor(partial: Partial<Commercialization>);
}
