import { RouteOfAdministration } from './RouteOfAdministration.mjs';
import { SamText } from './SamText.mjs';
import { VirtualForm } from './VirtualForm.mjs';
import { VirtualIngredient } from './VirtualIngredient.mjs';
export declare class VmpComponent {
    code: string | undefined;
    virtualForm: VirtualForm | undefined;
    routeOfAdministrations: Array<RouteOfAdministration> | undefined;
    name: SamText | undefined;
    phaseNumber: number | undefined;
    virtualIngredients: Array<VirtualIngredient> | undefined;
    constructor(partial: Partial<VmpComponent>);
}
