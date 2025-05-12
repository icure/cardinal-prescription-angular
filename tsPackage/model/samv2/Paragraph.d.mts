export declare class Paragraph {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    chapterName: string | undefined;
    paragraphName: string | undefined;
    startDate: number | undefined;
    createdTms: number | undefined;
    createdUserId: string | undefined;
    endDate: number | undefined;
    keyStringNl: string | undefined;
    keyStringFr: string | undefined;
    agreementType: string | undefined;
    processType: number | undefined;
    legalReference: string | undefined;
    publicationDate: number | undefined;
    modificationDate: number | undefined;
    processTypeOverrule: string | undefined;
    paragraphVersion: number | undefined;
    agreementTypePro: string | undefined;
    modificationStatus: string | undefined;
    constructor(partial: Partial<Paragraph>);
}
