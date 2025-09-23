import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-molecule-icn',
  imports: [],
  templateUrl: './molecule-icn.component.html',
  styleUrls: ['./molecule-icn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class MoleculeIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
