import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHttpService {

  dataFile = 'assets/data/data.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[] | any[] | any> {

    return this.http.get(this.dataFile).pipe(take(1));

  }
}
