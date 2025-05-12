import { DataPeriod } from './DataPeriod.mjs';
import { SamText } from './SamText.mjs';
export declare class SupplyProblem implements DataPeriod {
    from: number | undefined;
    to: number | undefined;
    reason: SamText | undefined;
    expectedEndOn: number | undefined;
    impact: SamText | undefined;
    additionalInformation: SamText | undefined;
    constructor(partial: Partial<SupplyProblem>);
}
