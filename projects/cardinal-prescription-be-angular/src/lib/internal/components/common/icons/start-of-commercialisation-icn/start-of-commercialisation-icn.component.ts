import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'cardinal-start-of-commercialisation-icn',
  imports: [],
  templateUrl: './start-of-commercialisation-icn.component.html',
  styleUrl: './start-of-commercialisation-icn.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class StartOfCommercialisationIcnComponent implements IconComponentBase {
  @Input({ required: true }) color: string = 'currentColor';
}
