import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-solid-pill-icn',
  imports: [],
  templateUrl: './solid-pill-icn.component.html',
  styleUrls: ['./solid-pill-icn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SolidPillIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
