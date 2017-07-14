import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'HomeComponent',
  template: `
    <div class="jumbotron">
      <h1>Maharishi University of Management</h1>
      <p>Maharishi University of Management (MUM), formerly Maharishi International University, is an American non-profit university located in Fairfield, Iowa. It was founded in 1973 by Maharishi Mahesh Yogi and features a "consciousness-based education" system that includes the practice of the Transcendental Meditation technique.Its founding principles include the development of the full potential of the individual, fulfilling economic aspirations while maximizing proper use of the environment and bringing spiritual fulfillment and happiness to humanity.</p>
      
    </div>
  `,
  styles: []
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
