import { Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-pills-bottle-icn',
  imports: [],
  templateUrl: './pills-bottle-icn.component.html',
  styleUrl: './pills-bottle-icn.component.scss',
})
export class PillsBottleIcnComponent implements IconComponentBase {
  @Input() color: string = 'currentColor';
}
