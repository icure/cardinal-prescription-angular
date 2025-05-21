import { Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-search-icn',
  imports: [],
  templateUrl: './search-icn.component.html',
  styleUrl: './search-icn.component.scss',
})
export class SearchIcnComponent implements IconComponentBase {
  @Input() color: string = 'currentColor';
}
