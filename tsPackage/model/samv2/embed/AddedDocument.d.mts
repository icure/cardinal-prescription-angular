import { DataPeriod } from './DataPeriod.mjs';
export declare class AddedDocument implements DataPeriod {
    from: number | undefined;
    to: number | undefined;
    verseSeq: number;
    documentSeq: number;
    mimeType: string | undefined;
    addressUrl: string | undefined;
    descrNl: string | undefined;
    descrFr: string | undefined;
    localPath: string | undefined;
    constructor(partial: Partial<AddedDocument> & Pick<AddedDocument, "verseSeq" | "documentSeq">);
}
