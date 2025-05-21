import { Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-molecule-icn',
  imports: [],
  templateUrl: './molecule-icn.component.html',
  styleUrl: './molecule-icn.component.scss',
})
export class MoleculeIcnComponent implements IconComponentBase {
  @Input() color: string = 'currentColor';
}
