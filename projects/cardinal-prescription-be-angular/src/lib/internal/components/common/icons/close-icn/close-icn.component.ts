import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-close-icn',
  imports: [],
  templateUrl: './close-icn.component.html',
  styleUrl: './close-icn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CloseIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
