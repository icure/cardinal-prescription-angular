import { Quantity } from './Quantity.mjs';
export declare class ComplexStrength {
    operator: string | undefined;
    quantity: Quantity | undefined;
    secondQuantity: Quantity | undefined;
    constructor(partial: Partial<ComplexStrength>);
}
