import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPriorityBg]'
})
export class PriorityBgDirective {

  @Input() appPriorityBg: string;

  private classBase = 'tr-row';
  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appPriorityBg);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(type: string) {
    let color;
    let classSupp;

    switch (type) {
      case '1':
        color = 'green';
        classSupp = 'bg-success';
        break;
      case '2':
        color = 'orange';
        classSupp = 'bg-warning';
        break;
      case '3':
        color = 'red';
        classSupp = 'bg-danger';
        break;
      default:
        // color = null;
        // classSupp = false;
        break;
    }

    // this.el.nativeElement.style.backgroundColor = color;
    if (classSupp) {
      this.renderer.addClass(this.el.nativeElement, classSupp);
      this.renderer.addClass(this.el.nativeElement, 'text-light');
    } else {
      this.el.nativeElement.className = this.classBase;
    }

  }

}
