import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-end-of-commercialisation-icn',
  imports: [],
  templateUrl: './end-of-commercialisation-icn.component.html',
  styleUrl: './end-of-commercialisation-icn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EndOfCommercialisationIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
