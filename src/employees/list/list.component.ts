import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Employee } from '../../models/employee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input()
  list: Employee[] = [];

  selected: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(d => {
     this.selected = +d.get('id');
    });
  }

}
