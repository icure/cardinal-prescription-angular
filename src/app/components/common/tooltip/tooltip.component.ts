import {
  Component,
  Input,
  ViewChild,
  TemplateRef,
  ElementRef,
  OnInit,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { TooltipContextService } from '../../../services/common/tooltip-context.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  imports: [NgIf, NgTemplateOutlet, NgClass],
})
export class TooltipComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() content?: string;
  @Input() contentSnippet?: TemplateRef<any>;
  @Input() iconSnippet?: TemplateRef<any>;
  @Input() orientation?: 'tr' | 'tl' | 'bl' | 'br';

  @ViewChild('tooltipRef') tooltipRef!: ElementRef<HTMLElement>;

  constructor(private tooltipContext: TooltipContextService) {}

  active = false;
  tooltipOrientation: 'tr' | 'tl' | 'bl' | 'br' = this.orientation ?? 'bl';

  private rectSub?: Subscription;
  private hasViewInitialized = false;
  private latestRect: DOMRect | null = null;

  ngOnInit() {
    // Subscribe to reactive rect updates
    this.rectSub = this.tooltipContext.dropdownRect$.subscribe(rect => {
      this.latestRect = rect;
      if (rect && this.hasViewInitialized) {
        this.repositionTooltip(rect);
      }
    });
  }

  ngAfterViewInit() {
    this.hasViewInitialized = true;

    // Tooltip view now ready — safe to reposition if we already got the rect
    if (this.latestRect) {
      this.repositionTooltip(this.latestRect);
    }
  }

  repositionTooltip(rect: DOMRect) {
    const tooltipElement = this.tooltipRef?.nativeElement;
    if (!tooltipElement || !rect) return;

    const tooltipRect = this.tooltipRef?.nativeElement?.getBoundingClientRect();
    const widthOfTooltipPopUp = 300;

    // By default, we don't set up top origination, bcs it's not unfriendly
    if (rect.right - tooltipRect.right > widthOfTooltipPopUp) {
      this.tooltipOrientation = 'bl';
    } else if (
      rect.right - tooltipRect.right < widthOfTooltipPopUp ||
      rect.right - tooltipRect.right === widthOfTooltipPopUp
    ) {
      this.tooltipOrientation = 'br';
    }
  }

  ngOnDestroy() {
    this.rectSub?.unsubscribe();
  }

  handleMouseEnter() {
    this.active = true;
  }

  handleMouseLeave() {
    this.active = false;
  }
}
