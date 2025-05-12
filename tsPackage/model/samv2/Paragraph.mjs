// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class Paragraph {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.chapterName = undefined;
        this.paragraphName = undefined;
        this.startDate = undefined;
        this.createdTms = undefined;
        this.createdUserId = undefined;
        this.endDate = undefined;
        this.keyStringNl = undefined;
        this.keyStringFr = undefined;
        this.agreementType = undefined;
        this.processType = undefined;
        this.legalReference = undefined;
        this.publicationDate = undefined;
        this.modificationDate = undefined;
        this.processTypeOverrule = undefined;
        this.paragraphVersion = undefined;
        this.agreementTypePro = undefined;
        this.modificationStatus = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('chapterName' in partial)
            this.chapterName = partial.chapterName;
        if ('paragraphName' in partial)
            this.paragraphName = partial.paragraphName;
        if ('startDate' in partial)
            this.startDate = partial.startDate;
        if ('createdTms' in partial)
            this.createdTms = partial.createdTms;
        if ('createdUserId' in partial)
            this.createdUserId = partial.createdUserId;
        if ('endDate' in partial)
            this.endDate = partial.endDate;
        if ('keyStringNl' in partial)
            this.keyStringNl = partial.keyStringNl;
        if ('keyStringFr' in partial)
            this.keyStringFr = partial.keyStringFr;
        if ('agreementType' in partial)
            this.agreementType = partial.agreementType;
        if ('processType' in partial)
            this.processType = partial.processType;
        if ('legalReference' in partial)
            this.legalReference = partial.legalReference;
        if ('publicationDate' in partial)
            this.publicationDate = partial.publicationDate;
        if ('modificationDate' in partial)
            this.modificationDate = partial.modificationDate;
        if ('processTypeOverrule' in partial)
            this.processTypeOverrule = partial.processTypeOverrule;
        if ('paragraphVersion' in partial)
            this.paragraphVersion = partial.paragraphVersion;
        if ('agreementTypePro' in partial)
            this.agreementTypePro = partial.agreementTypePro;
        if ('modificationStatus' in partial)
            this.modificationStatus = partial.modificationStatus;
    }
}
//# sourceMappingURL=Paragraph.mjs.map