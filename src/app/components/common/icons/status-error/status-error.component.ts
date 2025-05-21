import { Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-status-error',
  imports: [],
  templateUrl: './status-error.component.html',
  styleUrl: './status-error.component.scss',
})
export class StatusErrorComponent implements IconComponentBase {
  @Input() color: string = 'currentColor';
}
