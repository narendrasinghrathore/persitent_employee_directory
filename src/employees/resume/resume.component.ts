import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeCrudService } from '../services/employee-crud.service';
import { Employee } from '../../models/employee';
import { ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit, OnDestroy {

  employee: Employee;
  header: string;

  previousUrl: string;

  fullname: string;

  sortBy: string;

  subs: Subscription;

  constructor(private route: ActivatedRoute) {
    this.getEmployeeData(route);
  }

  getEmployeeData(route: ActivatedRoute) {
    this.subs = route.data
      .subscribe((data: { employee: Employee }) => {
        const emp = data.employee['data'];
        this.previousUrl = data.employee['url'];
        this.employee = emp;
        this.fullname = `${this.employee.firstname} ${this.employee.lastname}`
        this.header = `Resume of ${this.fullname}`;
      });


    const s2 = route.paramMap.pipe(take(1)).subscribe((data) => {
      this.sortBy = data.get('sortBy');
    });

    this.subs.add(s2);
  }

  ngOnInit() { }




  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  getRoute() {
    let params: any = ['/employees', this.employee.id];
    this.sortBy ? params.push({ sortBy: this.sortBy }) : null;
    return params;
  }

}
