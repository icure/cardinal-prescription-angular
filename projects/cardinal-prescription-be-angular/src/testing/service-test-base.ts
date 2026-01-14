/**
 * Base class for service testing
 * Provides common TestBed configuration and utilities
 */

import { TestBed, TestModuleMetadata } from '@angular/core/testing';
import { Type, Provider } from '@angular/core';

/**
 * Base configuration for service tests
 */
export interface ServiceTestConfig {
  /** The service class to test */
  serviceClass: Type<any>;
  /** Providers to include in the test module */
  providers?: Provider[];
  /** Additional imports for the test module */
  imports?: any[];
  /** Mock providers to automatically create */
  mockProviders?: Type<any>[];
}

/**
 * Base class for service unit tests
 * Simplifies TestBed setup and provides common utilities
 *
 * @example
 * ```typescript
 * class MyServiceTest extends ServiceTestBase {
 *   protected getConfig(): ServiceTestConfig {
 *     return {
 *       serviceClass: MyService,
 *       providers: [
 *         { provide: DependencyService, useValue: mockDependencyService }
 *       ]
 *     };
 *   }
 *
 *   it('should do something', () => {
 *     const service = this.getService<MyService>();
 *     expect(service.doSomething()).toBe(true);
 *   });
 * }
 * ```
 */
export abstract class ServiceTestBase {
  /**
   * Get the configuration for the service test
   * Override this method in your test class
   */
  protected abstract getConfig(): ServiceTestConfig;

  /**
   * Setup the test bed before each test
   * Call this in beforeEach()
   */
  protected setup(): void {
    const config = this.getConfig();
    const moduleConfig: TestModuleMetadata = {
      providers: [config.serviceClass, ...(config.providers || [])],
      imports: config.imports || [],
    };

    // Add mock providers if specified
    if (config.mockProviders) {
      config.mockProviders.forEach(provider => {
        const mockMethods = this.extractMethodNames(provider);
        const spy = jasmine.createSpyObj(provider.name, mockMethods);
        moduleConfig.providers!.push({ provide: provider, useValue: spy });
      });
    }

    TestBed.configureTestingModule(moduleConfig);
  }

  /**
   * Get the service instance from TestBed
   */
  protected getService<T>(serviceClass?: Type<T>): T {
    const config = this.getConfig();
    return TestBed.inject(serviceClass || (config.serviceClass as Type<T>));
  }

  /**
   * Get a dependency from TestBed
   */
  protected getDependency<T>(token: Type<T> | any): T {
    return TestBed.inject(token);
  }

  /**
   * Create a spy object for a service
   */
  protected createSpy<T>(serviceClass: Type<T>, methods?: (keyof T)[]): jasmine.SpyObj<T> {
    const methodNames = methods || this.extractMethodNames(serviceClass);
    return jasmine.createSpyObj(serviceClass.name, methodNames as string[]);
  }

  /**
   * Extract method names from a class
   */
  private extractMethodNames(classType: Type<any>): string[] {
    const prototype = classType.prototype;
    const methods: string[] = [];

    // Get all property names from the prototype
    Object.getOwnPropertyNames(prototype).forEach(name => {
      if (name !== 'constructor' && typeof prototype[name] === 'function') {
        methods.push(name);
      }
    });

    return methods;
  }
}

/**
 * Quick setup helper for simple service tests
 *
 * @example
 * ```typescript
 * describe('MyService', () => {
 *   let service: MyService;
 *   let mockDep: jasmine.SpyObj<DependencyService>;
 *
 *   beforeEach(() => {
 *     const setup = setupServiceTest(MyService, [DependencyService]);
 *     service = setup.service;
 *     mockDep = setup.mocks.get(DependencyService);
 *   });
 *
 *   it('should work', () => {
 *     expect(service).toBeTruthy();
 *   });
 * });
 * ```
 */
export function setupServiceTest<T>(
  serviceClass: Type<T>,
  dependencies: Type<any>[] = [],
  additionalProviders: Provider[] = []
): {
  service: T;
  mocks: Map<Type<any>, jasmine.SpyObj<any>>;
} {
  const mocks = new Map<Type<any>, jasmine.SpyObj<any>>();
  const providers: Provider[] = [serviceClass, ...additionalProviders];

  // Create spy objects for dependencies
  dependencies.forEach(dep => {
    const spy = jasmine.createSpyObj(dep.name,
      Object.getOwnPropertyNames(dep.prototype)
        .filter(name => name !== 'constructor' && typeof dep.prototype[name] === 'function')
    );
    mocks.set(dep, spy);
    providers.push({ provide: dep, useValue: spy });
  });

  TestBed.configureTestingModule({ providers });
  const service = TestBed.inject(serviceClass);

  return { service, mocks };
}

/**
 * Helper to configure TestBed for service testing with common patterns
 */
export class ServiceTestBed {
  /**
   * Configure TestBed for a service with mocked dependencies
   */
  static configureFor<T>(
    serviceClass: Type<T>,
    config?: {
      providers?: Provider[];
      imports?: any[];
      declarations?: any[];
    }
  ): TestBed {
    return TestBed.configureTestingModule({
      providers: [serviceClass, ...(config?.providers || [])],
      imports: config?.imports || [],
      declarations: config?.declarations || [],
    });
  }

  /**
   * Create a mock provider for a service
   */
  static mockProvider<T>(
    serviceClass: Type<T>,
    mockImplementation?: Partial<T>
  ): Provider {
    const methods = Object.getOwnPropertyNames(serviceClass.prototype)
      .filter(name => name !== 'constructor' && typeof serviceClass.prototype[name] === 'function');

    const spy = jasmine.createSpyObj(serviceClass.name, methods);

    if (mockImplementation) {
      Object.assign(spy, mockImplementation);
    }

    return { provide: serviceClass, useValue: spy };
  }

  /**
   * Create multiple mock providers at once
   */
  static mockProviders(...serviceClasses: Type<any>[]): Provider[] {
    return serviceClasses.map(cls => this.mockProvider(cls));
  }
}

/**
 * Decorator to automatically setup and teardown TestBed
 *
 * @example
 * ```typescript
 * @ServiceTest({
 *   serviceClass: MyService,
 *   providers: [...]
 * })
 * class MyServiceSpec {
 *   @InjectService() service!: MyService;
 *
 *   @Test()
 *   shouldWork() {
 *     expect(this.service).toBeTruthy();
 *   }
 * }
 * ```
 */
export function ServiceTest(config: ServiceTestConfig) {
  return function (constructor: Function) {
    const original = constructor;

    // Setup before each test
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [config.serviceClass, ...(config.providers || [])],
        imports: config.imports || [],
      });
    });

    // Cleanup after each test
    afterEach(() => {
      TestBed.resetTestingModule();
    });

    return original;
  };
}

