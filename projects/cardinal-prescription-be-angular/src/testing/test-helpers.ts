/**
 * Testing utilities for Cardinal Prescription Angular Library
 * Provides reusable test helpers and mock factories
 */

import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {
  Amp,
  Ampp,
  Dmpp,
  DmppCodeType,
  Commercialization,
  AmpStatus,
  PaginatedListIterator,
  SamText,
  Reimbursement,
  VmpGroup,
  Nmp,
} from '@icure/cardinal-be-sam-sdk';

/**
 * Query helper to find elements in component fixture
 */
export class QueryHelper {
  static findByCss<T>(fixture: ComponentFixture<T>, selector: string): DebugElement {
    return fixture.debugElement.query(By.css(selector));
  }

  static findAllByCss<T>(fixture: ComponentFixture<T>, selector: string): DebugElement[] {
    return fixture.debugElement.queryAll(By.css(selector));
  }

  static findByDirective<T, D>(fixture: ComponentFixture<T>, directive: any): DebugElement {
    return fixture.debugElement.query(By.directive(directive));
  }

  static findAllByDirective<T, D>(fixture: ComponentFixture<T>, directive: any): DebugElement[] {
    return fixture.debugElement.queryAll(By.directive(directive));
  }
}

/**
 * Click helper for testing button/element interactions
 */
export function click(element: DebugElement | HTMLElement): void {
  if (element instanceof DebugElement) {
    element.nativeElement.click();
  } else {
    element.click();
  }
}

/**
 * Set input value helper
 */
export function setInputValue(element: HTMLInputElement, value: string): void {
  element.value = value;
  element.dispatchEvent(new Event('input'));
  element.dispatchEvent(new Event('blur'));
}

/**
 * Async helper to wait for condition
 */
export async function waitFor(
  condition: () => boolean,
  timeout: number = 5000,
  interval: number = 100
): Promise<void> {
  const startTime = Date.now();
  while (!condition()) {
    if (Date.now() - startTime > timeout) {
      throw new Error('Timeout waiting for condition');
    }
    await new Promise(resolve => setTimeout(resolve, interval));
  }
}

/**
 * Create a spy object with typed methods
 */
export function createSpyObj<T>(
  baseName: string,
  methodNames: (keyof T)[]
): jasmine.SpyObj<T> {
  return jasmine.createSpyObj(baseName, methodNames as string[]);
}

/**
 * Mock factory for SamText objects
 */
export class SamTextMockFactory {
  static create(text: string, allLanguages = false): SamText {
    if (allLanguages) {
      return {
        fr: text,
        nl: text,
        de: text,
        en: text,
      } as SamText;
    }
    return { fr: text } as any;
  }

  static createMultiLang(fr: string, nl?: string, de?: string, en?: string): SamText {
    return {
      fr,
      nl: nl || fr,
      de: de || fr,
      en: en || fr,
    } as SamText;
  }
}

/**
 * Mock factory for Amp objects
 */
export class AmpMockFactory {
  static create(overrides?: Partial<Amp>): Amp {
    const now = Date.now();
    return {
      id: 'amp-' + Math.random().toString(36).substr(2, 9),
      name: SamTextMockFactory.create('Default Medication'),
      prescriptionName: SamTextMockFactory.create('Default Prescription'),
      abbreviatedName: SamTextMockFactory.create('DM'),
      vmp: {
        id: 'vmp-default',
        code: 'vmp-code-default',
        name: SamTextMockFactory.create('VMP Name'),
        vmpGroup: {
          id: 'vmp-group-default',
          code: 'code-default',
          name: SamTextMockFactory.create('VMP Group Name'),
          productId: 'prod-default',
        } as any,
      } as any,
      ampps: [],
      blackTriangle: false,
      from: now - 1000000,
      to: undefined,
      ...overrides,
    } as Amp;
  }

  static createList(count: number, overrides?: Partial<Amp>): Amp[] {
    return Array.from({ length: count }, (_, i) =>
      this.create({ ...overrides, id: `amp-${i}` })
    );
  }
}

/**
 * Mock factory for Ampp objects
 */
export class AmppMockFactory {
  static create(overrides?: Partial<Ampp>): Ampp {
    const now = Date.now();
    return {
      id: 'ampp-' + Math.random().toString(36).substr(2, 9),
      ctiExtended: 'cti-' + Math.random().toString(36).substr(2, 9),
      prescriptionName: SamTextMockFactory.create('AMPP Prescription'),
      abbreviatedName: SamTextMockFactory.create('AP'),
      exFactoryPrice: 0,
      status: AmpStatus.Authorized,
      from: now - 1000000,
      to: undefined,
      commercializations: [
        {
          from: now - 100000,
          to: undefined,
        } as Commercialization,
      ],
      dmpps: [
        DmppMockFactory.create({
          deliveryEnvironment: 'A' as any,
        }),
      ],
      speciallyRegulated: 0,
      genericPrescriptionRequired: false,
      crmLink: SamTextMockFactory.create(''),
      leafletLink: SamTextMockFactory.create(''),
      rmaProfessionalLink: SamTextMockFactory.create(''),
      spcLink: SamTextMockFactory.create(''),
      dhpcLink: SamTextMockFactory.create(''),
      deliveryModus: SamTextMockFactory.create(''),
      deliveryModusSpecification: SamTextMockFactory.create(''),
      rmaKeyMessages: SamTextMockFactory.create(''),
      ...overrides,
    } as Ampp;
  }

