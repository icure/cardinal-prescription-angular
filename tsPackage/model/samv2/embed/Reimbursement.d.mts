import { Copayment } from './Copayment.mjs';
import { DataPeriod } from './DataPeriod.mjs';
import { DeliveryEnvironment } from './DeliveryEnvironment.mjs';
import { DmppCodeType } from './DmppCodeType.mjs';
import { MultipleType } from './MultipleType.mjs';
import { Pricing } from './Pricing.mjs';
import { ReimbursementCriterion } from './ReimbursementCriterion.mjs';
export declare class Reimbursement implements DataPeriod {
    from: number | undefined;
    to: number | undefined;
    deliveryEnvironment: DeliveryEnvironment | undefined;
    code: string | undefined;
    codeType: DmppCodeType | undefined;
    multiple: MultipleType | undefined;
    temporary: boolean | undefined;
    reference: boolean | undefined;
    legalReferencePath: string | undefined;
    flatRateSystem: boolean | undefined;
    reimbursementBasePrice: number | undefined;
    referenceBasePrice: number | undefined;
    copaymentSupplement: number | undefined;
    pricingUnit: Pricing | undefined;
    pricingSlice: Pricing | undefined;
    reimbursementCriterion: ReimbursementCriterion | undefined;
    copayments: Array<Copayment> | undefined;
    constructor(partial: Partial<Reimbursement>);
}
