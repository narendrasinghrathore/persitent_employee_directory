import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Employee } from '../../models/employee';
import { EmployeeCrudService } from './employee-crud.service';
import { Observable, of, EMPTY } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EmployeeResolverService implements Resolve<Employee>  {

  constructor(private cs: EmployeeCrudService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Employee> | any {

    const id = +route.paramMap.get('id');

    return this.cs.getEmployeeById(id).pipe(
      mergeMap(e => {
        if (e) {
          return of({ data: e, url: `/employees/${id}` });
        } else {
          this.router.navigate(['/employees']);
          return EMPTY;
        }
      }));
  }
}
