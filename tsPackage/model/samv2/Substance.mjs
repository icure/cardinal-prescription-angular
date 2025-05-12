// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class Substance {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.code = undefined;
        this.chemicalForm = undefined;
        this.name = undefined;
        this.note = undefined;
        this.standardSubstances = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('code' in partial)
            this.code = partial.code;
        if ('chemicalForm' in partial)
            this.chemicalForm = partial.chemicalForm;
        if ('name' in partial)
            this.name = partial.name;
        if ('note' in partial)
            this.note = partial.note;
        if ('standardSubstances' in partial)
            this.standardSubstances = partial.standardSubstances;
    }
}
//# sourceMappingURL=Substance.mjs.map