import { NoGenericPrescriptionReason } from './embed/NoGenericPrescriptionReason.mjs';
import { NoSwitchReason } from './embed/NoSwitchReason.mjs';
import { Quantity } from './embed/Quantity.mjs';
import { SamText } from './embed/SamText.mjs';
import { StandardDosage } from './embed/StandardDosage.mjs';
export declare class VmpGroup {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    from: number | undefined;
    to: number | undefined;
    productId: string | undefined;
    code: string | undefined;
    name: SamText | undefined;
    noGenericPrescriptionReason: NoGenericPrescriptionReason | undefined;
    noSwitchReason: NoSwitchReason | undefined;
    singleAdministrationDose: Quantity | undefined;
    standardDosage: Array<StandardDosage> | undefined;
    constructor(partial: Partial<VmpGroup>);
}
