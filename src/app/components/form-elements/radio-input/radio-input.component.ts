import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { NgClass, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-radio-input',
  standalone: true,
  imports: [FormsModule, NgIf, NgForOf, NgClass],
  templateUrl: './radio-input.component.html',
  styleUrl: './radio-input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioInputComponent),
      multi: true,
    },
  ],
})
export class RadioInputComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() name!: string;
  @Input() required: boolean = false;
  @Input() errorMessage?: string;
  @Input() options: {
    label: string;
    value: boolean;
    id: string;
  }[] = [];

  value!: boolean;

  private onChange = (value: any) => {};
  private onTouched = () => {};

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onSelectionChange(val: boolean) {
    this.value = val;
    this.onChange(val);
    this.onTouched();
  }
}
