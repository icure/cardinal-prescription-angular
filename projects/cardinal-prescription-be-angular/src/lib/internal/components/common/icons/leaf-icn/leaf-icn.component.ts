import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-leaf-icn',
  imports: [],
  templateUrl: './leaf-icn.component.html',
  styleUrls: ['./leaf-icn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class LeafIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
