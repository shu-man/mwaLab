import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  template: `
    <p>
      my-component Works!
    </p>
  `,
  styles: ['p{color:green}']
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
