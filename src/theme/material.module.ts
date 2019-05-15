/**
 * Material imports
 */
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
/**
 * NgModule import
 */
import { NgModule } from '@angular/core';


@NgModule({
    imports: [MatButtonModule, MatToolbarModule,],
    exports: [MatButtonModule, MatToolbarModule,]
})
export class MaterialThemeModule { }
