import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeCrudService } from '../services/employee-crud.service';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeComponent implements OnInit {

  title: string;
  header: string;
  employee: Employee;

  constructor(private route: ActivatedRoute) {
    this.getEmployeeData(route);
  }

  getEmployeeData(route: ActivatedRoute) {
    route.data
      .subscribe((data: { employee: Employee }) => {
        const emp = data.employee['data'];;
        this.employee = emp;
        this.title = `Employee ID: ${emp.id}`;
        this.header = `Employee Details of ${emp.firstname} ${emp.lastname}`;
      });
  }

  ngOnInit() {

  }

}
