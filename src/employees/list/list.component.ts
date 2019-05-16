import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input()
  list: Employee[] = [];

  constructor() { }

  ngOnInit() { }

}
