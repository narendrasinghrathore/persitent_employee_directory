/**
 * Material imports
 */
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
/**
 * NgModule import
 */
import { NgModule } from '@angular/core';


@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatIconModule,],
    exports: [MatButtonModule, MatToolbarModule, MatIconModule,]
})
export class MaterialThemeModule { }
