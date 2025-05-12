import { AmpComponent } from './embed/AmpComponent.mjs';
import { AmpStatus } from './embed/AmpStatus.mjs';
import { Ampp } from './embed/Ampp.mjs';
import { Company } from './embed/Company.mjs';
import { MedicineType } from './embed/MedicineType.mjs';
import { SamText } from './embed/SamText.mjs';
import { VmpStub } from './stub/VmpStub.mjs';
export declare class Amp {
    id: string;
    rev: string | undefined;
    deletionDate: number | undefined;
    from: number | undefined;
    to: number | undefined;
    code: string | undefined;
    vmp: VmpStub | undefined;
    officialName: string | undefined;
    status: AmpStatus | undefined;
    name: SamText | undefined;
    blackTriangle: boolean;
    medicineType: MedicineType | undefined;
    company: Company | undefined;
    abbreviatedName: SamText | undefined;
    proprietarySuffix: SamText | undefined;
    prescriptionName: SamText | undefined;
    ampps: Array<Ampp>;
    components: Array<AmpComponent>;
    constructor(partial: Partial<Amp>);
}
