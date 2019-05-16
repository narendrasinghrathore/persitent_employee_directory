import { Component, OnInit, ChangeDetectionStrategy, AfterViewInit, OnDestroy } from '@angular/core';
import { EmployeeCrudService } from '../services/employee-crud.service';

import { Employee } from 'src/models/employee';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Store } from 'store';
import { AppStoreEnum } from '../../models/app.enum';

@Component({
  selector: 'app-employee-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  title = 'Employee List';

  subs: Subscription;

  $employeeList: BehaviorSubject<Employee[]> = new BehaviorSubject([]);

  constructor(private service: EmployeeCrudService, private store: Store) { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.service.getAll();
    this.subs = this.store.select(AppStoreEnum.employees).subscribe((data: Employee[]) => {
      this.$employeeList.next(data);
    });
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
