import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-status-error',
  imports: [],
  templateUrl: './status-error.component.html',
  styleUrls: ['./status-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class StatusErrorComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
