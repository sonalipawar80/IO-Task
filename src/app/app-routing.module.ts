import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path:'',
    component:AppComponent
  },
  {
    path:'io-task',
    loadChildren:()=>import('./io-task/io-task.module').then(m=>m.IOTaskModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
