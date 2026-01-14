# Testing Guide - Cardinal Prescription Angular

## Overview

This project uses a comprehensive testing infrastructure built on Angular's TestBed, Jasmine, and Karma. The testing framework provides utilities for both unit and integration testing with a focus on service testing.

## Quick Start

### Running Tests

```bash
# Run all tests with watch mode
npm test

# Run library tests only
npm run test:lib

# Run app tests only
npm run test:app

# Run tests in headless mode (no browser UI)
npm run test:headless

# Run tests with coverage report
npm run test:coverage

# Run tests for CI/CD (headless + coverage)
npm run test:ci
```

### Test Structure

```
projects/cardinal-prescription-be-angular/
├── src/
│   ├── lib/                                  # Source code
│   │   ├── internal/
│   │   │   └── services/
│   │   │       └── loaders/
│   │   │           ├── medication-loader.service.ts
│   │   │           └── medication-loader.service.spec.ts  # Test file
│   │   └── shared/
│   │       └── services/
│   └── testing/                              # Testing infrastructure
│       ├── index.ts                          # Exports all testing utilities
│       ├── test-helpers.ts                   # Mock factories & helpers
│       ├── service-test-base.ts              # Base classes for testing
│       ├── example-service.test.spec.ts      # Example tests
│       └── README.md                         # Detailed testing docs
├── src/test.ts                               # Test entry point
└── karma.conf.js                             # Karma configuration
```

## Writing Your First Test

### 1. Create a Test File

Create a file next to your service with `.spec.ts` extension:

```typescript
// my-service.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { MyService } from './my-service.service';
import { setupServiceTest } from '../../testing';

describe('MyService', () => {
  let service: MyService;

  beforeEach(() => {
    const setup = setupServiceTest(MyService);
    service = setup.service;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should perform some action', () => {
    const result = service.doSomething();
    expect(result).toBe('expected value');
  });
});
```

### 2. Testing with Dependencies

```typescript
import { setupServiceTest, ServiceSpyHelper } from '../../testing';
import { MyService } from './my-service.service';
import { DependencyService } from '../dependency.service';

describe('MyService with dependencies', () => {
  let service: MyService;
  let mockDependency: jasmine.SpyObj<DependencyService>;

  beforeEach(() => {
    const setup = setupServiceTest(MyService, [DependencyService]);
    service = setup.service;
    mockDependency = setup.mocks.get(DependencyService)!;
    
    // Configure mock behavior
    mockDependency.getData.and.returnValue('mock data');
  });

  it('should use dependency', () => {
    const result = service.processData();
    
    expect(mockDependency.getData).toHaveBeenCalled();
    expect(result).toBe('processed: mock data');
  });
});
```

### 3. Testing Async Operations

```typescript
it('should handle async operations', async () => {
  mockDependency.fetchData.and.returnValue(Promise.resolve('async data'));
  
  const result = await service.fetchAndProcess();
  
  expect(result).toBe('processed: async data');
});
```

## Testing Infrastructure

### Mock Factories

Create realistic test data easily:

```typescript
import { 
  AmpMockFactory,
  AmppMockFactory,
  PaginatedListIteratorMockFactory,
  TestDataBuilder 
} from './testing';

// Create mock medications
const medications = AmpMockFactory.createList(5);

// Create complex test scenarios
const cheapMedication = TestDataBuilder.buildCompleteMedication({
  cheap: true,
  deliveryEnvironment: 'A'
});

// Create paginated iterators
const iterator = PaginatedListIteratorMockFactory.create(medications);
```

### Service Spy Helpers

Pre-configured spies for common services:

```typescript
import { ServiceSpyHelper } from './testing';

const mockTranslationService = ServiceSpyHelper.createTranslationServiceSpy();
const mockSamSdkService = ServiceSpyHelper.createSamSdkServiceSpy();
const mockMedicationLoader = ServiceSpyHelper.createMedicationLoaderServiceSpy();
```

### Test Helpers

Utilities for DOM queries and interactions:

```typescript
import { QueryHelper, click, setInputValue } from './testing';

// In component tests
const button = QueryHelper.findByCss(fixture, 'button.submit');
click(button);

const input = QueryHelper.findByCss(fixture, 'input[name="search"]');
setInputValue(input.nativeElement, 'search term');
```

## Code Coverage

