import {
  Component,
  Input,
  forwardRef,
  Output,
  EventEmitter,
  OnInit,
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
})
export class SelectInputComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() id!: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() options: { value: string | null; label: string }[] = [];
  @Input() errorMessage?: string;

  @Output() valueChange = new EventEmitter<string | null>();

  value: string | null = '';

  onChangeFn: (_: any) => void = () => {};
  onTouchedFn: () => void = () => {};

  writeValue(value: any): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.value = target.value;
    this.onChangeFn(this.value);
    this.onTouchedFn();
    this.valueChange.emit(this.value);
  }
}
