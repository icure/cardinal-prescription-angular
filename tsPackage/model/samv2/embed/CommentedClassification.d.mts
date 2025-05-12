import { CommentedClassification as CommentedClassification_ } from './CommentedClassification.mjs';
import { SamText } from './SamText.mjs';
export declare class CommentedClassification {
    title: SamText | undefined;
    url: SamText | undefined;
    commentedClassification: Array<CommentedClassification_> | undefined;
    constructor(partial: Partial<CommentedClassification>);
}
