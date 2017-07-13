import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, OnInit, Renderer, style} from '@angular/core';

@Directive({
  selector: '[appMycolor]',
  outputs: ['colorChange']
})
export class MycolorDirective implements OnInit {

@HostBinding('style.color')mycolor;
  @HostListener('click')changeColor() {
    this.randomColor = this.color[Math.floor(Math.random() * (this.color.length))];
    this.mycolor=this.randomColor;
    this.colorChange.emit(this.mycolor);
    //this.renderer.setElementStyle(this.element.nativeElement, 'color', this.randomColor);
  }

  public color: string[] = ["red", "green", "blue", "grey"];
  public randomColor: string;
  colorChange: EventEmitter<string>;

  constructor(private element: ElementRef, private renderer: Renderer) {
    this.colorChange = new EventEmitter();

  }

  ngOnInit() {
  }


}
