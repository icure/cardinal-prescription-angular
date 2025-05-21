import {
  Component,
  Input,
  ViewChild,
  TemplateRef,
  ElementRef,
  OnInit,
} from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  imports: [NgIf, NgTemplateOutlet, NgClass],
})
export class TooltipComponent implements OnInit {
  @Input() content?: string;
  @Input() contentSnippet?: TemplateRef<any>;

  @Input() iconSnippet?: TemplateRef<any>;

  @Input() orientation?: 'tr' | 'tl' | 'bl' | 'br';
  @Input() containerWithHiddenOverflowRect?: DOMRect | undefined;

  active = false;
  tooltipOrientation: 'tr' | 'tl' | 'bl' | 'br' = this.orientation ?? 'bl';
  @ViewChild('tooltipRef')
  tooltipRef!: ElementRef<HTMLElement>;

  ngOnInit(): void {
    if (this.containerWithHiddenOverflowRect) {
      this.calculateTooltipPosition();

      console.log(this.containerWithHiddenOverflowRect);
    }
  }

  calculateTooltipPosition() {
    const tooltipRect = this.tooltipRef?.nativeElement?.getBoundingClientRect();

    if (!tooltipRect || !this.containerWithHiddenOverflowRect) return;

    // Calculate available space in the parent container
    const distanceToParentTop =
      tooltipRect.top - this.containerWithHiddenOverflowRect.top;
    const distanceToParentBottom =
      this.containerWithHiddenOverflowRect.bottom - tooltipRect.bottom;
    const distanceToParentLeft =
      tooltipRect.left - this.containerWithHiddenOverflowRect.left;
    const distanceToParentRight =
      this.containerWithHiddenOverflowRect.right - tooltipRect.right;

    // Determine the position of the tooltip based on available space
    if (distanceToParentBottom >= tooltipRect.height) {
      this.tooltipOrientation = 'bl';
    } else if (distanceToParentTop >= tooltipRect.height) {
      this.tooltipOrientation = 'tl';
    } else if (distanceToParentLeft >= tooltipRect.width) {
      this.tooltipOrientation = 'tr';
    } else if (distanceToParentRight >= tooltipRect.width) {
      this.tooltipOrientation = 'br';
    } else {
      this.tooltipOrientation = 'tl';
    }
  }

  handleMouseEnter() {
    this.active = true;
  }

  handleMouseLeave() {
    this.active = false;
  }
}
