import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  NgModule,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { SearchIcnComponent } from '../../common/icons/search-icn/search-icn.component';
import { SamSdkService } from '../../../services/api/sam-sdk.service';
import {
  BehaviorSubject,
  Subject,
  switchMap,
  debounceTime,
  filter,
  takeUntil,
} from 'rxjs';
import {
  Amp,
  Nmp,
  PaginatedListIterator,
  VmpGroup,
} from '@icure/cardinal-be-sam';
import { MedicationType } from '../../../types';
import { MedicationLoaderService } from '../../../services/loaders/medication-loader.service';
import { MedicationCardComponent } from '../medication-card/medication-card.component';
import { TooltipContextService } from '../../../services/common/tooltip-context.service';
import { TranslationService } from '../../../services/translation/translation.service';

@Component({
  selector: 'app-medication-search',
  standalone: true,
  imports: [
    SearchIcnComponent,
    AsyncPipe,
    NgIf,
    MedicationCardComponent,
    NgForOf,
  ],
  templateUrl: './medication-search.component.html',
  styleUrl: './medication-search.component.scss',
})
export class MedicationSearchComponent
  implements OnInit, OnDestroy, AfterViewChecked
{
  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('scrollAnchor', { static: false }) scrollAnchor!: ElementRef;
  @ViewChildren('resultRef') resultRefs!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('medicationSearchDropdown', { static: false })
  medicationSearchDropdown!: ElementRef<HTMLDivElement>;

  @Input() onAddPrescription!: (med: MedicationType) => void;
  @Input() deliveryEnvironment!: string;

  constructor(
    private samSdkService: SamSdkService,
    private loader: MedicationLoaderService,
    private tooltipContext: TooltipContextService,
    private translationService: TranslationService
  ) {}

  t(key: string): string {
    return this.translationService.translate(key);
  }

  private intersectionObserver?: IntersectionObserver;
  private observerInitialized = false;
  private medicationSearchDropdownRectInitialized = false;

  searchQuery$ = new BehaviorSubject<string>('');
  destroy$ = new Subject<void>();

  medications: PaginatedListIterator<Amp> | undefined;
  molecules: PaginatedListIterator<VmpGroup> | undefined;
  products: PaginatedListIterator<Nmp> | undefined;

  pages: MedicationType[] = [];
  medicationsPage: MedicationType[] = [];
  moleculesPage: MedicationType[] = [];
  productsPage: MedicationType[] = [];

  focusedMedicationIndex: number | undefined = undefined;

  get totalPagesLength(): number {
    return this.pages.length;
  }
  get dropdownDisplayed(): boolean {
    return !!this.searchQuery$.getValue();
  }
  get currentSearchQuery(): string {
    return this.searchQuery$.getValue();
  }

  async ngOnInit() {
    await this.samSdkService.initialize();

    this.searchQuery$
      .pipe(
        debounceTime(100),
        filter(q => !!q && q.length >= 3),
        switchMap(query =>
          this.samSdkService
            .searchMedications('fr', query)
            .then(async ([meds, mols, prods]) => {
              const latestQuery = this.searchQuery$.getValue();
              if (query !== latestQuery) return null;

              this.medications = meds;
              this.molecules = mols;
              this.products = prods;

              const [medicationsPage, moleculesPage, productsPage] =
                await Promise.all([
                  meds
                    ? this.loader.loadMedicationsPage(
                        meds,
                        10,
                        this.deliveryEnvironment
                      )
                    : [],
                  mols ? this.loader.loadMoleculesPage(mols, 10) : [],
                  prods ? this.loader.loadNonMedicinalPage(prods, 10) : [],
                ]);

              this.medicationsPage = medicationsPage;
              this.moleculesPage = moleculesPage;
              this.productsPage = productsPage;

              if (query !== this.searchQuery$.getValue()) return null;
              // this.isLoadingMore = true;
              const { result, updated } = await this.loader.loadMore({
                medicationsPage: this.medicationsPage,
                moleculesPage: this.moleculesPage,
                productsPage: this.productsPage,
                medications: this.medications,
                molecules: this.molecules,
                products: this.products,
                deliveryEnvironment: this.deliveryEnvironment,
              });

              this.medicationsPage = updated.medicationsPage;
              this.moleculesPage = updated.moleculesPage;
              this.productsPage = updated.productsPage;

              return result;
            })
        ),
        takeUntil(this.destroy$)
      )
      .subscribe(resultPages => {
        if (resultPages) {
          this.pages = resultPages;
        }
      });
  }

  ngAfterViewChecked(): void {
    if (
      !this.observerInitialized &&
      this.medicationSearchDropdown &&
      this.scrollAnchor
    ) {
      this.initIntersectionObserver();
      this.observerInitialized = true;
    }

    // If medicationSearchDropdown is present and rect hasn't been set yet
    if (
      !this.medicationSearchDropdownRectInitialized &&
      this.medicationSearchDropdown
    ) {
      const rect =
        this.medicationSearchDropdown.nativeElement.getBoundingClientRect();
      this.tooltipContext.setDropdownRect(rect);
      this.medicationSearchDropdownRectInitialized = true;
    }
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();

    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  handleAddPrescription(med: MedicationType): void {
    // Call the parent callback
    this.onAddPrescription(med);

    // Clear the search input and reset all state
    this.searchQuery$.next('');
    this.onResetSearch();
  }

  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchQuery$.next(target.value);
    this.focusedMedicationIndex = 0;

    if (target.value === '') {
      this.onResetSearch();
    }
  }

  onResetSearch() {
    this.medications = undefined;
    this.molecules = undefined;
    this.products = undefined;

    this.medicationsPage = [];
    this.moleculesPage = [];
    this.productsPage = [];
    this.pages = [];

    this.focusedMedicationIndex = undefined;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    const pageCount = this.totalPagesLength;
    const viewCount = this.resultRefs.length;

    if (this.focusedMedicationIndex !== undefined) {
      if (event.key === 'ArrowDown') {
        this.focusedMedicationIndex =
          (this.focusedMedicationIndex + 1) % pageCount;
      } else if (event.key === 'ArrowUp') {
        this.focusedMedicationIndex =
          (this.focusedMedicationIndex - 1 + pageCount) % pageCount;
      } else if (event.key === 'Enter' && this.focusedMedicationIndex >= 0) {
        this.handleAddPrescription(this.pages[this.focusedMedicationIndex]);
      }

      if (viewCount > 0) {
        this.scrollToFocusedItem();
      } else {
        console.log(
          `Skipping scrollToFocusedItem(): no rendered items yet (viewCount: ${viewCount})`
        );
      }
    }
  }

  scrollToFocusedItem(): void {
    setTimeout(() => {
      const refs = this.resultRefs?.toArray();
      const index = this.focusedMedicationIndex;
      if (index !== undefined) {
        if (!refs || refs.length === 0) {
          console.warn(
            `scrollToFocusedItem: No refs available, skipping scroll`
          );
          return;
        }

        if (index < 0 || index >= refs.length) {
          console.warn(
            `scrollToFocusedItem: invalid index ${index}, total refs: ${refs.length}`
          );
          return;
        }

        refs[index].nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }, 0);
  }

  private initIntersectionObserver() {
    console.log('Initializing observer');

    this.intersectionObserver = new IntersectionObserver(
      async entries => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            console.log('Scroll anchor intersected, loading more...');

            const res = await this.loader.loadMore({
              medicationsPage: this.medicationsPage,
              moleculesPage: this.moleculesPage,
              productsPage: this.productsPage,
              medications: this.medications,
              molecules: this.molecules,
              products: this.products,
              deliveryEnvironment: this.deliveryEnvironment,
            });

            this.medicationsPage = [
              ...this.medicationsPage,
              ...res.updated.medicationsPage,
            ];
            this.moleculesPage = [
              ...this.moleculesPage,
              ...res.updated.moleculesPage,
            ];
            this.productsPage = [
              ...this.productsPage,
              ...res.updated.productsPage,
            ];
            this.pages = [...this.pages, ...res.result];
          }
        }
      },
      {
        root: this.medicationSearchDropdown.nativeElement,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    this.intersectionObserver.observe(this.scrollAnchor.nativeElement);
  }
}
