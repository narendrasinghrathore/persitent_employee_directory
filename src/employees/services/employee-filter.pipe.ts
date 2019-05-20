import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../../models/employee';

@Pipe({
  name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

  transform(value: Employee[], filterBy?: string): any {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((emp: Employee) =>
      emp.firstname.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
  }

}
