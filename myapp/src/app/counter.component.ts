import {Component, OnInit, Input, EventEmitter} from '@angular/core';


@Component({
  selector: 'counter-component',
  template: `
    <div id="counterComponent">
      <button (click)="decrement()">-</button>
      <span>{{counterValue}}</span>
      <button (click)="increment()">+</button>
    </div>
  `,
  styles: ['#counterComponent{background: burlywood;padding: 4px;text-align: center; border: 2px solid black}'],
  outputs:['counterChange']
})
export class CounterComponent implements OnInit {
  @Input("ComponentCounterValue") counterValue:number;
  counterChange:EventEmitter<number>;

  constructor() {
    this.counterChange=new EventEmitter();
  }

  increment() {

    this.counterValue += 1;
    this.counterChange.emit(this.counterValue);
  }

  decrement() {

    this.counterValue -= 1;
    this.counterChange.emit(this.counterValue);
  }

  ngOnInit() {
    this.counterChange.emit(this.counterValue);
  }

}
