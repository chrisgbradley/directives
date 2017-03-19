import { Directive, ElementRef, Renderer, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @HostListener("mouseenter") mouseenter() {
    this.backgroundColor = "green";
  };

  @HostListener("mouseleave") mouseleave() {
    this.backgroundColor = "white";
  };
  @HostBinding("style.backgroundColor") get setColor() {
    return this.backgroundColor;
  };
  private backgroundColor = "white";

  constructor() { }




  //constructor(private elementRef: ElementRef, private renderer: Renderer) {
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  //}
}
