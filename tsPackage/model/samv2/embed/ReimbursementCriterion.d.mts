import { SamText } from './SamText.mjs';
export declare class ReimbursementCriterion {
    category: string | undefined;
    code: string | undefined;
    description: SamText | undefined;
    constructor(partial: Partial<ReimbursementCriterion>);
}
