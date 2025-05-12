import { CodeStub } from '../base/CodeStub.mjs';
import { SamText } from './embed/SamText.mjs';
export declare class PharmaceuticalForm {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    code: string | undefined;
    name: SamText | undefined;
    standardForms: Array<CodeStub>;
    constructor(partial: Partial<PharmaceuticalForm>);
}
