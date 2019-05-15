import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/**
 * Materila theme
 */
import { MaterialThemeModule } from '../theme/material.module';
import { HomeComponent } from './home/home.component';
import { AppHomeRoutingModule } from './route/home.route';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    AppHomeRoutingModule,
    MaterialThemeModule
  ]
})
export class HomeModule { }
