import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-delete-icn',
  imports: [],
  templateUrl: './delete-icn.component.html',
  styleUrl: './delete-icn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
