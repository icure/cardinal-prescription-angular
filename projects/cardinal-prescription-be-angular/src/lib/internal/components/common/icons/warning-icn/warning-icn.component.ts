import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-warning-icn',
  imports: [],
  templateUrl: './warning-icn.component.html',
  styleUrl: './warning-icn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class WarningIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
