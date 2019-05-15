import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', loadChildren: '../home/home.module#HomeModule' },
  { path: 'employees', loadChildren: '../employees/employees.module#EmplooyesModule' },
  { path: '**', loadChildren: '../page-not-found/pagenotfound.module#PageNotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
