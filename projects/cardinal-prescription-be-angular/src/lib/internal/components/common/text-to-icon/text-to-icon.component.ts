import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

export type TextToIconColor = 'green' | 'orange' | 'red' | 'gray';

@Component({
  selector: 'cardinal-text-to-icon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './text-to-icon.component.html',
  styleUrls: ['./text-to-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextToIconComponent {
  @Input({ required: true }) text!: string;
  @Input() color: TextToIconColor = 'green';
}
