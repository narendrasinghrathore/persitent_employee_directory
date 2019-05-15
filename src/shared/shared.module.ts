import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialThemeModule } from 'src/theme/material.module';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppToolbarComponent],
  imports: [
    CommonModule,
    MaterialThemeModule,
    RouterModule
  ],
  exports: [AppToolbarComponent,]
})
export class SharedModule { }
