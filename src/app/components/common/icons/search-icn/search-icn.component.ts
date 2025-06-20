import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-search-icn',
  imports: [],
  templateUrl: './search-icn.component.html',
  styleUrl: './search-icn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