### Viewing Coverage Reports

After running tests with coverage:

```bash
npm run test:coverage
```

Open the coverage report:
```bash
open coverage/cardinal-prescription-be-angular/index.html
```

### Coverage Thresholds

Minimum coverage requirements:
- **Statements**: 60%
- **Branches**: 50%
- **Functions**: 60%
- **Lines**: 60%

## Best Practices

### ✅ Do's

1. **Use descriptive test names**
   ```typescript
   it('should return empty array when no medications match filter', () => {});
   ```

2. **Use mock factories instead of manual objects**
   ```typescript
   const amp = AmpMockFactory.create({ id: 'test-id' });
   ```

3. **Test one behavior per test**
   ```typescript
   it('should filter medications by cheap flag', () => {});
   it('should sort medications by price', () => {});
   ```

4. **Use AAA pattern (Arrange, Act, Assert)**
   ```typescript
   it('should process data', () => {
     // Arrange
     const input = 'test data';
     
     // Act
     const result = service.process(input);
     
     // Assert
     expect(result).toBe('processed: test data');
   });
   ```

5. **Mock dependencies properly**
   ```typescript
   const setup = setupServiceTest(MyService, [DependencyService]);
   const mockDep = setup.mocks.get(DependencyService)!;
   mockDep.method.and.returnValue('mocked');
   ```

### ❌ Don'ts

1. **Don't test implementation details**
   ```typescript
   // ❌ Bad - testing private methods
   expect((service as any).privateMethod()).toBe(true);
   
   // ✅ Good - test public API
   expect(service.publicMethod()).toBe(true);
   ```

2. **Don't create brittle tests**
   ```typescript
   // ❌ Bad - too specific
   expect(service.getData()).toBe('exact string that might change');
   
   // ✅ Good - test behavior
   expect(service.getData()).toContain('important part');
   ```

3. **Don't share state between tests**
   ```typescript
   // ❌ Bad
   let sharedData: any;
   beforeEach(() => { /* sharedData used across tests */ });
   
   // ✅ Good
   beforeEach(() => {
     // Fresh setup for each test
   });
   ```

4. **Don't test third-party libraries**
   ```typescript
   // ❌ Bad - testing Angular itself
   it('should have HttpClient inject properly', () => {});
   
   // ✅ Good - test your service logic
   it('should call API with correct parameters', () => {});
   ```

## Continuous Integration

### GitHub Actions Example

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test:ci
      - uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info
```

## Debugging Tests

### Run tests for a specific file
```bash
ng test --include='**/my-service.spec.ts'
```

### Debug in browser
1. Run `npm test`
2. Click "DEBUG" in the Karma browser window
3. Open browser DevTools
4. Set breakpoints in the Sources tab

### Debug in VS Code

Add to `.vscode/launch.json`:
```json
{
  "type": "chrome",
  "request": "attach",
  "name": "Karma Tests",
  "address": "localhost",
  "port": 9876,
  "pathMapping": {
    "/": "${workspaceRoot}",
    "/base/": "${workspaceRoot}/"
  }
}
```

## Common Issues

### Issue: Tests timeout
**Solution**: Increase timeout in karma.conf.js:
```javascript
browserNoActivityTimeout: 60000
```

### Issue: Coverage not generated
**Solution**: Ensure `codeCoverage: true` in angular.json and run with `--code-coverage` flag

### Issue: Chrome not found
**Solution**: Use ChromeHeadlessCI for CI environments:
```bash
npm run test:headless
```

## Additional Resources

- **Detailed Testing Docs**: See `projects/cardinal-prescription-be-angular/src/testing/README.md`
- **Example Tests**: Check `example-service.test.spec.ts` for comprehensive examples
- **Angular Testing Guide**: https://angular.io/guide/testing
- **Jasmine Documentation**: https://jasmine.github.io/
- **Karma Documentation**: https://karma-runner.github.io/

## Getting Help

1. Check the testing README in `src/testing/README.md`
2. Look at example tests in `src/testing/example-service.test.spec.ts`
3. Review existing spec files in the codebase
4. Consult Angular's official testing guide

## Changelog

- **2026-01-09**: Initial testing infrastructure setup
  - Added Karma configuration
  - Created test helpers and mock factories
  - Added service test base classes
  - Configured code coverage
  - Added comprehensive documentation

