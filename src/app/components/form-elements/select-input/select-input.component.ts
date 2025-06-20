import {
  Component,
  Input,
  forwardRef,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-select-input',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectInputComponent implements ControlValueAccessor {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) id!: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input({ required: true }) options: {
    value: string | null;
    label: string;
  }[] = [];
  @Input() errorMessage?: string;

  @Output() valueChange = new EventEmitter<string | null>();

  value: string | null = '';

  constructor(private cdr: ChangeDetectorRef) {}

  onChangeFn: (_: any) => void = () => {};
  onTouchedFn: () => void = () => {};

  writeValue(value: any): void {
    this.value = value;
    this.cdr.markForCheck(); // triggers a re-render
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck(); // ensure view reflects disabled state
  }

  trackByOptionValue(
    _: number,
    option: { value: string | null; label: string }
  ) {
    return option.value;
  }

  onChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
    this.onChangeFn(this.value);
    this.onTouchedFn();
    this.valueChange.emit(this.value);
    this.cdr.markForCheck(); // triggers a re-render
  }
}
