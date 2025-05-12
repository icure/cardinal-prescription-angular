// auto-generated file
import { randomUuid } from '../../../utils/Id.mjs';
export class VmpGroupStub {
    constructor(partial) {
        var _a;
        this.code = undefined;
        this.name = undefined;
        this.productId = undefined;
        this.id = (_a = partial.id) !== null && _a !== void 0 ? _a : randomUuid();
        if ('code' in partial)
            this.code = partial.code;
        if ('name' in partial)
            this.name = partial.name;
        if ('productId' in partial)
            this.productId = partial.productId;
    }
}
//# sourceMappingURL=VmpGroupStub.mjs.map