import { CodeStub } from '../../base/CodeStub.mjs';
import { SamText } from '../embed/SamText.mjs';
export declare class PharmaceuticalFormStub {
    id: string | undefined;
    code: string | undefined;
    name: SamText | undefined;
    standardForms: Array<CodeStub>;
    constructor(partial: Partial<PharmaceuticalFormStub>);
}
