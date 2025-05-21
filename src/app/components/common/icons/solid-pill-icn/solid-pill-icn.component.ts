import { Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-solid-pill-icn',
  imports: [],
  templateUrl: './solid-pill-icn.component.html',
  styleUrl: './solid-pill-icn.component.scss',
})
export class SolidPillIcnComponent implements IconComponentBase {
  @Input() color: string = 'currentColor';
}
