import { Injectable } from '@angular/core';
import {
  Amp,
  AmpStatus,
  DmppCodeType,
  Nmp,
  PaginatedListIterator,
  VmpGroup,
} from '@icure/cardinal-be-sam';
import { MedicationType } from '../../types';
import { capitalize } from '../../utils/string-helpers';
import {
  MergeLazySortedNamedItemsService,
  NamedItem,
} from './merge-lazy-sorted-named-items.service';

@Injectable({
  providedIn: 'root',
})
export class MedicationLoaderService {
  constructor(private mergeService: MergeLazySortedNamedItemsService) {}

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

    const page: MedicationType[] = loadedPage.flatMap((amp: Amp) =>
      amp.to && amp.to < now
        ? []
        : amp.ampps
            .filter(
              ampp =>
                ampp.from &&
                ampp.from < now &&
                (!ampp.to || ampp.to > now) &&
                ampp.status === AmpStatus.Authorized &&
                ampp.commercializations?.some(
                  c => !!c.from && (!c.to || c.to > twoYearsAgo)
                ) &&
                ampp.dmpps?.some(
                  dmpp =>
                    dmpp.from &&
                    dmpp.from < now &&
                    (!dmpp.to || dmpp.to > now) &&
                    dmpp.deliveryEnvironment?.toString() === deliveryEnvironment
                )
            )
            .map(ampp => {
              const dmpp = ampp.dmpps?.find(
                dmpp =>
                  dmpp.from &&
                  dmpp.from < now &&
                  (!dmpp.to || dmpp.to > now) &&
                  dmpp.deliveryEnvironment?.toString() ===
                    deliveryEnvironment &&
                  dmpp.codeType === DmppCodeType.Cnk
              );
              return {
                ampId: amp.id,
                vmpGroupId: amp.vmp?.vmpGroup?.id,
                id: ampp.ctiExtended,
                cnk: dmpp?.code,
                dmppProductId: dmpp?.productId,
                title:
                  ampp.prescriptionName?.fr ??
                  ampp.abbreviatedName?.fr ??
                  amp.prescriptionName?.fr ??
                  amp.name?.fr ??
                  amp.abbreviatedName?.fr ??
                  '',
                vmpTitle: amp.vmp?.name?.fr ?? '',
                activeIngredient: amp.vmp?.vmpGroup?.name?.fr ?? '',
                price: ampp?.exFactoryPrice ? `€${ampp.exFactoryPrice}` : '',
                crmLink: ampp.crmLink?.fr,
                patientInformationLeafletLink: ampp.leafletLink?.fr,
                blackTriangle: amp.blackTriangle,
                speciallyRegulated: ampp.speciallyRegulated,
                genericPrescriptionRequired: ampp.genericPrescriptionRequired,
                intendedName: ampp.prescriptionName?.fr,
                rmaProfessionalLink: ampp.rmaProfessionalLink?.fr,
                spcLink: ampp.spcLink?.fr,
                dhpcLink: ampp.dhpcLink?.fr,
                rmakeyMessages: ampp.rmaKeyMessages,
                vmp: amp.vmp,
                supplyProblems: ampp.supplyProblems,
                commercializations: ampp?.commercializations,
                deliveryModusCode: ampp.deliveryModusCode,
                deliveryModus: ampp.deliveryModus?.fr,
                deliveryModusSpecificationCode:
                  ampp.deliveryModusSpecificationCode,
                deliveryModusSpecification: ampp.deliveryModusSpecification?.fr,
                reimbursements: dmpp?.reimbursements?.find(
                  dmpp =>
                    dmpp.from && dmpp.from < now && (!dmpp.to || dmpp.to > now)
                ),
              } as MedicationType;
            })
    );

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
    const loadedPage = !(await molecules.hasNext())
      ? []
      : await molecules.next(min);
    const page: MedicationType[] = loadedPage
      .filter((vmp: VmpGroup) => !(vmp.to && vmp.to < now))
      .map(vmp => ({
        vmpGroupId: vmp.id,
        id: vmp.code,
        title: capitalize(vmp.name?.fr) ?? '',
        standardDosage: vmp.standardDosage,
      }));

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
    const loadedPage = !(await products.hasNext())
      ? []
      : await products.next(min);
    const page: MedicationType[] = loadedPage
      .filter((nmp: Nmp) => !(nmp.to && nmp.to < now))
      .map(nmp => ({
        nmpId: nmp.id,
        id: nmp.code,
        title: capitalize(nmp.name?.fr) ?? '',
      }));

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
