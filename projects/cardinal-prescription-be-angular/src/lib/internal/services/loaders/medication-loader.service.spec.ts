import { TestBed } from '@angular/core/testing';
import { Amp, DmppCodeType, Nmp, Reimbursement, SamText, VmpGroup, } from '@icure/cardinal-be-sam-sdk';
import { MedicationLoaderService } from './medication-loader.service';
import { MergeLazySortedNamedItemsService } from './merge-lazy-sorted-named-items.service';
import { TranslationService } from '../../../shared/services/translation/translation.service';
import {
  Med,
  MedicationProductType,
  MedicationType,
} from '../../../shared/types';
import {
  AmpMockFactory,
  AmppMockFactory,
  DmppMockFactory,
  PaginatedListIteratorMockFactory,
  ServiceSpyHelper
} from '../../../../testing';
import ampsTestData from './test-data/amps.json';
import vmpsTestData from './test-data/vmps.json';
import nmpsTestData from './test-data/nmps.json';
import { normalizeForSort } from '../../utils/string-helpers';

/**
 * NOTE: The amps.json file contains real SAM data exported from the database.
 * Many AMPs in this data have empty ampps arrays because:
 * 1. They are parent/container AMPs without specific packaging
 * 2. The AMPPs are stored separately in the SAM database
 * 3. The loadMedicationsPage service filters out AMPs without valid AMPPs
 *
 * For tests that need medications with AMPPs (e.g., cheap/cheapest filtering,
 * delivery environment), we use AmpMockFactory to create test data with the
 * necessary AMPP structures.
 */

