import { Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-start-of-commercialisation-icn',
  imports: [],
  templateUrl: './start-of-commercialisation-icn.component.html',
  styleUrl: './start-of-commercialisation-icn.component.scss',
})
export class StartOfCommercialisationIcnComponent implements IconComponentBase {
  @Input() color: string = 'currentColor';
}
