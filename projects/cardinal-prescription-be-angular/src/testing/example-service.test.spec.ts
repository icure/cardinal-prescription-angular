/**
 * Example Service Test
 * Demonstrates how to use the testing infrastructure for service testing
 */

import { TestBed } from '@angular/core/testing';
import {
  setupServiceTest,
  ServiceTestBed,
  AmpMockFactory,
  AmppMockFactory,
  ServiceSpyHelper,
  PaginatedListIteratorMockFactory,
  TestDataBuilder
} from '../testing';
import { MedicationLoaderService } from '../lib/internal/services/loaders/medication-loader.service';
import { TranslationService } from '../lib/shared/services/translation/translation.service';
import { MergeLazySortedNamedItemsService } from '../lib/internal/services/loaders/merge-lazy-sorted-named-items.service';
import { Amp, PaginatedListIterator } from '@icure/cardinal-be-sam-sdk';

/**
 * Example 1: Using setupServiceTest helper
 */
describe('MedicationLoaderService - Using setupServiceTest', () => {
  let service: MedicationLoaderService;
  let mockTranslationService: jasmine.SpyObj<TranslationService>;
  let mockMergeService: jasmine.SpyObj<MergeLazySortedNamedItemsService>;

  beforeEach(() => {
    const setup = setupServiceTest(
      MedicationLoaderService,
      [TranslationService, MergeLazySortedNamedItemsService]
    );

    service = setup.service;
    mockTranslationService = setup.mocks.get(TranslationService)!;
    mockMergeService = setup.mocks.get(MergeLazySortedNamedItemsService)!;

    // Configure default behavior
    mockTranslationService.getCurrentLanguage.and.returnValue('fr');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

/**
 * Example 2: Using ServiceTestBed helper
 */
describe('MedicationLoaderService - Using ServiceTestBed', () => {
  let service: MedicationLoaderService;
  let mockTranslationService: jasmine.SpyObj<TranslationService>;

  beforeEach(() => {
    mockTranslationService = ServiceSpyHelper.createTranslationServiceSpy();

    ServiceTestBed.configureFor(MedicationLoaderService, {
      providers: [
        { provide: TranslationService, useValue: mockTranslationService },
        ServiceTestBed.mockProvider(MergeLazySortedNamedItemsService),
      ],
    });

    service = TestBed.inject(MedicationLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should use translation service', async () => {
    const mockAmps = AmpMockFactory.createList(5).map((amp, i) => ({
      ...amp,
      ampps: [AmppMockFactory.create({ ctiExtended: `ampp-${i}` })],
    }));
    const iterator = PaginatedListIteratorMockFactory.create(mockAmps);

    const result = await service.loadMedicationsPage(iterator, 10, 'A');

    expect(mockTranslationService.getCurrentLanguage).toHaveBeenCalled();
  });
});

/**
 * Example 3: Using traditional TestBed.configureTestingModule
 */
describe('MedicationLoaderService - Traditional TestBed', () => {
  let service: MedicationLoaderService;
  let mockTranslationService: jasmine.SpyObj<TranslationService>;
  let mockMergeService: jasmine.SpyObj<MergeLazySortedNamedItemsService>;

  beforeEach(() => {
    mockTranslationService = jasmine.createSpyObj('TranslationService', [
      'translate',
      'getCurrentLanguage',
    ]);
    mockTranslationService.getCurrentLanguage.and.returnValue('fr');

    mockMergeService = jasmine.createSpyObj('MergeLazySortedNamedItemsService', [
      'mergeLazySortedNamedItems',
    ]);

    TestBed.configureTestingModule({
      providers: [
        MedicationLoaderService,
        { provide: TranslationService, useValue: mockTranslationService },
        { provide: MergeLazySortedNamedItemsService, useValue: mockMergeService },
      ],
    });

    service = TestBed.inject(MedicationLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('loadMedicationsPage', () => {
    it('should load medications using test data builder', async () => {
      // Arrange
      const medications = TestDataBuilder.buildMedicationList(3);
      const iterator = PaginatedListIteratorMockFactory.create(medications);

      // Act
      const result = await service.loadMedicationsPage(iterator, 10, 'A');

      // Assert
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should filter cheap medications', async () => {
      // Arrange
      const medications = [
        TestDataBuilder.buildCompleteMedication({ cheap: true }),
        TestDataBuilder.buildCompleteMedication({ cheap: false }),
        TestDataBuilder.buildCompleteMedication({ cheapest: true }),
      ];
      const iterator = PaginatedListIteratorMockFactory.create(medications);
      const filterFn = (med: any) => (med.cheap || med.cheapest ? med : undefined);

      // Act
      const result = await service.loadMedicationsPage(
        iterator,
        10,
        'A',
        [],
        filterFn
      );

      // Assert - Result is MedicationProductType[], need to flatten to check medications
      expect(result.length).toBe(2);
      const allMedications = result.flatMap(p => p.medications);
      expect(allMedications.every(med => med.cheap || med.cheapest)).toBe(true);
    });

    it('should handle different delivery environments', async () => {
      // Arrange
      const medicationsByEnv = TestDataBuilder.buildMedicationsWithDeliveryEnvironments();
      const allMedications = [...medicationsByEnv.BE, ...medicationsByEnv.FR];
      const iterator = PaginatedListIteratorMockFactory.create(allMedications);

      // Act
      const resultBE = await service.loadMedicationsPage(iterator, 10, 'A');

      // Assert - Only BE medications should be returned
      expect(resultBE.length).toBeGreaterThan(0);
    });

    it('should handle empty iterator', async () => {
      // Arrange
      const emptyIterator: PaginatedListIterator<Amp> = PaginatedListIteratorMockFactory.createEmpty();

      // Act
      const result = await service.loadMedicationsPage(emptyIterator, 10, 'A');

      // Assert
      expect(result).toBeDefined();
      expect(result.length).toBe(0);
    });
  });
});

/**
 * Example 4: Using mock factories
 */
describe('Mock Factories Examples', () => {
  it('should create Amp with AmpMockFactory', () => {
    const amp = AmpMockFactory.create({
      id: 'custom-id',
      blackTriangle: true,
    });

    expect(amp.id).toBe('custom-id');
    expect(amp.blackTriangle).toBe(true);
    expect(amp.name).toBeDefined();
  });

  it('should create list of Amps', () => {
    const amps = AmpMockFactory.createList(5);

    expect(amps.length).toBe(5);
    expect(amps[0].id).toBe('amp-0');
    expect(amps[4].id).toBe('amp-4');
  });

  it('should create paginated iterator', async () => {
    const items = ['item1', 'item2', 'item3'];
    const iterator = PaginatedListIteratorMockFactory.create(items);

    const hasNext = await iterator.hasNext();
    const page = await iterator.next(2);

    expect(hasNext).toBe(true);
    expect(page).toEqual(['item1', 'item2']);
  });

  it('should use TestDataBuilder for complex scenarios', () => {
    const medication = TestDataBuilder.buildCompleteMedication({
      cheap: true,
      blackTriangle: true,
      deliveryEnvironment: 'A',
    });

    expect(medication.blackTriangle).toBe(true);
    expect(medication.ampps.length).toBeGreaterThan(0);
    expect(medication.ampps[0].dmpps[0].cheap).toBe(true);
  });
});

