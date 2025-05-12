import { DataPeriod } from './DataPeriod.mjs';
import { DeliveryEnvironment } from './DeliveryEnvironment.mjs';
import { DmppCodeType } from './DmppCodeType.mjs';
import { Reimbursement } from './Reimbursement.mjs';
export declare class Dmpp implements DataPeriod {
    id: string | undefined;
    from: number | undefined;
    to: number | undefined;
    deliveryEnvironment: DeliveryEnvironment | undefined;
    code: string | undefined;
    codeType: DmppCodeType | undefined;
    price: string | undefined;
    cheap: boolean | undefined;
    cheapest: boolean | undefined;
    reimbursable: boolean | undefined;
    reimbursements: Array<Reimbursement> | undefined;
    productId: string | undefined;
    constructor(partial: Partial<Dmpp>);
}
