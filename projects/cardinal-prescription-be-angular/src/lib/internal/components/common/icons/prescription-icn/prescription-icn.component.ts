import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-prescription-icn',
  imports: [],
  templateUrl: './prescription-icn.component.html',
  styleUrls: ['./prescription-icn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PrescriptionIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
