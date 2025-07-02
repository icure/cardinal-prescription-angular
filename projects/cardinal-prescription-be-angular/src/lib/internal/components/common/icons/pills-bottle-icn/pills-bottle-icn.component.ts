import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-pills-bottle-icn',
  imports: [],
  templateUrl: './pills-bottle-icn.component.html',
  styleUrl: './pills-bottle-icn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PillsBottleIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
