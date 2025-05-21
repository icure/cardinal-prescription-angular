import { Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-status-success',
  imports: [],
  templateUrl: './status-success.component.html',
  styleUrl: './status-success.component.scss',
})
export class StatusSuccessComponent implements IconComponentBase {
  @Input() color: string = 'currentColor';
}
