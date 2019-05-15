import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudService {

  dataFile = 'assets/data/data.json';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Employee[] | any[] | any> {

    return this.http.get(this.dataFile);

  }
}
