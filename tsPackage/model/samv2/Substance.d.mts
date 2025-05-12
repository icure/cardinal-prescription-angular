import { SamText } from './embed/SamText.mjs';
import { StandardSubstance } from './embed/StandardSubstance.mjs';
export declare class Substance {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    code: string | undefined;
    chemicalForm: string | undefined;
    name: SamText | undefined;
    note: SamText | undefined;
    standardSubstances: Array<StandardSubstance> | undefined;
    constructor(partial: Partial<Substance>);
}
