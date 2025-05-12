import { CodeIdentification } from './CodeIdentification.mjs';
export declare class CodeStub implements CodeIdentification<string | undefined> {
    id: string | undefined;
    context: string | undefined;
    type: string | undefined;
    code: string | undefined;
    version: string | undefined;
    contextLabel: string | undefined;
    label: {
        [key: string]: string;
    } | undefined;
    constructor(partial: Partial<CodeStub>);
}
