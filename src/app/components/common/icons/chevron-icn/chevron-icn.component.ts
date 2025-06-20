import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-chevron-icn',
  imports: [],
  templateUrl: './chevron-icn.component.html',
  styleUrl: './chevron-icn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChevronIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
