import { Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-triangle-icn',
  imports: [],
  templateUrl: './triangle-icn.component.html',
  styleUrl: './triangle-icn.component.scss',
})
export class TriangleIcnComponent implements IconComponentBase {
  @Input() color: string = 'currentColor';
}
