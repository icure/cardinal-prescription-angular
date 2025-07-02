import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-edit-icn',
  imports: [],
  templateUrl: './edit-icn.component.html',
  styleUrl: './edit-icn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class EditIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
