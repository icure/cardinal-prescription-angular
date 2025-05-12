// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class Amp {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.from = undefined;
        this.to = undefined;
        this.code = undefined;
        this.vmp = undefined;
        this.officialName = undefined;
        this.status = undefined;
        this.name = undefined;
        this.blackTriangle = false;
        this.medicineType = undefined;
        this.company = undefined;
        this.abbreviatedName = undefined;
        this.proprietarySuffix = undefined;
        this.prescriptionName = undefined;
        this.ampps = [];
        this.components = [];
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('from' in partial)
            this.from = partial.from;
        if ('to' in partial)
            this.to = partial.to;
        if ('code' in partial)
            this.code = partial.code;
        if ('vmp' in partial)
            this.vmp = partial.vmp;
        if ('officialName' in partial)
            this.officialName = partial.officialName;
        if ('status' in partial)
            this.status = partial.status;
        if ('name' in partial)
            this.name = partial.name;
        if ('blackTriangle' in partial && partial.blackTriangle !== undefined)
            this.blackTriangle = partial.blackTriangle;
        if ('medicineType' in partial)
            this.medicineType = partial.medicineType;
        if ('company' in partial)
            this.company = partial.company;
        if ('abbreviatedName' in partial)
            this.abbreviatedName = partial.abbreviatedName;
        if ('proprietarySuffix' in partial)
            this.proprietarySuffix = partial.proprietarySuffix;
        if ('prescriptionName' in partial)
            this.prescriptionName = partial.prescriptionName;
        if ('ampps' in partial && partial.ampps !== undefined)
            this.ampps = partial.ampps;
        if ('components' in partial && partial.components !== undefined)
            this.components = partial.components;
    }
}
//# sourceMappingURL=Amp.mjs.map