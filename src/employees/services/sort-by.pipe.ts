import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../../models/employee';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(value: Employee[], args?: any): any {
    args = args ? args : null;
    return args ?(() => {
      const sortedArray = [...value];
      return sortedArray.sort((a, b) => a[args] - b[args]);
    })() : value;
  }

}
