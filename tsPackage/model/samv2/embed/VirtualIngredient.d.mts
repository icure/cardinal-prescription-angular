import { SubstanceStub } from '../stub/SubstanceStub.mjs';
import { DataPeriod } from './DataPeriod.mjs';
import { IngredientType } from './IngredientType.mjs';
import { StrengthRange } from './StrengthRange.mjs';
export declare class VirtualIngredient implements DataPeriod {
    from: number | undefined;
    to: number | undefined;
    rank: number | undefined;
    type: IngredientType | undefined;
    strengthRange: StrengthRange | undefined;
    substance: SubstanceStub | undefined;
    constructor(partial: Partial<VirtualIngredient>);
}
