import { Component, OnInit, ChangeDetectionStrategy, Input, OnDestroy } from '@angular/core';

import { Employee } from '../../models/employee';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit, OnDestroy {

  @Input()
  list: Employee[] = [];

  filterByName: string;

  selected: number;

  sortby = null;

  isChecked: boolean;

  subs: Subscription;


  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subs = this.route.paramMap.subscribe(d => {
      this.selected = +d.get('id');
      this.sortby = d.get('sortBy') ? d.get('sortBy') : null;

      this.isChecked = this.sortby ? true : false;

    });
  }

  filterBy(event) {
    this.filterByName = event.target.value;
  }

  sortByProp(event) {
    this.sortby = event.checked === true ? 'id' : undefined;
  }

  getRouterLink(emp: Employee) {
    let params: any[] = ['/employees', emp.id];
    this.sortby ? params.push({ sortBy: this.sortby }) : null;
    return params;
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
