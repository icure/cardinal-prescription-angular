import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  forwardRef,
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
  selector: 'app-textarea-input',
  templateUrl: './textarea-input.component.html',
  styleUrls: ['./textarea-input.component.scss'],
  standalone: true,
  imports: [NgClass, NgIf, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextareaInputComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextareaInputComponent
  implements ControlValueAccessor, AfterViewInit
{
  @Input({ required: true }) label!: string;
  @Input({ required: true }) id!: string;
  @Input() required? = false;
  @Input() disabled = false;
  @Input() errorMessage?: string;
  @Input() autofocus? = false;

  @ViewChild('textareaRef') textareaRef!: ElementRef<HTMLTextAreaElement>;

  constructor(private cdr: ChangeDetectorRef) {}

  value: string = '';
  onChange = (_: any) => {};
  onTouched = () => {};

  writeValue(value: string): void {
    this.value = value ?? '';
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

  ngAfterViewInit(): void {
    if (this.autofocus) {
      setTimeout(() => this.textareaRef.nativeElement.focus());
      this.cdr.markForCheck();
    }
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLTextAreaElement;
    this.value = target.value;
    this.onChange(this.value);
    this.onTouched();
    this.cdr.markForCheck();
  }
}
