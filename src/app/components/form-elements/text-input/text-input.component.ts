import {
  Component,
  Input,
  forwardRef,
  ElementRef,
  ViewChild,
  AfterViewInit,
  Output,
  EventEmitter,
  Self,
  Optional,
} from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  Validators,
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
})
export class TextInputComponent implements ControlValueAccessor, AfterViewInit {
  @Input() label!: string;
  @Input() id!: string;
  @Input() required = false;
  @Input() autofocus = false;
  @Input() disabled = false;
  @Input() type: 'text' | 'number' | 'date' | 'password' | 'file' = 'text';
  @Input() min?: number;
  @Input() max?: number;
  @Input() accept?: string;
  @Input() errorMessage?: string;

  @ViewChild('inputRef') inputRef!: ElementRef<HTMLInputElement>;

  value: string | number | Date | null = '';

  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngAfterViewInit() {
    if (this.autofocus) {
      setTimeout(() => this.inputRef.nativeElement.focus());
    }
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.value = target.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
