import { Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-supply-icn',
  imports: [],
  templateUrl: './supply-icn.component.html',
  styleUrl: './supply-icn.component.scss',
})
export class SupplyIcnComponent implements IconComponentBase {
  @Input() color: string = 'currentColor';
}
