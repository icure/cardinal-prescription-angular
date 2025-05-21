import { Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-prescription-icn',
  imports: [],
  templateUrl: './prescription-icn.component.html',
  styleUrl: './prescription-icn.component.scss',
})
export class PrescriptionIcnComponent implements IconComponentBase {
  @Input() color: string = 'currentColor';
}
