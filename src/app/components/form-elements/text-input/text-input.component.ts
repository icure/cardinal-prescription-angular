import {
  Component,
  Input,
  forwardRef,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextInputComponent),
      multi: true,
    },
  ],
  standalone: true,
  imports: [NgClass, NgIf, FormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextInputComponent implements ControlValueAccessor, AfterViewInit {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) id!: string;
  @Input() type?: 'text' | 'number' | 'date' | 'password' | 'file' = 'text';
  @Input() required? = false;
  @Input() autofocus? = false;
  @Input() disabled = false;
  @Input() min?: number;
  @Input() max?: number;
  @Input() accept?: string;
  @Input() errorMessage?: string;

  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;

  value: string | number | Date | null = '';

  constructor(private cdr: ChangeDetectorRef) {}

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
    this.cdr.markForCheck();
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck(); // ensures view reflects disabled state
  }

  ngAfterViewInit() {
    if (this.autofocus) {
      setTimeout(() => this.inputRef.nativeElement.focus());
      this.cdr.markForCheck(); // triggers a re-render
    }
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.onTouched();
    this.cdr.markForCheck();
  }
}
