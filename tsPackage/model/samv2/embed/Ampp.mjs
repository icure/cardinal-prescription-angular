export class Ampp {
    constructor(partial) {
        this.from = undefined;
        this.to = undefined;
        this.index = undefined;
        this.ctiExtended = undefined;
        this.orphan = false;
        this.leafletLink = undefined;
        this.spcLink = undefined;
        this.rmaPatientLink = undefined;
        this.rmaProfessionalLink = undefined;
        this.parallelCircuit = undefined;
        this.parallelDistributor = undefined;
        this.packMultiplier = undefined;
        this.packAmount = undefined;
        this.packDisplayValue = undefined;
        this.status = undefined;
        this.atcs = [];
        this.crmLink = undefined;
        this.deliveryModusCode = undefined;
        this.deliveryModus = undefined;
        this.deliveryModusSpecificationCode = undefined;
        this.deliveryModusSpecification = undefined;
        this.dhpcLink = undefined;
        this.distributorCompany = undefined;
        this.singleUse = undefined;
        this.speciallyRegulated = undefined;
        this.abbreviatedName = undefined;
        this.prescriptionName = undefined;
        this.note = undefined;
        this.posologyNote = undefined;
        this.noGenericPrescriptionReasons = undefined;
        this.exFactoryPrice = undefined;
        this.reimbursementCode = undefined;
        this.definedDailyDose = undefined;
        this.officialExFactoryPrice = undefined;
        this.realExFactoryPrice = undefined;
        this.pricingInformationDecisionDate = undefined;
        this.components = undefined;
        this.commercializations = undefined;
        this.supplyProblems = undefined;
        this.dmpps = [];
        this.vaccineIndicationCodes = undefined;
        this.rmaKeyMessages = undefined;
        this.genericPrescriptionRequired = undefined;
        if ('from' in partial)
            this.from = partial.from;
        if ('to' in partial)
            this.to = partial.to;
        if ('index' in partial)
            this.index = partial.index;
        if ('ctiExtended' in partial)
            this.ctiExtended = partial.ctiExtended;
        if ('orphan' in partial && partial.orphan !== undefined)
            this.orphan = partial.orphan;
        if ('leafletLink' in partial)
            this.leafletLink = partial.leafletLink;
        if ('spcLink' in partial)
            this.spcLink = partial.spcLink;
        if ('rmaPatientLink' in partial)
            this.rmaPatientLink = partial.rmaPatientLink;
        if ('rmaProfessionalLink' in partial)
            this.rmaProfessionalLink = partial.rmaProfessionalLink;
        if ('parallelCircuit' in partial)
            this.parallelCircuit = partial.parallelCircuit;
        if ('parallelDistributor' in partial)
            this.parallelDistributor = partial.parallelDistributor;
        if ('packMultiplier' in partial)
            this.packMultiplier = partial.packMultiplier;
        if ('packAmount' in partial)
            this.packAmount = partial.packAmount;
        if ('packDisplayValue' in partial)
            this.packDisplayValue = partial.packDisplayValue;
        if ('status' in partial)
            this.status = partial.status;
        if ('atcs' in partial && partial.atcs !== undefined)
            this.atcs = partial.atcs;
        if ('crmLink' in partial)
            this.crmLink = partial.crmLink;
        if ('deliveryModusCode' in partial)
            this.deliveryModusCode = partial.deliveryModusCode;
        if ('deliveryModus' in partial)
            this.deliveryModus = partial.deliveryModus;
        if ('deliveryModusSpecificationCode' in partial)
            this.deliveryModusSpecificationCode = partial.deliveryModusSpecificationCode;
        if ('deliveryModusSpecification' in partial)
            this.deliveryModusSpecification = partial.deliveryModusSpecification;
        if ('dhpcLink' in partial)
            this.dhpcLink = partial.dhpcLink;
        if ('distributorCompany' in partial)
            this.distributorCompany = partial.distributorCompany;
        if ('singleUse' in partial)
            this.singleUse = partial.singleUse;
        if ('speciallyRegulated' in partial)
            this.speciallyRegulated = partial.speciallyRegulated;
        if ('abbreviatedName' in partial)
            this.abbreviatedName = partial.abbreviatedName;
        if ('prescriptionName' in partial)
            this.prescriptionName = partial.prescriptionName;
        if ('note' in partial)
            this.note = partial.note;
        if ('posologyNote' in partial)
            this.posologyNote = partial.posologyNote;
        if ('noGenericPrescriptionReasons' in partial)
            this.noGenericPrescriptionReasons = partial.noGenericPrescriptionReasons;
        if ('exFactoryPrice' in partial)
            this.exFactoryPrice = partial.exFactoryPrice;
        if ('reimbursementCode' in partial)
            this.reimbursementCode = partial.reimbursementCode;
        if ('definedDailyDose' in partial)
            this.definedDailyDose = partial.definedDailyDose;
        if ('officialExFactoryPrice' in partial)
            this.officialExFactoryPrice = partial.officialExFactoryPrice;
        if ('realExFactoryPrice' in partial)
            this.realExFactoryPrice = partial.realExFactoryPrice;
        if ('pricingInformationDecisionDate' in partial)
            this.pricingInformationDecisionDate = partial.pricingInformationDecisionDate;
        if ('components' in partial)
            this.components = partial.components;
        if ('commercializations' in partial)
            this.commercializations = partial.commercializations;
        if ('supplyProblems' in partial)
            this.supplyProblems = partial.supplyProblems;
        if ('dmpps' in partial && partial.dmpps !== undefined)
            this.dmpps = partial.dmpps;
        if ('vaccineIndicationCodes' in partial)
            this.vaccineIndicationCodes = partial.vaccineIndicationCodes;
        if ('rmaKeyMessages' in partial)
            this.rmaKeyMessages = partial.rmaKeyMessages;
        if ('genericPrescriptionRequired' in partial)
            this.genericPrescriptionRequired = partial.genericPrescriptionRequired;
    }
}
//# sourceMappingURL=Ampp.mjs.map