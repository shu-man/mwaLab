import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ComponentCounterValue: number;

  constructor() {
  }

  showCounterValue(value: number): void {
    this.ComponentCounterValue = value;
  }

}
