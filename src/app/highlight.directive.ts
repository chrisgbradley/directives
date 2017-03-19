import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  @HostListener("mouseenter") mouseenter() {
    this.backgroundColor = this.highlightColor;
  };
  @HostListener("mouseleave") mouseleave() {
    this.backgroundColor = this.defaultColor;
  };

  @HostBinding("style.backgroundColor") get setColor() {
    return this.backgroundColor;
  };

  @Input() defaultColor = "white";
  @Input() highlightColor = "green";
  private backgroundColor:string;

  constructor() { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }

//IMPORT ELEMENTREF AND RENDERER TO MAKE WORK

  //constructor(private elementRef: ElementRef, private renderer: Renderer) {
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');
  //}
}
