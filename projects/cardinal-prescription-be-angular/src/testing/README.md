# Testing Infrastructure

This directory contains the testing infrastructure for the Cardinal Prescription Angular Library.

## Overview

The testing infrastructure provides:

- **TestBed Configuration Helpers** - Simplified setup for service and component tests
- **Mock Factories** - Reusable factories for creating test data
- **Service Test Base Classes** - Base classes and utilities for service testing
- **Test Helpers** - Common utilities for DOM queries, async operations, etc.

## Quick Start

### Service Testing

#### Option 1: Using `setupServiceTest` (Recommended for Simple Tests)

```typescript
import { setupServiceTest, ServiceSpyHelper } from '../testing';
import { MyService } from './my.service';
import { DependencyService } from './dependency.service';

describe('MyService', () => {
  let service: MyService;
  let mockDependency: jasmine.SpyObj<DependencyService>;

  beforeEach(() => {
    const setup = setupServiceTest(MyService, [DependencyService]);
    service = setup.service;
    mockDependency = setup.mocks.get(DependencyService)!;
    
    // Configure mock behavior
    mockDependency.someMethod.and.returnValue('mocked value');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
```

#### Option 2: Using `ServiceTestBed` (For More Control)

```typescript
import { TestBed } from '@angular/core/testing';
import { ServiceTestBed, ServiceSpyHelper } from '../testing';
import { MyService } from './my.service';
import { TranslationService } from './translation.service';

describe('MyService', () => {
  let service: MyService;
  let mockTranslationService: jasmine.SpyObj<TranslationService>;

  beforeEach(() => {
    mockTranslationService = ServiceSpyHelper.createTranslationServiceSpy();

    ServiceTestBed.configureFor(MyService, {
      providers: [
        { provide: TranslationService, useValue: mockTranslationService },
        ServiceTestBed.mockProvider(OtherDependency),
      ],
    });

    service = TestBed.inject(MyService);
  });

  it('should work', () => {
    expect(service).toBeTruthy();
  });
});
```

#### Option 3: Traditional TestBed (Maximum Flexibility)

```typescript
import { TestBed } from '@angular/core/testing';
import { MyService } from './my.service';

describe('MyService', () => {
  let service: MyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MyService,
        { provide: DependencyService, useValue: mockDependency }
      ]
    });
    service = TestBed.inject(MyService);
  });

  it('should work', () => {
    expect(service).toBeTruthy();
  });
});
```

## Mock Factories

### Creating Mock Data

```typescript
import { 
  AmpMockFactory,
  AmppMockFactory,
  DmppMockFactory,
  PaginatedListIteratorMockFactory,
  TestDataBuilder 
} from '../testing';

// Create a single Amp
const amp = AmpMockFactory.create({ id: 'custom-id', blackTriangle: true });

// Create multiple Amps
const amps = AmpMockFactory.createList(5);

// Create a complete medication with related data
const medication = TestDataBuilder.buildCompleteMedication({
  cheap: true,
  blackTriangle: true,
  deliveryEnvironment: 'A'
});

// Create a paginated iterator
const iterator = PaginatedListIteratorMockFactory.create(amps);

// Create an empty iterator
const emptyIterator = PaginatedListIteratorMockFactory.createEmpty();
```

## Service Spy Helpers

Pre-configured spy objects for common services:

```typescript
import { ServiceSpyHelper } from '../testing';

// Translation Service
const mockTranslationService = ServiceSpyHelper.createTranslationServiceSpy();

// SAM SDK Service
const mockSamSdkService = ServiceSpyHelper.createSamSdkServiceSpy();

// Medication Loader Service
const mockMedicationLoader = ServiceSpyHelper.createMedicationLoaderServiceSpy();

// Certificate Service
const mockCertificateService = ServiceSpyHelper.createCertificateServiceSpy();
```

## Test Data Builders

Complex test scenarios made easy:

```typescript
import { TestDataBuilder } from '../testing';

// Build a complete medication
const medication = TestDataBuilder.buildCompleteMedication({
  cheap: true,
  cheapest: false,
  blackTriangle: true,
  deliveryEnvironment: 'A'
});

// Build a list of medications
const medications = TestDataBuilder.buildMedicationList(10);

// Build medications with different delivery environments
const medsByEnv = TestDataBuilder.buildMedicationsWithDeliveryEnvironments();
// Returns: { BE: Amp[], FR: Amp[] }
```

## Query Helpers

DOM query utilities for component testing:

