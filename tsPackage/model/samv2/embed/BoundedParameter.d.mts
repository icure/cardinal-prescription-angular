import { DosageParameter } from './DosageParameter.mjs';
export declare class BoundedParameter {
    dosageParameter: DosageParameter | undefined;
    lowerBound: number | undefined;
    upperBound: number | undefined;
    constructor(partial: Partial<BoundedParameter>);
}
