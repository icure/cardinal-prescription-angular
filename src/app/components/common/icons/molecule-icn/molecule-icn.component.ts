import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-molecule-icn',
  imports: [],
  templateUrl: './molecule-icn.component.html',
  styleUrl: './molecule-icn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoleculeIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
