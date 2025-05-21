import { Component, Input } from '@angular/core';
import { IconComponentBase } from '../../../../types';

@Component({
  selector: 'app-edit-icn',
  imports: [],
  templateUrl: './edit-icn.component.html',
  styleUrl: './edit-icn.component.scss',
})
export class EditIcnComponent implements IconComponentBase {
  @Input() color: string = 'currentColor';
}
