import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialThemeModule } from '../theme/material.module';
import { SharedModule } from '../shared/shared.module';
import { EmployeeCrudService } from './services/employee-crud.service';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeHttpService } from './services/employee-http.service';

/**
 * Theme import
 */


@NgModule({
  declarations: [HomeComponent, ListComponent, EmployeeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '', component: HomeComponent, pathMatch: 'full',
      },
      { path: ':id', component: EmployeeComponent, pathMatch: 'full', }
    ]),
    MaterialThemeModule,
    SharedModule
  ],
  providers: [EmployeeCrudService, EmployeeHttpService]
})
export class EmployeesModule { }
