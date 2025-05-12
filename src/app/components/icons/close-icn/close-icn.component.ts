import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-close-icn',
  imports: [],
  templateUrl: './close-icn.component.html',
  styleUrl: './close-icn.component.scss',
})
export class CloseIcnComponent {
  @Input() color: string = 'currentColor';
}