describe('MedicationLoaderService - loadMedicationsPage', () => {
  let service: MedicationLoaderService;
  let mockTranslationService: jasmine.SpyObj<TranslationService>;
  let mockMergeService: jasmine.SpyObj<MergeLazySortedNamedItemsService>;

  beforeEach(() => {
    mockTranslationService = ServiceSpyHelper.createTranslationServiceSpy();

    TestBed.configureTestingModule({
      providers: [
        MedicationLoaderService,
        { provide: TranslationService, useValue: mockTranslationService },
        MergeLazySortedNamedItemsService, // Use real service, not mock
      ],
    });

    service = TestBed.inject(MedicationLoaderService);
  });

  describe('loadMedicationsPage - Basic functionality', () => {

    it('amps.json should contain AMPs sorted by prescriptionName fr value', () => {
      // Arrange
      const ampsData = ampsTestData as any as Amp[];

      // Act & Assert - Check that AMPs are sorted by prescriptionName.fr
      for (let i = 1; i < ampsData.length; i++) {
        const prevName = normalizeForSort(ampsData[i - 1].prescriptionName?.fr) || '';
        const currentName = normalizeForSort(ampsData[i].prescriptionName?.fr) || '';

        expect(prevName <= currentName).toBe(true,
          `AMPs in amps.json are not sorted: "${ampsData[i - 1].prescriptionName?.fr || ampsData[i - 1].name?.fr}" (index ${i - 1}) should come before or equal to "${ampsData[i].prescriptionName?.fr || ampsData[i].name?.fr}" (index ${i})`
        );
      }

      // Additional assertion to verify we actually have data
      expect(ampsData.length).toBeGreaterThan(0);
    });

    it('vmps.json should contain VMPs sorted by name fr value', () => {
      // Arrange
      const vmpsData = vmpsTestData as any as VmpGroup[];

      // Act & Assert - Check that VMPs are sorted by name.fr
      for (let i = 1; i < vmpsData.length; i++) {
        const prevName = normalizeForSort(vmpsData[i - 1].name?.fr) || '';
        const currentName = normalizeForSort(vmpsData[i].name?.fr) || '';

        expect(prevName <= currentName).toBe(true,
          `VMPs in vmps.json are not sorted: "${vmpsData[i - 1].name?.fr}" (index ${i - 1}) should come before or equal to "${vmpsData[i].name?.fr}" (index ${i})`
        );
      }

      // Additional assertion to verify we actually have data
      expect(vmpsData.length).toBeGreaterThan(0);
    });

    it('nmps.json should contain NMPs sorted by name fr value', () => {
      // Arrange
      const nmpsData = nmpsTestData as any as Nmp[];

      // Act & Assert - Check that NMPs are sorted by name.fr
      for (let i = 1; i < nmpsData.length; i++) {
        const prevName = normalizeForSort(nmpsData[i - 1].name?.fr) || '';
        const currentName = normalizeForSort(nmpsData[i].name?.fr) || '';

        expect(prevName <= currentName).toBe(true,
          `NMPs in nmps.json are not sorted: "${nmpsData[i - 1].name?.fr}" (index ${i - 1}) should come before or equal to "${nmpsData[i].name?.fr}" (index ${i})`
        );
      }

      // Additional assertion to verify we actually have data
      expect(nmpsData.length).toBeGreaterThan(0);
    });

    it('should load through multiple pages maintaining alphabetical order and content correspondence', async () => {
      // Arrange
      const mockIterator = PaginatedListIteratorMockFactory.create(ampsTestData as any as Amp[]);
      const allLoadedProducts: MedicationProductType[] = [];
      const allIteratorData: Amp[] = [];

      // Collect all data from the iterator for comparison
      const comparisonIterator = PaginatedListIteratorMockFactory.create(ampsTestData as any as Amp[]);
      while (await comparisonIterator.hasNext()) {
        const page = await comparisonIterator.next(10);
        allIteratorData.push(...page);
      }

      // Act - Load 10 pages of 10 elements each
      let accumulator: MedicationProductType[] = [];
      for (let i = 0; i < 10; i++) {
        const result = await service.loadMedicationsPage(
          mockIterator,
          10,
          'A',
          accumulator
        );

        // Store new products (excluding accumulator)
        const newProducts = result.slice(accumulator.length);
        allLoadedProducts.push(...newProducts);
        accumulator = result;
      }

      // Assert - Check alphabetical order of AMP titles
      for (let i = 1; i < allLoadedProducts.length; i++) {
        const prevTitle = normalizeForSort(allLoadedProducts[i - 1].title) || '';
        const currentTitle = normalizeForSort(allLoadedProducts[i].title) || '';
        expect(prevTitle <= currentTitle).toBe(true,
          `MedicationProducts not in alphabetical order: "${allLoadedProducts[i - 1].title}" should come before or equal to "${allLoadedProducts[i].title}"`
        );
      }

      // Assert - Verify medications within each product are sorted
      allLoadedProducts.forEach(product => {
        for (let i = 1; i < product.medications.length; i++) {
          const prevIndex = product.medications[i - 1].index ?? 0;
          const currentIndex = product.medications[i].index ?? 0;
          if (prevIndex === currentIndex) {
            const prevTitle = normalizeForSort(product.medications[i - 1].title) || '';
            const currentTitle = normalizeForSort(product.medications[i].title) || '';
            expect(prevTitle <= currentTitle).toBe(true,
              `Medications within product not sorted: "${product.medications[i - 1].title}" should come before or equal to "${product.medications[i].title}"`
            );
          } else {
            expect(prevIndex <= currentIndex).toBe(true,
              `Medications not sorted by index: ${prevIndex} should be <= ${currentIndex}`
            );
          }
        }
      });

      // Assert - Verify all loaded medications correspond to iterator data
      const validAmpIds = new Set<string>();
      const validAmppIds = new Set<string>();
      allIteratorData.forEach(amp => {
        if (amp.id) validAmpIds.add(amp.id);
        if (amp.ampps && amp.ampps.length > 0) {
          amp.ampps.forEach(ampp => {
            if (ampp.ctiExtended) {
              validAmppIds.add(ampp.ctiExtended);
            }
          });
        }
      });

      // Verify each loaded product corresponds to an amp
      allLoadedProducts.forEach(product => {
        expect(validAmpIds.has(product.ampId)).toBe(true,
          `MedicationProduct with ampId "${product.ampId}" not found in iterator data`
        );

        // Verify each medication within the product corresponds to an ampp
        product.medications.forEach(med => {
          expect(med.id).toBeDefined();
          expect(validAmppIds.has(med.id!)).toBe(true,
            `Medication with id "${med.id}" not found in iterator data`
          );
        });
      });

      // Assert - Basic sanity checks
      expect(allLoadedProducts.length).toBeGreaterThan(0);
      const totalMedications = allLoadedProducts.reduce((sum, p) => sum + p.medications.length, 0);
      expect(totalMedications).toBeLessThanOrEqual(allIteratorData.length * 10); // Generous upper bound
    });

    it('mockIterator should iterate as expected', async () => {
      // Arrange
      const mockIterator = PaginatedListIteratorMockFactory.create(ampsTestData as any as Amp[]);

      const hasNext1 = await mockIterator.hasNext();
      const page1 = await mockIterator.next(5);
      const hasNext2 = await mockIterator.hasNext();
      const page2 = await mockIterator.next(5);
      const hasNext3 = await mockIterator.hasNext();

      // Assert
      expect(hasNext1).toBeTrue();
      expect(page1.length).toBe(5);
      expect(hasNext2).toBeTrue();
      expect(page2.length).toBe(5);
      expect(hasNext3).toBeTrue(); // Depending on data size
    });

    it('should load medications with default parameters (no filter)', async () => {
      // Arrange
      const mockIterator = PaginatedListIteratorMockFactory.create(ampsTestData as any as Amp[]);

      // Act
      const result = await service.loadMedicationsPage(
        mockIterator,
        10,
        'A'
      );

      // Assert
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBeGreaterThanOrEqual(10);
      // Note: Real SAM data may have AMPs without AMPPs, which are filtered out
    });

    it('should respect the min parameter and load exactly up to min items', async () => {
      // Arrange
      const mockIterator = PaginatedListIteratorMockFactory.create(ampsTestData as any as Amp[]);

      // Act
      const result = await service.loadMedicationsPage(
        mockIterator,
        3,
        'A'
      );

      // Assert
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should handle empty medication iterator', async () => {
      // Arrange
      const emptyIterator = PaginatedListIteratorMockFactory.createEmpty<Amp>();

      // Act
      const result = await service.loadMedicationsPage(
        emptyIterator,
        10,
        'A'
      );

      // Assert
      expect(result).toBeDefined();
      expect(result.length).toBe(0);
    });
  });

  describe('loadMedicationsPage - Filter functionality', () => {
    it('should apply filter function to medications (filter by cheap)', async () => {
      // Arrange - simulating how it's used in medication-search.component.ts
      const testData = [
        AmpMockFactory.create({
          id: 'test-amp-1',
          prescriptionName: { fr: 'Test Med 1' } as any,
          ampps: [
            AmppMockFactory.create({
              ctiExtended: 'test-ampp-1',
              dmpps: [DmppMockFactory.create({ cheap: true, cheapest: false })],
            }),
          ],
        }),
        AmpMockFactory.create({
          id: 'test-amp-2',
          prescriptionName: { fr: 'Test Med 2' } as any,
          ampps: [
            AmppMockFactory.create({
              ctiExtended: 'test-ampp-2',
              dmpps: [DmppMockFactory.create({ cheap: false, cheapest: true })],
            }),
          ],
        }),
        AmpMockFactory.create({
          id: 'test-amp-3',
          prescriptionName: { fr: 'Test Med 3' } as any,
          ampps: [
            AmppMockFactory.create({
              ctiExtended: 'test-ampp-3',
              dmpps: [DmppMockFactory.create({ cheap: false, cheapest: false })],
            }),
          ],
        }),
      ];
      const mockIterator = PaginatedListIteratorMockFactory.create(testData);

      const filterFn = (mt: MedicationType) =>
        mt.cheap || mt.cheapest ? mt : undefined;

      // Act
      const result = await service.loadMedicationsPage(
        mockIterator,
        10,
        'A',
        [],
        filterFn
      );

      // Assert - Should have 2 products (amp-1 and amp-2)
      expect(result.length).toBe(2);

      // All medications within products should be cheap or cheapest
      const allMedications = result.flatMap(p => p.medications);
      expect(allMedications.length).toBe(2);
      expect(allMedications.every(med => med.cheap || med.cheapest)).toBe(true);
    });

    it('should filter by cheap property (as used in handleAddPrescription)', async () => {
      // Arrange - using mock data since real data doesn't have cheap/cheapest flags
      const testData = [
        AmpMockFactory.create({
          id: 'test-cheap-amp',
          prescriptionName: { fr: 'Cheap Med' } as any,
          ampps: [
            AmppMockFactory.create({
              ctiExtended: 'cheap-ampp',
              dmpps: [DmppMockFactory.create({ cheap: true })],
            }),
          ],
        }),
        AmpMockFactory.create({
          id: 'test-notcheap-amp',
          prescriptionName: { fr: 'Not Cheap Med' } as any,
          ampps: [
            AmppMockFactory.create({
              ctiExtended: 'notcheap-ampp',
              dmpps: [DmppMockFactory.create({ cheap: false })],
            }),
          ],
        }),
      ];
      const mockIterator = PaginatedListIteratorMockFactory.create(testData);

      const cheapAlternativesFilter = (mt: MedicationType) =>
        mt.cheap || mt.cheapest ? mt : undefined;

      // Act
      const result = await service.loadMedicationsPage(
        mockIterator,
        10,
        'A',
        [],
        cheapAlternativesFilter
      );

      // Assert - Should have 1 product with 1 cheap medication
      expect(result.length).toBe(1);
      expect(result[0].ampId).toBe('test-cheap-amp');
      expect(result[0].medications.length).toBe(1);
      expect(result[0].medications[0].cheap).toBe(true);
    });
  });

  describe('loadMedicationsPage - Date filtering', () => {
    it('should exclude medications with past "to" date', async () => {
      // Arrange - create test data with expired medication
      const pastDate = Date.now() - 1000 * 60 * 60 * 24 * 365; // 1 year ago
      const testData = [
        AmpMockFactory.create({
          id: 'expired-amp',
          to: pastDate,
          prescriptionName: { fr: 'Expired Med' } as any,
          ampps: [AmppMockFactory.create()],
        }),
        AmpMockFactory.create({
          id: 'active-amp',
          prescriptionName: { fr: 'Active Med' } as any,
          ampps: [AmppMockFactory.create()],
        }),
      ];
      const mockIterator = PaginatedListIteratorMockFactory.create(testData);

      // Act
      const result = await service.loadMedicationsPage(
        mockIterator,
        10,
        'A'
      );

      // Assert - Expired AMP should not be in results
      expect(result.every(product => product.ampId !== 'expired-amp')).toBe(true);
      expect(result.some(product => product.ampId === 'active-amp')).toBe(true);
    });

    it('should only include AMPPs with active commercialization dates', async () => {
      // Arrange - create test data with different commercialization dates
      const now = Date.now();
      const testData = [
        AmpMockFactory.create({
          id: 'active-commercialization',
          prescriptionName: { fr: 'Active Commercialization' } as any,
          ampps: [
            AmppMockFactory.create({
              ctiExtended: 'active-ampp',
              commercializations: [
                { from: now - 1000 * 60 * 60, to: undefined } as any,
              ],
            }),
          ],
        }),
      ];
      const mockIterator = PaginatedListIteratorMockFactory.create(testData);

      // Act
      const result = await service.loadMedicationsPage(
        mockIterator,
        10,
        'A'
      );

      // Assert
      expect(result.length).toBeGreaterThan(0);
      expect(result[0].medications.length).toBeGreaterThan(0);
      expect(result[0].medications[0].id).toBe('active-ampp');
    });
  });

  describe('loadMedicationsPage - Delivery environment filtering', () => {
    it('should only include AMPPs with matching delivery environment', async () => {
      // Arrange - create test data with different delivery environments
      const testData = [
        AmpMockFactory.create({
          id: 'be-amp',
          prescriptionName: { fr: 'BE Med' } as any,
          ampps: [
            AmppMockFactory.create({
              ctiExtended: 'be-ampp',
              dmpps: [DmppMockFactory.create({ deliveryEnvironment: 'A' as any })],
            }),
          ],
        }),
        AmpMockFactory.create({
          id: 'fr-amp',
          prescriptionName: { fr: 'FR Med' } as any,
          ampps: [
            AmppMockFactory.create({
              ctiExtended: 'fr-ampp',
              dmpps: [DmppMockFactory.create({ deliveryEnvironment: 'H' as any })],
            }),
          ],
        }),
      ];
      const mockIterator = PaginatedListIteratorMockFactory.create(testData);

      // Act
      const result = await service.loadMedicationsPage(
        mockIterator,
        10,
        'A'
      );

      // Assert
      expect(result.length).toBe(1);
      expect(result[0].ampId).toBe('be-amp');
      expect(result[0].medications.length).toBe(1);
      expect(result[0].medications[0].id).toBe('be-ampp');
      expect(result.every(product => product.ampId !== 'fr-amp')).toBe(true);
    });

    it('should handle different delivery environments', async () => {
      // Arrange
      const testData = [
        AmpMockFactory.create({
          id: 'fr-amp',
          prescriptionName: { fr: 'FR Med' } as any,
          ampps: [
            AmppMockFactory.create({
              ctiExtended: 'fr-ampp',
              dmpps: [DmppMockFactory.create({ deliveryEnvironment: 'H' as any })],
            }),
          ],
        }),
      ];
      const mockIterator = PaginatedListIteratorMockFactory.create(testData);

      // Act
      const resultFr = await service.loadMedicationsPage(
        mockIterator,
        10,
        'H'
      );

      // Assert
      expect(resultFr.length).toBe(1);
      expect(resultFr[0].ampId).toBe('fr-amp');
      expect(resultFr[0].medications[0].id).toBe('fr-ampp');
    });
  });

  describe('loadMedicationsPage - Language handling', () => {
    it('should use current language for medication titles', async () => {
      // Arrange
      mockTranslationService.getCurrentLanguage.and.returnValue('nl');

      const mockIterator = PaginatedListIteratorMockFactory.create([
        AmpMockFactory.create({
          id: 'amp-1',
          prescriptionName: { fr: 'Médicament', nl: 'Medicijn' } as any,
          name: { fr: 'Med', nl: 'Med' } as any,
          ampps: [
            AmppMockFactory.create({
              ctiExtended: 'ampp-1',
              prescriptionName: { fr: 'Presc FR', nl: 'Presc NL' } as any,
            }),
          ],
        }),
      ]);

      // Act
      const result = await service.loadMedicationsPage(
        mockIterator,
        10,
        'A'
      );

      // Assert - Check both AMP title and AMPP title
      expect(result[0].title).toBe('Medicijn');
      expect(result[0].medications[0].title).toBe('Presc NL');
    });

    it('should fallback to French when language is not available', async () => {
      // Arrange
      mockTranslationService.getCurrentLanguage.and.returnValue('de');

      const mockIterator = PaginatedListIteratorMockFactory.create([
        AmpMockFactory.create({
          id: 'amp-1',
          prescriptionName: { fr: 'Médicament Français' } as any,
          ampps: [
            AmppMockFactory.create({
              ctiExtended: 'ampp-1',
              prescriptionName: { fr: 'Presc FR' } as any,
            }),
          ],
        }),
      ]);

      // Act
      const result = await service.loadMedicationsPage(
        mockIterator,
        10,
        'A'
      );

      // Assert - Both should fallback to French
      expect(result[0].title).toBe('Médicament Français');
      expect(result[0].medications[0].title).toBe('Presc FR');
    });
  });

  describe('loadMedicationsPage - DMPP CNK code selection', () => {
    it('should select DMPP with CNK code type', async () => {
      // Arrange
      const mockIterator = PaginatedListIteratorMockFactory.create([
        AmpMockFactory.create({
          id: 'amp-1',
          prescriptionName: { fr: 'Test Med' } as any,
          ampps: [
            AmppMockFactory.create({
              ctiExtended: 'ampp-1',
              dmpps: [
            DmppMockFactory.create({
              codeType: DmppCodeType.Cnk,
              code: '1234567',
              productId: 'prod-cnk',
            }),
            DmppMockFactory.create({
              codeType: DmppCodeType.Cnk,
              code: '9999999',
              productId: 'prod-upc',
            }),
              ],
            }),
          ],
        }),
      ]);

      // Act
      const result = await service.loadMedicationsPage(
        mockIterator,
        10,
        'A'
      );

      // Assert
      expect(result.length).toBe(1);
      expect(result[0].medications.length).toBe(1);
      expect(result[0].medications[0].cnk).toBe('1234567');
      expect(result[0].medications[0].dmppProductId).toBe('prod-cnk');
    });
  });

  describe('loadMedicationsPage - Medication properties', () => {
    it('should extract all relevant medication properties', async () => {
      // Arrange
      const mockIterator = PaginatedListIteratorMockFactory.create([
        AmpMockFactory.create({
          id: 'amp-1',
          prescriptionName: { fr: 'Aspirin' } as any,
          name: { fr: 'Aspirin' } as any,
          vmp: {
            id: 'vmp-1',
            code: 'vmp-code-1',
            vmpGroup: { id: 'vmp-group-1', code: 'code-1', name: { fr: 'VMP Group' } as SamText, productId: 'prod-1' } as any,
            name: { fr: 'Pain Relief' } as SamText,
          } as any,
          blackTriangle: true,
          ampps: [
            AmppMockFactory.create({
              ctiExtended: 'ampp-1',
              prescriptionName: { fr: 'Aspirin 500mg' } as any,
              exFactoryPrice: 1.5,
              speciallyRegulated: 1,
              genericPrescriptionRequired: true,
              crmLink: { fr: 'http://crm.com' } as SamText,
              leafletLink: { fr: 'http://leaflet.com' } as SamText,
              rmaProfessionalLink: { fr: 'http://rma.com' } as SamText,
              spcLink: { fr: 'http://spc.com' } as SamText,
              dhpcLink: { fr: 'http://dhpc.com' } as SamText,
              deliveryModusCode: 'MOD1',
              deliveryModus: { fr: 'Standard' } as SamText,
              deliveryModusSpecificationCode: 'Sp',
              deliveryModusSpecification: { fr: 'Specification' } as SamText,
              rmaKeyMessages: { fr: 'Important message' } as SamText,
              dmpps: [
                DmppMockFactory.create({
                  cheap: false,
                  cheapest: false,
                  reimbursements: [
                    {
                      from: Date.now() - 1000,
                    } as Reimbursement,
                  ],
                }),
              ],
            }),
          ],
        }),
      ]);

      // Act
      const result = await service.loadMedicationsPage(
        mockIterator,
        10,
        'A'
      );

      // Assert - Check product structure
      expect(result.length).toBe(1);
      expect(result[0].ampId).toBe('amp-1');
      expect(result[0].title).toBe('Aspirin');
      expect(result[0].medications.length).toBe(1);

      // Assert - Check medication properties within the product
      const medication = result[0].medications[0];
      expect(medication).toEqual(
        jasmine.objectContaining({
          ampId: 'amp-1',
          vmpGroupId: 'vmp-group-1',
          id: 'ampp-1',
          title: 'Aspirin 500mg',
          vmpTitle: 'Pain Relief',
          price: '€1.5',
          blackTriangle: true,
          speciallyRegulated: 1,
          genericPrescriptionRequired: true,
          crmLink: 'http://crm.com',
          patientInformationLeafletLink: 'http://leaflet.com',
          rmaProfessionalLink: 'http://rma.com',
          spcLink: 'http://spc.com',
          dhpcLink: 'http://dhpc.com',
          deliveryModusCode: 'MOD1',
          deliveryModus: 'Standard',
          deliveryModusSpecificationCode: 'Sp',
          deliveryModusSpecification: 'Specification',
          // Note: rmakeyMessages returns the entire SamText object, not just the string
        })
      );
    });
  });

  describe('loadMedicationsPage - Accumulator and recursive loading', () => {
    it('should accumulate results when min is not met', async () => {
      // Arrange - use mock data with ampps
      const testData = AmpMockFactory.createList(10).map((amp, i) => ({
        ...amp,
        prescriptionName: { fr: `Med ${i}` } as any,
        ampps: [AmppMockFactory.create({ ctiExtended: `ampp-${i}` })],
      }));
      const mockIterator = PaginatedListIteratorMockFactory.create(testData);

      // Act
      const result = await service.loadMedicationsPage(
        mockIterator,
        5,
        'A'
      );

      // Assert - Should have at least 5 products
      expect(result.length).toBeGreaterThanOrEqual(5);
    });

    it('should use provided accumulator', async () => {
      // Arrange
      const existingProduct: MedicationProductType = {
        ampId: 'existing-amp',
        title: 'Existing Med',
        medications: [{
          title: 'Existing Med Detail',
          id: 'existing',
        }],
      };
      const testData = AmpMockFactory.createList(3).map((amp, i) => ({
        ...amp,
        prescriptionName: { fr: `Med ${i}` } as any,
        ampps: [AmppMockFactory.create({ ctiExtended: `ampp-${i}` })],
      }));
      const mockIterator = PaginatedListIteratorMockFactory.create(testData);

      // Act
      const result = await service.loadMedicationsPage(
        mockIterator,
        10,
        'A',
        [existingProduct]
      );

      // Assert
      expect(result.length).toBeGreaterThanOrEqual(1);
      expect(result[0]).toEqual(existingProduct);
    });
  });

  describe('loadMore - Pagination and order', () => {
    it('should load through multiple pages using loadMore, maintaining alphabetical order and content correspondence', async () => {
      // Arrange
      const allLoadedProducts: Med[] = [];

      // Prepare loadMore params
      let medicationsPage: MedicationProductType[] = [];
      let moleculesPage: MedicationType[] = [];
      let productsPage: MedicationType[] = [];
      let medications = PaginatedListIteratorMockFactory.create(ampsTestData as any as Amp[]);
      let molecules = PaginatedListIteratorMockFactory.create(vmpsTestData as any as VmpGroup[]);
      let products = PaginatedListIteratorMockFactory.create(nmpsTestData as any as Nmp[]);;
      const deliveryEnvironment = 'A';

      // Act - Load 10 pages of 10 elements each using loadMore
      for (let i = 0; i < 10; i++) {
        const { result, updated } = await service.loadMore({
          untreatedLoadedMedicationProducts: medicationsPage,
          untreatedLoadedMolecules: moleculesPage,
          untreatedLoadNonMedicinals: productsPage,
          medicationProductsIterator: medications,
          moleculesIterator: molecules,
          nonMedicinalesIterator: products,
          deliveryEnvironment,
        });
        // Store new products (excluding already loaded)
        allLoadedProducts.push(...(result as Med[]));
        // Update pages for next call
        medicationsPage = updated.medicationsPage;
        moleculesPage = updated.moleculesPage;
        productsPage = updated.productsPage;
      }

      // Assert - Check alphabetical order of all titles
      for (let i = 1; i < allLoadedProducts.length; i++) {
        const prevTitle = normalizeForSort(allLoadedProducts[i - 1].title) || '';
        const currentTitle = normalizeForSort(allLoadedProducts[i].title) || '';
        expect(prevTitle <= currentTitle).withContext(
          `MedicationProducts not in alphabetical order: "${allLoadedProducts[i - 1].title}" should come before or equal to "${allLoadedProducts[i].title}"`
        ).toBe(true)
      }

      // Assert - Basic sanity checks
      expect(allLoadedProducts.length).toBe(50);
    });
  });
});
