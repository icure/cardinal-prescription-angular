import { CommentedClassification } from './embed/CommentedClassification.mjs';
import { Quantity } from './embed/Quantity.mjs';
import { SamText } from './embed/SamText.mjs';
import { VmpComponent } from './embed/VmpComponent.mjs';
import { Vtm } from './embed/Vtm.mjs';
import { Wada } from './embed/Wada.mjs';
import { VmpGroupStub } from './stub/VmpGroupStub.mjs';
export declare class Vmp {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    from: number | undefined;
    to: number | undefined;
    code: string | undefined;
    vmpGroup: VmpGroupStub | undefined;
    singleAdministrationDose: Quantity | undefined;
    name: SamText | undefined;
    abbreviation: SamText | undefined;
    vtm: Vtm | undefined;
    wadas: Array<Wada> | undefined;
    components: Array<VmpComponent> | undefined;
    commentedClassifications: Array<CommentedClassification> | undefined;
    constructor(partial: Partial<Vmp>);
}
