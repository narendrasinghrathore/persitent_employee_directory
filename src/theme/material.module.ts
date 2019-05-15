/**
 * Material imports
 */
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
/**
 * NgModule import
 */
import { NgModule } from '@angular/core';


@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatListModule],
    exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatListModule]
})
export class MaterialThemeModule { }
