import { ContentType } from './ContentType.mjs';
import { DataPeriod } from './DataPeriod.mjs';
import { DeviceType } from './DeviceType.mjs';
import { PackagingType } from './PackagingType.mjs';
import { SamText } from './SamText.mjs';
export declare class AmppComponent implements DataPeriod {
    from: number | undefined;
    to: number | undefined;
    contentType: ContentType | undefined;
    contentMultiplier: number | undefined;
    packSpecification: SamText | undefined;
    deviceType: DeviceType | undefined;
    packagingType: PackagingType | undefined;
    constructor(partial: Partial<AmppComponent>);
}
