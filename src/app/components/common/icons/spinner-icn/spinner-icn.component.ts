import { Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-spinner-icn',
  imports: [],
  templateUrl: './spinner-icn.component.html',
  styleUrl: './spinner-icn.component.scss',
})
export class SpinnerIcnComponent implements IconComponentBase {
  @Input() color: string = 'currentColor';
}
