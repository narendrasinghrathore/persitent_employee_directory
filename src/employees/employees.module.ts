import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialThemeModule } from '../theme/material.module';
import { SharedModule } from '../shared/shared.module';

/**
 * Theme import
 */


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ]),
    MaterialThemeModule,
    SharedModule
  ]
})
export class EmployeesModule { }
