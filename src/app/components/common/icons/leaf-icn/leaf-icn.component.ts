import { Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-leaf-icn',
  imports: [],
  templateUrl: './leaf-icn.component.html',
  styleUrl: './leaf-icn.component.scss',
})
export class LeafIcnComponent implements IconComponentBase {
  @Input() color: string = 'currentColor';
}
