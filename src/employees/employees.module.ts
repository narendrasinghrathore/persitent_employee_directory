import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialThemeModule } from '../theme/material.module';
import { SharedModule } from '../shared/shared.module';
import { EmployeeCrudService } from './services/employee-crud.service';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './list/list.component';

/**
 * Theme import
 */


@NgModule({
  declarations: [HomeComponent, ListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ]),
    MaterialThemeModule,
    SharedModule
  ],
  providers: [EmployeeCrudService]
})
export class EmployeesModule { }
