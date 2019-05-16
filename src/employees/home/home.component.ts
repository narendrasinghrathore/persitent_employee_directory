import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { EmployeeCrudService } from '../services/employee-crud.service';

import { take } from 'rxjs/operators';
import { Employee } from 'src/models/employee';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-employee-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit {

  title = 'Employee List';

  $employeeList: BehaviorSubject<Employee[]> = new BehaviorSubject([]);

  constructor(private service: EmployeeCrudService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.service.getAll().pipe(take(1)).subscribe(
      data => {
        this.$employeeList.next(data);
      }
    );
  }
}
