import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  standalone: true
})
export class TooltipDirective {
  div: HTMLDivElement = document.createElement('div');

  constructor(private el: ElementRef<HTMLElement>) {}
  @HostListener('mouseenter') onMouseEnter(): void {
    const text = this.el.nativeElement.innerHTML;

    this.div.innerHTML = `<span>${text}</span>`;
    this.div.style.position = 'absolute';
    this.div.style.borderBottom = '1px dotted black';
    this.div.style.backgroundColor = 'black';
    this.div.style.color = '#fff';
    this.div.style.textAlign = 'center';
    this.div.style.padding = '5px 0';
    this.div.style.borderRadius = '6px';
    this.div.style.zIndex = '1';
    this.div.style.width = '250px';
    this.div.style.whiteSpace = 'pre-line';

    this.el.nativeElement.appendChild(this.div);
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.el.nativeElement.removeChild(this.div);
  }
}
