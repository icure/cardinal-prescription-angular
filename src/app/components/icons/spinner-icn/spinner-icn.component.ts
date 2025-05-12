import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spinner-icn',
  imports: [],
  templateUrl: './spinner-icn.component.html',
  styleUrl: './spinner-icn.component.scss',
})
export class SpinnerIcnComponent {
  @Input() color: string = 'currentColor';
}
