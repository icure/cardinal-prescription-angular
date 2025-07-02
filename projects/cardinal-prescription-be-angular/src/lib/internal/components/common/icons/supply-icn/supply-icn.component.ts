import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-supply-icn',
  imports: [],
  templateUrl: './supply-icn.component.html',
  styleUrl: './supply-icn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SupplyIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
