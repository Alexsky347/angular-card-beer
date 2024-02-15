import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appEllipsis]',
  standalone: true
})
export class EllipsisDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.textOverflow = 'ellipsis';
    this.el.nativeElement.style.overflow = 'hidden';
    this.el.nativeElement.style.whiteSpace = 'nowrap';
  }
}
