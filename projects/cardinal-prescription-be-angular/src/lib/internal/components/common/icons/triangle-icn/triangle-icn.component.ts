import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-triangle-icn',
  imports: [],
  templateUrl: './triangle-icn.component.html',
  styleUrls: ['./triangle-icn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class TriangleIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
