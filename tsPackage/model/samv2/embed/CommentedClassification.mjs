export class CommentedClassification {
    constructor(partial) {
        this.title = undefined;
        this.url = undefined;
        this.commentedClassification = undefined;
        if ('title' in partial)
            this.title = partial.title;
        if ('url' in partial)
            this.url = partial.url;
        if ('commentedClassification' in partial)
            this.commentedClassification = partial.commentedClassification;
    }
}
//# sourceMappingURL=CommentedClassification.mjs.map