import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Employee } from '../../models/employee';
import { ActivatedRoute } from '@angular/router';
import { fromEvent } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input()
  list: Employee[] = [];

  filterByName: string;

  selected: number;

  sortby = null;

  isChecked: boolean;



  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(d => {
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

}
