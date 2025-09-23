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
import { MedicationType } from '../../types';

@Component({
  selector: 'cardinal-medication-search',
  standalone: true,
  imports: [
    SearchIcnComponent,
    NgIf,
    MedicationCardComponent,
    NgForOf,
    ReactiveFormsModule,
  ],
  templateUrl: './medication-search.component.html',
  styleUrls: ['./medication-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MedicationSearchComponent
  implements OnInit, OnDestroy, AfterViewChecked
{
  @Input({ required: true }) deliveryEnvironment!: string;

  @Output() addPrescription = new EventEmitter<MedicationType>();

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

  destroy$ = new Subject<void>();

  medications: PaginatedListIterator<Amp> | undefined;
  molecules: PaginatedListIterator<VmpGroup> | undefined;
  products: PaginatedListIterator<Nmp> | undefined;

  pages: MedicationType[] = [];
  medicationsPage: MedicationType[] = [];
  moleculesPage: MedicationType[] = [];
  productsPage: MedicationType[] = [];

  focusedMedicationIndex: number | undefined = undefined;
  searchControl: FormControl<string | null> = new FormControl('');

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

        if (q.length === 0) {
          this.onResetSearch();
          return;
        }

        if (q.length < 3) return;

        this.samSdkService
          .searchMedications(this.language, q)
          .then(async ([meds, mols, prods]) => {
            const latestQuery = this.searchControl.value?.trim();
            if (q !== latestQuery) return;

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

            if (q !== this.searchControl.value?.trim()) return;

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
            this.pages = result;

            this.focusedMedicationIndex = 0;

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

  handleAddPrescription(med: MedicationType): void {
    this.addPrescription.emit(med);
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
    this.cdr.markForCheck();
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
      }
    }

    this.cdr.markForCheck();
  }

  scrollToFocusedItem(): void {
    setTimeout(() => {
      const refs = this.resultRefs?.toArray();
      const index = this.focusedMedicationIndex;
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
        for (let entry of entries) {
          if (entry.isIntersecting) {
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
