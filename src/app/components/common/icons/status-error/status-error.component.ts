import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-status-error',
  imports: [],
  templateUrl: './status-error.component.html',
  styleUrl: './status-error.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatusErrorComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
