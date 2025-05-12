import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  forwardRef,
  AfterViewInit,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-textarea-input',
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.scss'],
  standalone: true,
  imports: [NgClass, NgIf],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaInputComponent),
      multi: true,
    },
  ],
})
export class TextareaInputComponent
  implements ControlValueAccessor, AfterViewInit
{
  @Input() label!: string;
  @Input() id!: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() errorMessage?: string;
  @Input() autofocus = false;

  @ViewChild('textareaRef') textareaRef!: ElementRef<HTMLTextAreaElement>;

  value: string = '';
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value ?? '';
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

  ngAfterViewInit(): void {
    if (this.autofocus) {
      setTimeout(() => this.textareaRef.nativeElement.focus());
    }
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
