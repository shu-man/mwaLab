import {Component, OnInit} from '@angular/core';
import {DbService} from "./db.service";

@Component({
  selector: 'StudentsComponent',
  template: `
    <ul>
      <li *ngFor="let listItems of data"><a [routerLink]="['','profile',listItems.id]">{{listItems.name}}</a></li>
    
    </ul>

    <!--<ul class="nav nav-pills">
      <li *ngFor="let listItems of data"><a [RouterLink]="['','profile',listItems.id]">{{listItems.name}}</a></li>
    </ul>
-->  `,
  styles: []
})
export class StudentsComponentComponent implements OnInit {
  public data;
  constructor(private dbService: DbService) {
     this.data= this.dbService.getData();
     console.log(this.data.name);
  }

  ngOnInit() {
  }

}
