import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-chevron-icn',
  imports: [],
  templateUrl: './chevron-icn.component.html',
  styleUrls: ['./chevron-icn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ChevronIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
