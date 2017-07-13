import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
    
      <ul>
        <li *ngFor="let n of names" appUpper  appMycolor (colorChange)="changeColor($event)">{{n}}</li>
      </ul>
    <p> Last selected color:{{lastSelectedColor}}</p>
    <p [appMyvisibility]="false">This is to test the visibility of element</p>

      <p [appMyvisibility]="true">This is to test the visibility of element</p>
    
  `,
  styles: []
})
export class MyComponentComponent implements OnInit {
  public names:string[];
  public lastSelectedColor:string;
  changeColor(colorString)
  {
    this.lastSelectedColor=colorString;
  }

  constructor() {
    this.names=['Sulav','Sumit','Kshitij','Manoj','Rabin'];
  }

  ngOnInit() {

  }

}
