import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-supply-icn',
  imports: [],
  templateUrl: './supply-icn.component.html',
  styleUrls: ['./supply-icn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SupplyIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
