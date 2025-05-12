// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class VmpGroup {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.from = undefined;
        this.to = undefined;
        this.productId = undefined;
        this.code = undefined;
        this.name = undefined;
        this.noGenericPrescriptionReason = undefined;
        this.noSwitchReason = undefined;
        this.singleAdministrationDose = undefined;
        this.standardDosage = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('from' in partial)
            this.from = partial.from;
        if ('to' in partial)
            this.to = partial.to;
        if ('productId' in partial)
            this.productId = partial.productId;
        if ('code' in partial)
            this.code = partial.code;
        if ('name' in partial)
            this.name = partial.name;
        if ('noGenericPrescriptionReason' in partial)
            this.noGenericPrescriptionReason = partial.noGenericPrescriptionReason;
        if ('noSwitchReason' in partial)
            this.noSwitchReason = partial.noSwitchReason;
        if ('singleAdministrationDose' in partial)
            this.singleAdministrationDose = partial.singleAdministrationDose;
        if ('standardDosage' in partial)
            this.standardDosage = partial.standardDosage;
    }
}
//# sourceMappingURL=VmpGroup.mjs.map