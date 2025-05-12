import { SamText } from '../embed/SamText.mjs';
import { StandardSubstance } from '../embed/StandardSubstance.mjs';
export declare class SubstanceStub {
    id: string | undefined;
    code: string | undefined;
    chemicalForm: string | undefined;
    name: SamText | undefined;
    note: SamText | undefined;
    standardSubstances: Array<StandardSubstance> | undefined;
    constructor(partial: Partial<SubstanceStub>);
}
