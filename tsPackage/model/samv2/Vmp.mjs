// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class Vmp {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.from = undefined;
        this.to = undefined;
        this.code = undefined;
        this.vmpGroup = undefined;
        this.singleAdministrationDose = undefined;
        this.name = undefined;
        this.abbreviation = undefined;
        this.vtm = undefined;
        this.wadas = undefined;
        this.components = undefined;
        this.commentedClassifications = undefined;
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
        if ('vmpGroup' in partial)
            this.vmpGroup = partial.vmpGroup;
        if ('singleAdministrationDose' in partial)
            this.singleAdministrationDose = partial.singleAdministrationDose;
        if ('name' in partial)
            this.name = partial.name;
        if ('abbreviation' in partial)
            this.abbreviation = partial.abbreviation;
        if ('vtm' in partial)
            this.vtm = partial.vtm;
        if ('wadas' in partial)
            this.wadas = partial.wadas;
        if ('components' in partial)
            this.components = partial.components;
        if ('commentedClassifications' in partial)
            this.commentedClassifications = partial.commentedClassifications;
    }
}
//# sourceMappingURL=Vmp.mjs.map