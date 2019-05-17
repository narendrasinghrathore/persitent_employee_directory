import { Injectable } from '@angular/core';
import { EmployeeHttpService } from './employee-http.service';
import { tap, take, map } from 'rxjs/operators';
import { Store } from 'store';
import { AppStoreEnum } from '../../models/app.enum';
import { Employee } from '../../models/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {

  _selectedEmployee: Employee;

  get selectedEmployee() {
    return this._selectedEmployee;
  }

  set selectedEmployee(val: Employee) {
    if (val) {
      this._selectedEmployee = val;
    } else {
      this._selectedEmployee = null;
    }
  }



  constructor(private http: EmployeeHttpService, private store: Store) { }

  /**
   * Get data and store list in our app state
   */
  getAll(): void {
    this.http.getAll().pipe(tap(
      data => {
        this.store.set(AppStoreEnum.employees, data);
      }
    )).subscribe();
  }

  getEmployeeById(id: number) {
    return this.store.select<Employee[]>(AppStoreEnum.employees).pipe(
      take(1),
      map(val => val ? val.filter(v => v.id === id)[0] : null),
      tap(data => {
        this.selectedEmployee = data;
      }),
    );
  }


}
