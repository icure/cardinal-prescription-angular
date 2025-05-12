// auto-generated file
import { randomUuid } from '../../utils/Id.mjs';
export class Nmp {
    constructor(partial) {
        var _a;
        this.rev = undefined;
        this.deletionDate = undefined;
        this.from = undefined;
        this.to = undefined;
        this.code = undefined;
        this.productId = undefined;
        this.category = undefined;
        this.commercialStatus = undefined;
        this.name = undefined;
        this.producer = undefined;
        this.distributor = undefined;
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
        if ('productId' in partial)
            this.productId = partial.productId;
        if ('category' in partial)
            this.category = partial.category;
        if ('commercialStatus' in partial)
            this.commercialStatus = partial.commercialStatus;
        if ('name' in partial)
            this.name = partial.name;
        if ('producer' in partial)
            this.producer = partial.producer;
        if ('distributor' in partial)
            this.distributor = partial.distributor;
    }
}
//# sourceMappingURL=Nmp.mjs.map