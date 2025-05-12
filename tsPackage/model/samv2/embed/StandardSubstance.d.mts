import { SamText } from './SamText.mjs';
import { StandardSubstanceType } from './StandardSubstanceType.mjs';
export declare class StandardSubstance {
    code: string | undefined;
    type: StandardSubstanceType | undefined;
    name: SamText | undefined;
    definition: SamText | undefined;
    url: string | undefined;
    constructor(partial: Partial<StandardSubstance>);
}
