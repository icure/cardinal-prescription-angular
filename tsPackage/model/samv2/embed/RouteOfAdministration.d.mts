import { CodeStub } from '../../base/CodeStub.mjs';
import { SamText } from './SamText.mjs';
export declare class RouteOfAdministration {
    code: string | undefined;
    name: SamText | undefined;
    standardRoutes: Array<CodeStub>;
    constructor(partial: Partial<RouteOfAdministration>);
}
