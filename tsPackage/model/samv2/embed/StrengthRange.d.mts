import { NumeratorRange } from './NumeratorRange.mjs';
import { Quantity } from './Quantity.mjs';
export declare class StrengthRange {
    numeratorRange: NumeratorRange | undefined;
    denominator: Quantity | undefined;
    constructor(partial: Partial<StrengthRange>);
}
