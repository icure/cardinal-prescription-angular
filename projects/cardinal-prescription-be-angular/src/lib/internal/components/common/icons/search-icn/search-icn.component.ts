import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-search-icn',
  imports: [],
  templateUrl: './search-icn.component.html',
  styleUrls: ['./search-icn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class SearchIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
