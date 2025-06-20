import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-supply-icn',
  imports: [],
  templateUrl: './supply-icn.component.html',
  styleUrl: './supply-icn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupplyIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
