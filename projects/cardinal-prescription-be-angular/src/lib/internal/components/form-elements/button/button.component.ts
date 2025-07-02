import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { SpinnerIcnComponent } from '../../common/icons/spinner-icn/spinner-icn.component';

@Component({
  selector: 'cardinal-button',
  standalone: true,
  imports: [CommonModule, SpinnerIcnComponent],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() view?: 'primary' | 'withSpinner' | 'outlined' = 'primary';
  @Input() type?: 'button' | 'reset' | 'submit' = 'button';
  @Input() formId?: NgForm;
  @Input() disabled?: boolean = false;

  @Output() handleClick = new EventEmitter<void>();

  onClick(evt: MouseEvent) {
    this.formId?.onSubmit(evt);
    if (this.view !== 'withSpinner') {
      this.handleClick.emit();
    }
  }

  getSpinnerIcnColor(): string {
    if (this.disabled) {
      return '#B8B8B8';
    } else {
      return '#084B83';
    }
  }
}