  static createList(count: number, overrides?: Partial<Ampp>): Ampp[] {
    return Array.from({ length: count }, (_, i) =>
      this.create({ ...overrides, ctiExtended: `ampp-${i}` })
    );
  }
}

/**
 * Mock factory for Dmpp objects
 */
export class DmppMockFactory {
  static create(overrides?: Partial<Dmpp>): Dmpp {
    const now = Date.now();
    return {
      id: 'dmpp-' + Math.random().toString(36).substr(2, 9),
      code: '0123456',
      productId: 'prod-' + Math.random().toString(36).substr(2, 9),
      codeType: DmppCodeType.Cnk,
      from: now - 100000,
      to: undefined,
      cheap: false,
      cheapest: false,
      deliveryEnvironment: 'A' as any,
      reimbursements: undefined,
      ...overrides,
    } as Dmpp;
  }
}

/**
 * Mock factory for VmpGroup objects
 */
export class VmpGroupMockFactory {
  static create(overrides?: Partial<VmpGroup>): VmpGroup {
    return {
      id: 'vmpg-' + Math.random().toString(36).substr(2, 9),
      code: 'code-' + Math.random().toString(36).substr(2, 9),
      name: SamTextMockFactory.create('VMP Group'),
      productId: 'prod-' + Math.random().toString(36).substr(2, 9),
      ...overrides,
    } as VmpGroup;
  }
}

/**
 * Mock factory for PaginatedListIterator
 */
export class PaginatedListIteratorMockFactory {
  static create<T>(items: T[]): PaginatedListIterator<T> {
    let itemIndex = 0;

    return {
      hasNext: async () => itemIndex < items.length,
      next: async (pageSize: number) => {
        const pageItems = items.slice(itemIndex, itemIndex + pageSize);
        itemIndex += pageSize;
        return pageItems;
      },
      [Symbol.asyncIterator]: async function* () {
        itemIndex = 0;
        while (itemIndex < items.length) {
          const page = await this.next(10);
          for (const item of page) {
            yield item;
          }
        }
      },
    } as any as PaginatedListIterator<T>;
  }

  static createEmpty<T>(): PaginatedListIterator<T> {
    return this.create<T>([]);
  }
}

/**
 * Spy helper for common service methods
 */
export class ServiceSpyHelper {
  /**
   * Create a spy for TranslationService
   */
  static createTranslationServiceSpy() {
    const spy = jasmine.createSpyObj('TranslationService', [
      'translate',
      'getCurrentLanguage',
      'setLanguage',
    ]);
    spy.getCurrentLanguage.and.returnValue('fr');
    spy.translate.and.callFake((key: string) => key);
    return spy;
  }

  /**
   * Create a spy for SamSdkService
   */
  static createSamSdkServiceSpy() {
    return jasmine.createSpyObj('SamSdkService', [
      'searchMedications',
      'loadVmpGroup',
      'loadAlternativeMedications',
      'findAmpsByVmpGroupCode',
      'findAmpById',
    ]);
  }

  /**
   * Create a spy for MedicationLoaderService
   */
  static createMedicationLoaderServiceSpy() {
    return jasmine.createSpyObj('MedicationLoaderService', [
      'loadMedicationsPage',
      'loadMoleculesPage',
      'loadNonMedicinalPage',
      'loadMore',
    ]);
  }

  /**
   * Create a spy for CertificateService
   */
  static createCertificateServiceSpy() {
    return jasmine.createSpyObj('CertificateService', [
      'getCertificate',
      'uploadCertificate',
      'deleteCertificate',
      'validateCertificate',
    ]);
  }
}

/**
 * Test data builders for common scenarios
 */
export class TestDataBuilder {
  /**
   * Build a complete medication with all related data
   */
  static buildCompleteMedication(options?: {
    cheap?: boolean;
    cheapest?: boolean;
    blackTriangle?: boolean;
    deliveryEnvironment?: string;
  }): Amp {
    const ampp = AmppMockFactory.create({
      dmpps: [
        DmppMockFactory.create({
          cheap: options?.cheap || false,
          cheapest: options?.cheapest || false,
          deliveryEnvironment: (options?.deliveryEnvironment || 'A') as any,
        }),
      ],
    });

    return AmpMockFactory.create({
      blackTriangle: options?.blackTriangle || false,
      ampps: [ampp],
    });
  }

  /**
   * Build a list of medications for pagination testing
   */
  static buildMedicationList(count: number): Amp[] {
    return AmpMockFactory.createList(count);
  }

  /**
   * Build medications with different delivery environments
   */
  static buildMedicationsWithDeliveryEnvironments(): { BE: Amp[]; FR: Amp[] } {
    return {
      BE: [
        this.buildCompleteMedication({ deliveryEnvironment: 'A' }),
        this.buildCompleteMedication({ deliveryEnvironment: 'A' }),
      ],
      FR: [
        this.buildCompleteMedication({ deliveryEnvironment: 'H' }),
        this.buildCompleteMedication({ deliveryEnvironment: 'H' }),
      ],
    };
  }
}

/**
 * Async test helper utilities
 */
export class AsyncTestHelper {
  /**
   * Flush all pending promises and microtasks
   */
  static async flushPromises(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 0));
  }

  /**
   * Advance timers and flush promises
   */
  static async tick(ms: number = 0): Promise<void> {
    jasmine.clock().tick(ms);
    await this.flushPromises();
  }
}

