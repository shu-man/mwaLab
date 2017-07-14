import {Component, OnInit} from '@angular/core';
import {DbService} from "./db.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  template: `
    <h1>Profile:</h1>
    <div>
      <table>
        <tr><label>Name :{{data.name}}</label></tr>
        <tr><label>Student ID :{{data.stuId}}</label></tr>
        <tr><label>Email :{{data.email}}</label></tr>
      </table>

    </div>
  `,
  styles: []
})
export class ProfileComponent implements OnInit {
  public data:object;
  public studentId: string;

  constructor(private db: DbService, private route: ActivatedRoute) {
    route.params.subscribe(prms => {
      this.studentId = prms['id']
    });
    this.data = db.getStudentDetails(this.studentId);

  }

  ngOnInit() {
  }

}
