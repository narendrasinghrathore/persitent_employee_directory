import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeCrudService } from '../services/employee-crud.service';
import { Employee } from '../../models/employee';
import { take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit, OnDestroy {

  title: string;
  header: string;
  employee: Employee;
  sortBy: string;

  subs: Subscription;

  constructor(private route: ActivatedRoute) {
    this.getEmployeeData(route);
  }

  getEmployeeData(route: ActivatedRoute) {
    this.subs = route.data
      .subscribe((data: { employee: Employee }) => {
        const emp = data.employee['data'];;
        this.employee = emp;
        this.title = `Employee ID: ${emp.id}`;
        this.header = `Employee Details of ${emp.firstname} ${emp.lastname}`;
      });

    const s2 = route.paramMap.pipe(take(1)).subscribe((data) => {
      this.sortBy = data.get('sortBy');
    });


    this.subs.add(s2);
  }

  getRoute() {
    let params: any = { id: this.employee.id };
    params = this.sortBy ? { sortBy: this.sortBy, ...params } : { ...params };
    return ['/employees', params];
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }



}
