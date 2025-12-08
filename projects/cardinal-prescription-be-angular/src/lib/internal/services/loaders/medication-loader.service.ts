import { Injectable } from '@angular/core';
import {
  Amp,
  AmpStatus,
  DmppCodeType,
  Nmp,
  PaginatedListIterator,
  VmpGroup,
  SamText,
} from '@icure/cardinal-be-sam-sdk';
import { MedicationType } from '../../../shared/types';
import { capitalize } from '../../utils/string-helpers';
import { MergeLazySortedNamedItemsService } from './merge-lazy-sorted-named-items.service';
import { TranslationService } from '../../../shared/services/translation/translation.service';

@Injectable({
  providedIn: 'root',
})
export class MedicationLoaderService {
  constructor(
    private mergeService: MergeLazySortedNamedItemsService,
    private translationService: TranslationService
  ) {}

  private defaultLanguage: keyof SamText = 'fr';

  private get language(): keyof SamText {
    return (
      this.translationService.getCurrentLanguage?.() ?? this.defaultLanguage
    );
  }

  async loadMedicationsPage(
    medications: PaginatedListIterator<Amp>,
    min: number,
    deliveryEnvironment: string,
    acc: MedicationType[] = []
  ): Promise<MedicationType[]> {
    const now = Date.now();
    const twoYearsAgo = now - 2 * 365 * 24 * 3600 * 1000;
    const loadedPage = !(await medications.hasNext())
      ? []
      : await medications.next(min);

    const page: MedicationType[] = loadedPage.flatMap((amp: Amp) => {
      if (amp.to && amp.to < now) {
        return [];
      }

      const activeAmpps = amp.ampps.filter(
        ampp => ampp.from && (!ampp.to || ampp.to > now)
      );
      const authorizedAmpps = activeAmpps.filter(
        ampp => ampp.status === AmpStatus.Authorized
      );
      const commercializedAmpps = authorizedAmpps.filter(ampp =>
        ampp.commercializations?.some(
          c => !!c.from && (!c.to || c.to > twoYearsAgo)
        )
      );
      const deliverableAmpps = commercializedAmpps.filter(ampp =>
        ampp.dmpps?.some(
          dmpp =>
            dmpp.from &&
            (!dmpp.to || dmpp.to > now) &&
            dmpp.deliveryEnvironment?.toString() === deliveryEnvironment
        )
      );

      return deliverableAmpps.map(ampp => {
        const dmpp = ampp.dmpps?.find(
          dmpp =>
            dmpp.from &&
            (!dmpp.to || dmpp.to > now) &&
            dmpp.deliveryEnvironment?.toString() === deliveryEnvironment &&
            dmpp.codeType === DmppCodeType.Cnk
        );
        const language: keyof SamText = this.language;
        return {
          ampId: amp.id,
          vmpGroupId: amp.vmp?.vmpGroup?.id,
          id: ampp.ctiExtended,
          cnk: dmpp?.code,
          dmppProductId: dmpp?.productId,
          title:
            ampp.prescriptionName?.[language] ??
            ampp.prescriptionName?.[this.defaultLanguage] ??
            ampp.abbreviatedName?.[language] ??
            ampp.abbreviatedName?.[this.defaultLanguage] ??
            amp.prescriptionName?.[language] ??
            amp.prescriptionName?.[this.defaultLanguage] ??
            amp.name?.[language] ??
            amp.name?.[this.defaultLanguage] ??
            amp.abbreviatedName?.[language] ??
            amp.abbreviatedName?.[this.defaultLanguage] ??
            '',
          vmpTitle:
            amp.vmp?.name?.[language] ??
            amp.vmp?.name?.[this.defaultLanguage] ??
            '',
          activeIngredient:
            amp.vmp?.vmpGroup?.name?.[language] ??
            amp.vmp?.vmpGroup?.name?.[this.defaultLanguage] ??
            '',
          price: ampp?.exFactoryPrice ? `€${ampp.exFactoryPrice}` : '',
          cheap: dmpp?.cheap,
          cheapest: dmpp?.cheapest,
          crmLink:
            ampp.crmLink?.[language] ?? ampp.crmLink?.[this.defaultLanguage],
          patientInformationLeafletLink:
            ampp.leafletLink?.[language] ??
            ampp.leafletLink?.[this.defaultLanguage],
          blackTriangle: amp.blackTriangle,
          speciallyRegulated: ampp.speciallyRegulated,
          genericPrescriptionRequired: ampp.genericPrescriptionRequired,
          intendedName:
            ampp.prescriptionName?.[language] ??
            ampp.prescriptionName?.[this.defaultLanguage],
          rmaProfessionalLink:
            ampp.rmaProfessionalLink?.[language] ??
            ampp.rmaProfessionalLink?.[this.defaultLanguage],
          spcLink:
            ampp.spcLink?.[language] ?? ampp.spcLink?.[this.defaultLanguage],
          dhpcLink:
            ampp.dhpcLink?.[language] ?? ampp.dhpcLink?.[this.defaultLanguage],
          rmakeyMessages: ampp.rmaKeyMessages,
          vmp: amp.vmp,
          supplyProblems: ampp.supplyProblems,
          commercializations: ampp?.commercializations,
          deliveryModusCode: ampp.deliveryModusCode,
          deliveryModus:
            ampp.deliveryModus?.[language] ??
            ampp.deliveryModus?.[this.defaultLanguage],
          deliveryModusSpecificationCode: ampp.deliveryModusSpecificationCode,
          deliveryModusSpecification:
            ampp.deliveryModusSpecification?.[language] ??
            ampp.deliveryModusSpecification?.[this.defaultLanguage],
          reimbursements: dmpp?.reimbursements?.find(
            dmpp => dmpp.from && (!dmpp.to || dmpp.to > now)
          ),
        } as MedicationType;
      });
    });

    return loadedPage.length < min || page.length + acc.length >= min
      ? [...acc, ...page]
      : await this.loadMedicationsPage(medications, min, deliveryEnvironment, [
          ...acc,
          ...page,
        ]);
  }

