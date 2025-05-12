import { SubstanceStub } from '../stub/SubstanceStub.mjs';
import { ComplexStrength } from './ComplexStrength.mjs';
import { DataPeriod } from './DataPeriod.mjs';
import { IngredientType } from './IngredientType.mjs';
import { SamText } from './SamText.mjs';
export declare class Ingredient implements DataPeriod {
    from: number | undefined;
    to: number | undefined;
    rank: number | undefined;
    type: IngredientType | undefined;
    knownEffect: boolean | undefined;
    strengthDescription: string | undefined;
    strength: ComplexStrength | undefined;
    additionalInformation: SamText | undefined;
    substance: SubstanceStub | undefined;
    constructor(partial: Partial<Ingredient>);
}
