import { Component, OnInit } from '@angular/core';
import { EmployeeCrudService } from '../services/employee-crud.service';
import { Employee } from '../../models/employee';
import { ActivatedRoute } from '@angular/router';
import { take, tap } from 'rxjs/operators';


@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  employee: Employee;
  header: string;

  previousUrl: string;

  constructor(private route: ActivatedRoute) {
    this.getEmployeeData(route);
  }

  getEmployeeData(route: ActivatedRoute) {
    route.data
      .subscribe((data: { employee: Employee }) => {
        const emp = data.employee['data'];
        this.previousUrl = data.employee['url'];
        this.employee = emp;
        this.header = `Resume of ${this.employee.firstname} ${this.employee.lastname}`;
      });
  }

  ngOnInit() { }

}
