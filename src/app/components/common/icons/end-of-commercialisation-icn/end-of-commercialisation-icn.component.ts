import { Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-end-of-commercialisation-icn',
  imports: [],
  templateUrl: './end-of-commercialisation-icn.component.html',
  styleUrl: './end-of-commercialisation-icn.component.scss',
})
export class EndOfCommercialisationIcnComponent implements IconComponentBase {
  @Input() color: string = 'currentColor';
}
