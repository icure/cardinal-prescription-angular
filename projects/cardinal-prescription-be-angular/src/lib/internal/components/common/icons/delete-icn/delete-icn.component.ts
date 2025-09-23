import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-delete-icn',
  imports: [],
  templateUrl: './delete-icn.component.html',
  styleUrls: ['./delete-icn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class DeleteIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
