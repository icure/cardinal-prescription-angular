import { SamText } from './embed/SamText.mjs';
export declare class Nmp {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    from: number | undefined;
    to: number | undefined;
    code: string | undefined;
    productId: string | undefined;
    category: string | undefined;
    commercialStatus: string | undefined;
    name: SamText | undefined;
    producer: SamText | undefined;
    distributor: SamText | undefined;
    constructor(partial: Partial<Nmp>);
}
