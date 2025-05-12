import { SamText } from './SamText.mjs';
export declare class DeviceType {
    code: string | undefined;
    name: SamText | undefined;
    edqmCode: string | undefined;
    edqmDefinition: string | undefined;
    constructor(partial: Partial<DeviceType>);
}