  async loadMoleculesPage(
    molecules: PaginatedListIterator<VmpGroup>,
    min: number,
    acc: MedicationType[] = []
  ): Promise<MedicationType[]> {
    const now = Date.now();
    const language = this.language;
    const loadedPage = !(await molecules.hasNext())
      ? []
      : await molecules.next(min);
    const page: MedicationType[] = loadedPage
      .filter((vmp: VmpGroup) => !(vmp.to && vmp.to < now))
      .map(vmp => {
        return {
          vmpGroupId: vmp.id,
          id: vmp.code,
          title:
            capitalize(vmp.name?.[language]) ??
            capitalize(vmp.name?.[this.defaultLanguage]) ??
            '',
          standardDosage: vmp.standardDosage,
        };
      });

    return page.length < min || page.length + acc.length >= min
      ? [...acc, ...page]
      : await this.loadMoleculesPage(molecules, min, [...acc, ...page]);
  }

  async loadNonMedicinalPage(
    products: PaginatedListIterator<Nmp>,
    min: number,
    acc: MedicationType[] = []
  ): Promise<MedicationType[]> {
    const now = Date.now();
    const language = this.language;
    const loadedPage = !(await products.hasNext())
      ? []
      : await products.next(min);
    const page: MedicationType[] = loadedPage
      .filter((nmp: Nmp) => !(nmp.to && nmp.to < now))
      .map(nmp => {
        return {
          nmpId: nmp.id,
          id: nmp.code,
          title:
            capitalize(nmp.name?.[language]) ??
            capitalize(nmp.name?.[this.defaultLanguage]) ??
            '',
        };
      });

    return page.length < min || page.length + acc.length >= min
      ? [...acc, ...page]
      : await this.loadNonMedicinalPage(products, min, [...acc, ...page]);
  }

  async loadUntil(
    toName: string | undefined,
    loadPage: () => Promise<MedicationType[]>
  ): Promise<MedicationType[]> {
    let page = await loadPage();
    const lcToName = toName?.toLowerCase();
    while (
      page.length &&
      (!lcToName || page[page.length - 1].title.toLowerCase() < lcToName)
    ) {
      const newPage = await loadPage();
      if (!newPage.length) break;
      page = [...page, ...newPage];
    }
    return page;
  }

  async loadMore(params: {
    medicationsPage: MedicationType[];
    moleculesPage: MedicationType[];
    productsPage: MedicationType[];
    medications: PaginatedListIterator<Amp> | undefined;
    molecules: PaginatedListIterator<VmpGroup> | undefined;
    products: PaginatedListIterator<Nmp> | undefined;
    deliveryEnvironment: string;
  }): Promise<{
    result: MedicationType[];
    updated: {
      medicationsPage: MedicationType[];
      moleculesPage: MedicationType[];
      productsPage: MedicationType[];
    };
  }> {
    const {
      medicationsPage,
      moleculesPage,
      productsPage,
      medications,
      molecules,
      products,
      deliveryEnvironment,
    } = params;

    const [result, pointers] =
      await this.mergeService.mergeLazySortedNamedItems(
        10,
        [[...medicationsPage], [...moleculesPage], [...productsPage]],
        [
          async (_, toName) => {
            const loaded = await this.loadUntil(toName, () =>
              medications
                ? this.loadMedicationsPage(medications, 10, deliveryEnvironment)
                : Promise.resolve([])
            );
            params.medicationsPage.push(...loaded);
            return loaded;
          },
          async (_, toName) => {
            const loaded = await this.loadUntil(toName, () =>
              molecules
                ? this.loadMoleculesPage(molecules, 10)
                : Promise.resolve([])
            );
            params.moleculesPage.push(...loaded);
            return loaded;
          },
          async (_, toName) => {
            const loaded = await this.loadUntil(toName, () =>
              products
                ? this.loadNonMedicinalPage(products, 10)
                : Promise.resolve([])
            );
            params.productsPage.push(...loaded);
            return loaded;
          },
        ]
      );

    return {
      result,
      updated: {
        medicationsPage: params.medicationsPage.slice(pointers[0]),
        moleculesPage: params.moleculesPage.slice(pointers[1]),
        productsPage: params.productsPage.slice(pointers[2]),
      },
    };
  }
}
