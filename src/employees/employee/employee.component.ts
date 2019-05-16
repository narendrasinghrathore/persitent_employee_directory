import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { EmployeeCrudService } from '../services/employee-crud.service';
import { Employee } from 'src/models/employee';

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

  constructor(private route: ActivatedRoute, private service: EmployeeCrudService) {
    route.paramMap.pipe(take(1)).subscribe(data => {
      const id = +data.get('id');
      this.title = `Employee ID: ${id}`;
      this.service.getEmployeeById(id).subscribe(e => {
        this.employee = e;
        if (this.employee !== null) {
          this.header = `Employee Details of ${this.employee.firstname} ${this.employee.lastname}`;
        }
      });
    });
  }

  ngOnInit() {

  }

}
