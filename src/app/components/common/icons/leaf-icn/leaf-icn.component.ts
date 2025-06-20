import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-leaf-icn',
  imports: [],
  templateUrl: './leaf-icn.component.html',
  styleUrl: './leaf-icn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeafIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
