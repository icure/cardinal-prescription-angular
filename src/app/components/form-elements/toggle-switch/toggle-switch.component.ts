import {
  Component,
  Input,
  forwardRef,
  EventEmitter,
  Output,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrls: ['./toggle-switch.component.scss'],
  standalone: true,
  imports: [CommonModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleSwitchComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleSwitchComponent implements ControlValueAccessor {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) value!: string;
  @Input() label?: string;

  @Output() checkedChange = new EventEmitter<boolean>();

  checked: boolean = false;
  disabled: boolean = false;

  constructor(private cdr: ChangeDetectorRef) {}

  // ControlValueAccessor required methods
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: boolean): void {
    this.checked = value;
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
    this.cdr.markForCheck();
  }

  toggle() {
    this.checked = !this.checked;
    this.onChange(this.checked); // notify Reactive Form of change
    this.checkedChange.emit(this.checked);
    this.onTouched(); // mark as touched
    this.cdr.markForCheck();
  }
}
