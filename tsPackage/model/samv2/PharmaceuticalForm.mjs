// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class PharmaceuticalForm {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.code = undefined;
        this.name = undefined;
        this.standardForms = [];
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('code' in partial)
            this.code = partial.code;
        if ('name' in partial)
            this.name = partial.name;
        if ('standardForms' in partial && partial.standardForms !== undefined)
            this.standardForms = partial.standardForms;
    }
}
//# sourceMappingURL=PharmaceuticalForm.mjs.map