```typescript
import { QueryHelper, click, setInputValue } from '../testing';
import { ComponentFixture } from '@angular/core/testing';

// Find element by CSS selector
const element = QueryHelper.findByCss(fixture, '.my-class');

// Find all elements
const elements = QueryHelper.findAllByCss(fixture, '.my-class');

// Find by directive
const directiveElement = QueryHelper.findByDirective(fixture, MyDirective);

// Click element
click(element);

// Set input value
const input = element.nativeElement as HTMLInputElement;
setInputValue(input, 'new value');
```

## Async Helpers

Utilities for async testing:

```typescript
import { AsyncTestHelper, waitFor } from '../testing';

// Wait for a condition
await waitFor(() => someCondition === true, 5000);

// Flush all promises
await AsyncTestHelper.flushPromises();

// Advance timers and flush promises
jasmine.clock().install();
await AsyncTestHelper.tick(1000);
jasmine.clock().uninstall();
```

## Running Tests

### Run all tests
```bash
npm test
```

### Run tests for the library only
```bash
ng test cardinal-prescription-be-angular
```

### Run tests in headless mode (CI)
```bash
ng test --watch=false --browsers=ChromeHeadlessCI
```

### Run tests with coverage
```bash
ng test --code-coverage
```

### Run specific test file
```bash
ng test --include='**/my-service.spec.ts'
```

## Code Coverage

Coverage reports are generated in the `coverage/` directory:
- HTML report: `coverage/cardinal-prescription-be-angular/index.html`
- LCOV report: `coverage/cardinal-prescription-be-angular/lcov.info`

### Coverage Thresholds

The project enforces minimum coverage thresholds:
- Statements: 60%
- Branches: 50%
- Functions: 60%
- Lines: 60%

## Best Practices

### 1. Use Mock Factories
Instead of creating mock data manually, use the provided factories:
```typescript
// ❌ Don't do this
const amp = {
  id: 'test',
  name: { fr: 'Test' },
  // ... many more properties
};

// ✅ Do this
const amp = AmpMockFactory.create({ id: 'test' });
```

### 2. Use Service Spy Helpers
Pre-configured spies save time and ensure consistency:
```typescript
// ❌ Don't do this
const mockTranslationService = jasmine.createSpyObj('TranslationService', [
  'translate',
  'getCurrentLanguage',
  'setLanguage'
]);
mockTranslationService.getCurrentLanguage.and.returnValue('fr');

// ✅ Do this
const mockTranslationService = ServiceSpyHelper.createTranslationServiceSpy();
```

### 3. Use Test Data Builders for Complex Scenarios
```typescript
// ❌ Don't manually construct complex objects
const medication = {
  // ... lots of nested configuration
};

// ✅ Use builders
const medication = TestDataBuilder.buildCompleteMedication({
  cheap: true,
  deliveryEnvironment: 'A'
});
```

### 4. Keep Tests Focused
Each test should verify one specific behavior:
```typescript
// ✅ Good - focused test
it('should filter cheap medications', () => {
  const result = service.filterCheap(medications);
  expect(result.every(m => m.cheap)).toBe(true);
});

// ❌ Bad - testing multiple things
it('should filter and sort and transform', () => {
  // Too many responsibilities
});
```

### 5. Use Descriptive Test Names
```typescript
// ✅ Good - clear what is being tested
it('should return empty array when no medications match filter', () => {});

// ❌ Bad - unclear
it('should work', () => {});
```

## File Structure

```
src/testing/
├── index.ts                          # Main exports
├── test-helpers.ts                   # Mock factories and utilities
├── service-test-base.ts              # Base classes for service testing
├── example-service.test.spec.ts      # Example usage
└── README.md                         # This file
```

## Examples

See `example-service.test.spec.ts` for comprehensive examples of:
- Using `setupServiceTest`
- Using `ServiceTestBed`
- Traditional TestBed configuration
- Mock factories usage
- Test data builders
- Service spy helpers

## Contributing

When adding new services or components:

1. Create appropriate mock factories if needed
2. Add spy helpers for commonly mocked services
3. Update test data builders for complex scenarios
4. Document any new testing patterns
5. Ensure tests maintain >60% coverage

## Troubleshooting

### Tests Not Running
- Check that `karma.conf.js` exists in project root
- Verify `test.ts` is properly configured
- Ensure all test files end with `.spec.ts`

### Coverage Not Generated
- Add `--code-coverage` flag to test command
- Check `angular.json` has `codeCoverage: true`

### Mocks Not Working
- Verify spy objects are properly configured
- Check that providers are correctly set in TestBed
- Ensure async operations are properly awaited

## Additional Resources

- [Angular Testing Guide](https://angular.io/guide/testing)
- [Jasmine Documentation](https://jasmine.github.io/)
- [Karma Configuration](https://karma-runner.github.io/latest/config/configuration-file.html)

