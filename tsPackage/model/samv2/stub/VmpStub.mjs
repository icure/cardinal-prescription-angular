// auto-generated file
import { randomUuid } from '../../../utils/Id.mjs';
export class VmpStub {
    constructor(partial) {
        var _a;
        this.code = undefined;
        this.vmpGroup = undefined;
        this.name = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('code' in partial)
            this.code = partial.code;
        if ('vmpGroup' in partial)
            this.vmpGroup = partial.vmpGroup;
        if ('name' in partial)
            this.name = partial.name;
    }
}
//# sourceMappingURL=VmpStub.mjs.map