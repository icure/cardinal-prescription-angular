import { CodeStub } from '../../base/CodeStub.mjs';
import { SamText } from './SamText.mjs';
export declare class VirtualForm {
    name: SamText | undefined;
    standardForms: Array<CodeStub>;
    constructor(partial: Partial<VirtualForm>);
}
