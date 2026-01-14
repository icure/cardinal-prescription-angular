import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import {
  Amp,
  Nmp,
  PaginatedListIterator,
  SamText,
  VmpGroup,
} from '@icure/cardinal-be-sam-sdk';

import { SearchIcnComponent } from '../../../internal/components/common/icons/search-icn/search-icn.component';
import { MedicationLoaderService } from '../../../internal/services/loaders/medication-loader.service';
import { MedicationCardComponent } from '../../../internal/components/medication-elements/medication-card/medication-card.component';
import { TooltipContextService } from '../../../internal/services/common/tooltip-context.service';

import { TranslationService } from '../../services/translation/translation.service';
import { SamSdkService } from '../../services/api/sam-sdk.service';
import { Med, MedicationProductType, MedicationType } from '../../types';
import { SpinnerComponent } from '../../../internal/components/common/spinner/spinner.component';
import { MedicinalProductType } from '@icure/be-fhc-lite-api';
import { MedicationProductTitleComponent } from '../../../internal/components/medication-elements/medication-product-title/medication-product-title.component';

@Component({
  selector: 'cardinal-medication-search',
  standalone: true,
  imports: [
    SearchIcnComponent,
    NgIf,
    MedicationCardComponent,
    MedicationProductTitleComponent,
    NgForOf,
    ReactiveFormsModule,
    SpinnerComponent,
  ],
  templateUrl: './medication-search.component.html',
  styleUrls: ['./medication-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MedicationSearchComponent
  implements OnInit, OnDestroy, AfterViewChecked
{
  @Input({ required: true }) deliveryEnvironment!: string;

  @Output() addPrescription = new EventEmitter<
    [MedicationType, MedicationType[]]
  >();

  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('scrollAnchor', { static: false }) scrollAnchor!: ElementRef;
  @ViewChildren('resultRef') resultRefs!: QueryList<ElementRef<HTMLElement>>;
  @ViewChild('medicationSearchDropdown', { static: false })
  medicationSearchDropdown!: ElementRef<HTMLDivElement>;

  constructor(
    private samSdkService: SamSdkService,
    private loader: MedicationLoaderService,
    private tooltipContext: TooltipContextService,
    private translationService: TranslationService,
    private cdr: ChangeDetectorRef
  ) {}

  t(key: string): string {
    return this.translationService.translate(key);
  }

  private intersectionObserver?: IntersectionObserver;
  private observerInitialized = false;
  private medicationSearchDropdownRectInitialized = false;
  private language: keyof SamText = 'fr';
  showSpinner = false;
  showNoMatchesPlaceholder = false;

  destroy$ = new Subject<void>();

  medications: PaginatedListIterator<Amp> | undefined;
  molecules: PaginatedListIterator<VmpGroup> | undefined;
  products: PaginatedListIterator<Nmp> | undefined;

  pages: MedOrProduct[] = [];

  medicationsPage: MedicationProductType[] = [];
  moleculesPage: MedicationType[] = [];
  productsPage: MedicationType[] = [];

  focusedMedicationIndex: number | undefined = undefined;
  focusedSubMedicationIndex: number | undefined = undefined;
  searchControl = new FormControl<string | null>('');

  private medMapper = (item: Med) => {
    return {
      medications: (item as MedicationProductType).medications ?? [
        item as MedicationType,
      ],
      product: (item as MedicationProductType).medications
        ? (item as MedicationProductType)
        : undefined,
    };
  };

  get totalPagesLength(): number {
    return this.pages.length;
  }

  get dropdownDisplayed(): boolean {
    return !!this.searchControl.value?.trim();
  }

  ngOnInit(): void {
    this.language = this.translationService.getCurrentLanguage();
    this.searchControl.valueChanges
      .pipe(debounceTime(100), takeUntil(this.destroy$))
      .subscribe(query => {
        const q = query?.trim() ?? '';
        this.showNoMatchesPlaceholder = false;

        if (q.length === 0) {
          this.onResetSearch();
          this.showSpinner = false;
          return;
        }

        if (q.length < 3) {
          this.showSpinner = false;
          return;
        }

        this.samSdkService
          .searchMedications(this.language, q)
          .then(async ([meds, mols, prods]) => {
            this.showSpinner = true;

            const latestQuery = this.searchControl.value?.trim();
            if (q !== latestQuery) return;

            this.medications = meds;
            this.molecules = mols;
            this.products = prods;

            this.medicationsPage = [];
            this.moleculesPage = [];
            this.productsPage = [];

            const { result, updated } = await this.loader.loadMore({
              untreatedLoadedMedicationProducts: this.medicationsPage,
              untreatedLoadedMolecules: this.moleculesPage,
              untreatedLoadNonMedicinals: this.productsPage,
              medicationProductsIterator: this.medications,
              moleculesIterator: this.molecules,
              nonMedicinalesIterator: this.products,
              deliveryEnvironment: this.deliveryEnvironment,
            });

            if (q !== this.searchControl.value?.trim()) return;

            this.showSpinner = false;
            this.medicationsPage = updated.medicationsPage;
            this.moleculesPage = updated.moleculesPage;
            this.productsPage = updated.productsPage;

            this.pages = result.map(this.medMapper);

            this.showNoMatchesPlaceholder = !result.length;

            this.focusedMedicationIndex = 0;
            this.focusedSubMedicationIndex = 0;

            this.cdr.markForCheck();
          });
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  async handleAddPrescription(med: MedicationType): Promise<void> {
    this.addPrescription.emit([
      {
        ...med,
        vmpGroup: med.vmp?.vmpGroup?.code
          ? await this.samSdkService.loadVmpGroup(med.vmp?.vmpGroup?.code)
          : undefined,
      },
      med.cheap || !med.vmp?.vmpGroup?.code
        ? []
        : await this.samSdkService
            .loadAlternativeMedications(med.vmp?.vmpGroup?.code)
            .then(ampPage =>
              this.loader.loadMedicationsPage(
                ampPage,
                10,
                this.deliveryEnvironment,
                [],
                mt => (mt.cheap || mt.cheapest ? mt : undefined)
              )
            ),
    ]);
    this.searchControl.setValue('');
    this.onResetSearch();
    this.cdr.markForCheck();
  }

  onResetSearch(): void {
    this.medications = undefined;
    this.molecules = undefined;
    this.products = undefined;
    this.medicationsPage = [];
    this.moleculesPage = [];
    this.productsPage = [];
    this.pages = [];
    this.focusedMedicationIndex = undefined;
    this.focusedSubMedicationIndex = undefined;
    this.cdr.markForCheck();
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    const pageCount = this.totalPagesLength;
    const viewCount = this.resultRefs.length;

    if (
      this.focusedMedicationIndex !== undefined &&
      this.focusedSubMedicationIndex != undefined
    ) {
      if (event.key === 'ArrowDown') {
        this.focusedSubMedicationIndex++;
        if (
          this.focusedSubMedicationIndex >=
          this.pages[this.focusedMedicationIndex]?.medications?.length!
        ) {
          this.focusedSubMedicationIndex = 0;
          this.focusedMedicationIndex =
            (this.focusedMedicationIndex + 1) % pageCount;
        }
      } else if (event.key === 'ArrowUp') {
        this.focusedSubMedicationIndex--;
        if (this.focusedSubMedicationIndex < 0) {
          this.focusedMedicationIndex =
            (this.focusedMedicationIndex - 1 + pageCount) % pageCount;
          this.focusedSubMedicationIndex =
            this.pages[this.focusedMedicationIndex]?.medications?.length! - 1;
        }
      } else if (
        event.key === 'Enter' &&
        this.focusedMedicationIndex >= 0 &&
        this.focusedSubMedicationIndex >= 0
      ) {
        this.handleAddPrescription(
          this.pages[this.focusedMedicationIndex]?.medications?.[
            this.focusedSubMedicationIndex ?? 0
          ]!
        );
      }

      if (viewCount > 0) {
        this.scrollToFocusedItem();
      }
    }

    this.cdr.markForCheck();
  }

  scrollToFocusedItem(): void {
    setTimeout(() => {
      const refs = this.resultRefs?.toArray();
      const index = this.focusedMedicationIndex;
      const subIndex = this.focusedSubMedicationIndex;
      if (index !== undefined && refs && refs[index]) {
        refs[index].nativeElement.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }
    }, 0);
    this.cdr.markForCheck();
  }

  private initIntersectionObserver(): void {
    this.intersectionObserver = new IntersectionObserver(
      async entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const res = await this.loader.loadMore({
              untreatedLoadedMedicationProducts: this.medicationsPage,
              untreatedLoadedMolecules: this.moleculesPage,
              untreatedLoadNonMedicinals: this.productsPage,
              medicationProductsIterator: this.medications,
              moleculesIterator: this.molecules,
              nonMedicinalesIterator: this.products,
              deliveryEnvironment: this.deliveryEnvironment,
            });

            this.medicationsPage = [...res.updated.medicationsPage];
            this.moleculesPage = [...res.updated.moleculesPage];
            this.productsPage = [...res.updated.productsPage];
            this.pages = [...this.pages, ...res.result.map(this.medMapper)];
            this.cdr.markForCheck();
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

  get showSearchError(): boolean {
    const value = this.searchControl.value?.trim();
    return !!value && value.length < 3;
  }
}

interface MedOrProduct {
  product?: MedicationProductType;
  medications?: MedicationType[];
}
