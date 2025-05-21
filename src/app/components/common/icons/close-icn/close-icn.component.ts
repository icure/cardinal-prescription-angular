import { Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-close-icn',
  imports: [],
  templateUrl: './close-icn.component.html',
  styleUrl: './close-icn.component.scss',
})
export class CloseIcnComponent implements IconComponentBase {
  @Input() color: string = 'currentColor';
}
