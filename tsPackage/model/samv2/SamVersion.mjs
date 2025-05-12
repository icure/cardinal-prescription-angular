// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class SamVersion {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.version = undefined;
        this.date = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('rev' in partial)
            this.rev = partial.rev;
        if ('deletionDate' in partial)
            this.deletionDate = partial.deletionDate;
        if ('version' in partial)
            this.version = partial.version;
        if ('date' in partial)
            this.date = partial.date;
    }
}
//# sourceMappingURL=SamVersion.mjs.map