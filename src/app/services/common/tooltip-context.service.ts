import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TooltipContextService {
  private dropdownRectSubject = new BehaviorSubject<DOMRect | null>(null);
  dropdownRect$ = this.dropdownRectSubject.asObservable();

  setDropdownRect(rect: DOMRect) {
    this.dropdownRectSubject.next(rect);
  }

  getDropdownRect(): DOMRect | null {
    return this.dropdownRectSubject.getValue();
  }
}
