/**
 * Material imports
 */
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
/**
 * NgModule import
 */
import { NgModule } from '@angular/core';


@NgModule({
    imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule],
    exports: [MatButtonModule, MatToolbarModule, MatIconModule, MatListModule, MatTabsModule]
})
export class MaterialThemeModule { }
