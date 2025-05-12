import { DataPeriod } from './DataPeriod.mjs';
export declare class Copayment implements DataPeriod {
    regimeType: number | undefined;
    from: number | undefined;
    to: number | undefined;
    feeAmount: string | undefined;
    constructor(partial: Partial<Copayment>);
}
