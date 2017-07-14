import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {DbService} from "./db.service";

@Injectable()
export class MyGuardGuard implements CanActivate {
  private studentId: string;

  constructor(private r: Router, private dbService: DbService, private activatedRoute: ActivatedRoute) {

  }

  canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.studentId = next.params['id'];

    let studentResult: Object = this.dbService.getStudentDetails(this.studentId);
    if (!studentResult) {
      this.r.navigate(['error']);
      return false;
    }
    else {
      return true;
    }

  }
}

