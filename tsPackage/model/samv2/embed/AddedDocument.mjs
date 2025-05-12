export class AddedDocument {
    constructor(partial) {
        this.from = undefined;
        this.to = undefined;
        this.mimeType = undefined;
        this.addressUrl = undefined;
        this.descrNl = undefined;
        this.descrFr = undefined;
        this.localPath = undefined;
        if ('from' in partial)
            this.from = partial.from;
        if ('to' in partial)
            this.to = partial.to;
        this.verseSeq = partial.verseSeq;
        this.documentSeq = partial.documentSeq;
        if ('mimeType' in partial)
            this.mimeType = partial.mimeType;
        if ('addressUrl' in partial)
            this.addressUrl = partial.addressUrl;
        if ('descrNl' in partial)
            this.descrNl = partial.descrNl;
        if ('descrFr' in partial)
            this.descrFr = partial.descrFr;
        if ('localPath' in partial)
            this.localPath = partial.localPath;
    }
}
//# sourceMappingURL=AddedDocument.mjs.map