import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-error',
  template: `
    <p>
      Sorry the student detail with the Id is not available!!!
    </p>
  `,
  styles: []
})
export class ErrorComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
