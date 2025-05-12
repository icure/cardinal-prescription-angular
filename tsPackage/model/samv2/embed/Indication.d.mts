import { SamText } from './SamText.mjs';
export declare class Indication {
    code: string | undefined;
    name: SamText | undefined;
    snomedCT: string | undefined;
    constructor(partial: Partial<Indication>);
}
