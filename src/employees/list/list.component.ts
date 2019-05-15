import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { EmployeeCrudService } from '../services/employee-crud.service';

import { take } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  constructor(private service: EmployeeCrudService) { }

  ngOnInit() {
    this.service.getAll().pipe(take(1)).subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
