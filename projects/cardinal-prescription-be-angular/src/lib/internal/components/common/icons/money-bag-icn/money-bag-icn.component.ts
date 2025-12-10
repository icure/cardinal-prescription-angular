import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-money-bag-icn',
  imports: [],
  templateUrl: './money-bag-icn.component.html',
  styleUrls: ['./money-bag-icn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MoneyBagIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
