import {
  Component,
  Input,
  forwardRef,
  EventEmitter,
  Output,
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
})
export class ToggleSwitchComponent implements ControlValueAccessor {
  @Input() id!: string;
  @Input() label?: string;
  @Input() value!: string;

  checked: boolean = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  // ControlValueAccessor required methods
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: boolean): void {
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  toggle() {
    this.checked = !this.checked;
    this.onChange(this.checked); // notify Reactive Form of change
    this.checkedChange.emit(this.checked);
    this.onTouched(); // mark as touched
  }
}
