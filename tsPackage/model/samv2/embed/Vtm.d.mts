import { DataPeriod } from './DataPeriod.mjs';
import { SamText } from './SamText.mjs';
export declare class Vtm implements DataPeriod {
    from: number | undefined;
    to: number | undefined;
    code: string | undefined;
    name: SamText | undefined;
    constructor(partial: Partial<Vtm>);
}
