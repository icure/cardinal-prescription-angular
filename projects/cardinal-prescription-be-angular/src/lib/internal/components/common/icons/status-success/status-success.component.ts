import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-status-success',
  imports: [],
  templateUrl: './status-success.component.html',
  styleUrl: './status-success.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class StatusSuccessComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
