import { SamText } from '../embed/SamText.mjs';
import { VmpGroupStub } from './VmpGroupStub.mjs';
export declare class VmpStub {
    id: string;
    code: string | undefined;
    vmpGroup: VmpGroupStub | undefined;
    name: SamText | undefined;
    constructor(partial: Partial<VmpStub>);
}
