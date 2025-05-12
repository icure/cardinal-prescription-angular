import { PharmaceuticalFormStub } from '../stub/PharmaceuticalFormStub.mjs';
import { ContainsAlcohol } from './ContainsAlcohol.mjs';
import { Crushable } from './Crushable.mjs';
import { DataPeriod } from './DataPeriod.mjs';
import { Ingredient } from './Ingredient.mjs';
import { RouteOfAdministration } from './RouteOfAdministration.mjs';
import { SamText } from './SamText.mjs';
export declare class AmpComponent implements DataPeriod {
    from: number | undefined;
    to: number | undefined;
    ingredients: Array<Ingredient> | undefined;
    pharmaceuticalForms: Array<PharmaceuticalFormStub> | undefined;
    routeOfAdministrations: Array<RouteOfAdministration> | undefined;
    dividable: string | undefined;
    scored: string | undefined;
    crushable: Crushable | undefined;
    containsAlcohol: ContainsAlcohol | undefined;
    sugarFree: boolean | undefined;
    modifiedReleaseType: number | undefined;
    specificDrugDevice: number | undefined;
    dimensions: string | undefined;
    name: SamText | undefined;
    note: SamText | undefined;
    constructor(partial: Partial<AmpComponent>);
}
