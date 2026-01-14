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
import {
  MedicationType,
  MedicationProductType,
  Med,
} from '../../../shared/types';
import { capitalize, normalizeForSort } from '../../utils/string-helpers';
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
    acc: MedicationProductType[] = [],
    filter: (medication: MedicationType) => MedicationType | undefined = m => m
  ): Promise<MedicationProductType[]> {
    const now = Date.now();
    const twoYearsAgo = now - 2 * 365 * 24 * 3600 * 1000;
    const loadedPage = !(await medications.hasNext())
      ? []
      : await medications.next(min);

    const page: MedicationProductType[] = loadedPage
      .map((amp: Amp) => {
        if (amp.to && amp.to < now) {
          return null;
        }

        const activeAmpps = amp.ampps.filter(
          ampp => ampp.from && (!ampp.to || ampp.to > now)
        );
        const authorizedAmpps = activeAmpps.filter(
          ampp =>
            ampp.status?.toLowerCase() === AmpStatus.Authorized.toLowerCase()
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

        if (deliverableAmpps.length === 0) {
          return null;
        }

        const language: keyof SamText = this.language;

        // Create MedicationType for each AMPP
        const medications: MedicationType[] = deliverableAmpps
          .map((ampp, index) => {
            const dmpp = ampp.dmpps?.find(
              dmpp =>
                dmpp.from &&
                (!dmpp.to || dmpp.to > now) &&
                dmpp.deliveryEnvironment?.toString() === deliveryEnvironment &&
                dmpp.codeType === DmppCodeType.Cnk
            );

            return {
              ampId: amp.id,
              vmpGroupId: amp.vmp?.vmpGroup?.id,
              id: ampp.ctiExtended,
              cnk: dmpp?.code,
              dmppProductId: dmpp?.productId,
              index: index,
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
                ampp.crmLink?.[language] ??
                ampp.crmLink?.[this.defaultLanguage],
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
                ampp.spcLink?.[language] ??
                ampp.spcLink?.[this.defaultLanguage],
              dhpcLink:
                ampp.dhpcLink?.[language] ??
                ampp.dhpcLink?.[this.defaultLanguage],
              rmakeyMessages: ampp.rmaKeyMessages,
              vmp: amp.vmp,
              supplyProblems: ampp.supplyProblems,
              commercializations: ampp?.commercializations,
              deliveryModusCode: ampp.deliveryModusCode,
              deliveryModus:
                ampp.deliveryModus?.[language] ??
                ampp.deliveryModus?.[this.defaultLanguage],
              deliveryModusSpecificationCode:
                ampp.deliveryModusSpecificationCode,
              deliveryModusSpecification:
                ampp.deliveryModusSpecification?.[language] ??
                ampp.deliveryModusSpecification?.[this.defaultLanguage],
              reimbursements: dmpp?.reimbursements?.find(
                dmpp => dmpp.from && (!dmpp.to || dmpp.to > now)
              ),
            } as MedicationType;
          })
          .map(filter)
          .filter((m): m is MedicationType => !!m)
          .sort((a, b) => {
            // Sort by index first, then by title
            const indexA = (a as any).index ?? 0;
            const indexB = (b as any).index ?? 0;
            if (indexA !== indexB) {
              return indexA - indexB;
            }
            return normalizeForSort(a.title).localeCompare(
              normalizeForSort(b.title)
            );
          });

        if (medications.length === 0) {
          return null;
        }

        return {
          ampId: amp.id!,
          title:
            amp.prescriptionName?.[language] ??
            amp.prescriptionName?.[this.defaultLanguage] ??
            amp.name?.[language] ??
            amp.name?.[this.defaultLanguage] ??
            amp.abbreviatedName?.[language] ??
            amp.abbreviatedName?.[this.defaultLanguage] ??
            '',
          medications: medications,
        } as MedicationProductType;
      })
      .filter((mp): mp is MedicationProductType => mp !== null);

    return loadedPage.length < min || page.length + acc.length >= min
      ? [...acc, ...page]
      : await this.loadMedicationsPage(
          medications,
          min,
          deliveryEnvironment,
          [...acc, ...page],
          filter
        );
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

  /**
   * Loads elements until a given name or up to a limit if no name is provided.
   */
  async loadUntil(
    toName: string | undefined,
    loadPage: () => Promise<any[]>,
    limit: number = 10
  ): Promise<any[]> {
    let page: any[] = [];
    if (!toName) {
      // Load up to the limit
      while (page.length < limit) {
        const newPage = await loadPage();
        if (!newPage.length) break;
        page = [...page, ...newPage];
      }
      return page;
    }

    const lcToName = normalizeForSort(toName);
    while (
      page.length === 0 ||
      normalizeForSort(page[page.length - 1].title) < lcToName
    ) {
      const newPage = await loadPage();
      if (!newPage.length) break;
      page = [...page, ...newPage];
    }
    return page;
  }

  async loadMore({
    untreatedLoadedMedicationProducts,
    untreatedLoadedMolecules,
    untreatedLoadNonMedicinals,
    medicationProductsIterator,
    moleculesIterator,
    nonMedicinalesIterator,
    deliveryEnvironment,
    limit = 10,
  }: {
    untreatedLoadedMedicationProducts: MedicationProductType[];
    untreatedLoadedMolecules: MedicationType[];
    untreatedLoadNonMedicinals: MedicationType[];
    medicationProductsIterator: PaginatedListIterator<Amp> | undefined;
    moleculesIterator: PaginatedListIterator<VmpGroup> | undefined;
    nonMedicinalesIterator: PaginatedListIterator<Nmp> | undefined;
    deliveryEnvironment: string;
    limit?: number;
  }): Promise<{
    result: Med[];
    updated: {
      medicationsPage: MedicationProductType[];
      moleculesPage: MedicationType[];
      productsPage: MedicationType[];
    };
  }> {
    const [result, pointers] =
      await this.mergeService.mergeLazySortedNamedItems(
        limit,
        [[...untreatedLoadedMedicationProducts], [...untreatedLoadedMolecules], [...untreatedLoadNonMedicinals]],
        [
          async (_, toName) => {
            const loaded = await this.loadUntil(
              toName,
              () =>
                medicationProductsIterator
                  ? this.loadMedicationsPage(
                      medicationProductsIterator,
                      limit,
                      deliveryEnvironment
                    )
                  : Promise.resolve([]),
              limit
            );
            untreatedLoadedMedicationProducts.push(...loaded);
            return loaded;
          },
          async (_, toName) => {
            const loaded = await this.loadUntil(
              toName,
              () =>
                moleculesIterator
                  ? this.loadMoleculesPage(moleculesIterator, limit)
                  : Promise.resolve([]),
              limit
            );
            untreatedLoadedMolecules.push(...loaded);
            return loaded;
          },
          async (_, toName) => {
            const loaded = await this.loadUntil(
              toName,
              () =>
                nonMedicinalesIterator
                  ? this.loadNonMedicinalPage(nonMedicinalesIterator, limit)
                  : Promise.resolve([]),
              limit
            );
            untreatedLoadNonMedicinals.push(...loaded);
            return loaded;
          },
        ]
      );

    return {
      result,
      updated: {
        medicationsPage: untreatedLoadedMedicationProducts.slice(pointers[0]),
        moleculesPage: untreatedLoadedMolecules.slice(pointers[1]),
        productsPage: untreatedLoadNonMedicinals.slice(pointers[2]),
      },
    };
  }
}
