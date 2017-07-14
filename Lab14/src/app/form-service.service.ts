import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class FormServiceService {

  constructor(public http: Http) {
  }

  getUsers() {
    return this.http.get('http://jsonplaceholder.typicode.com/users/1').map(resp=>resp.json());
  }

  getPost() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts?userId=1').map(resp=>resp.json());
  }
}
