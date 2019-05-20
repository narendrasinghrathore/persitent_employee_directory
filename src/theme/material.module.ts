/**
 * Material imports
 */
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
/**
 * NgModule import
 */
import { NgModule } from '@angular/core';


@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatInputModule],
    exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule, MatInputModule]
})
export class MaterialThemeModule { }
