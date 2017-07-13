import {Directive, ElementRef, Input, OnInit, Renderer} from '@angular/core';

@Directive({
  selector: '[appMyvisibility]'
})
export class MyvisibilityDirective implements OnInit{

  @Input() appMyvisibility:boolean;
  constructor(private element: ElementRef, private renderer: Renderer) {

  }

  ngOnInit() {
    console.log(this.appMyvisibility);
    let value=(this.appMyvisibility)?'visible':'hidden';
    this.renderer.setElementStyle(this.element.nativeElement,'visibility',value);
  }

}
