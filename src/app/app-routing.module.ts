import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:AppDashboardComponent
  },
  {
    path:'io-task',
    loadChildren:()=>import('./io-task/io-task.module').then(m=>m.IOTaskModule)
  },{
    path:'ser-task',
    loadChildren:()=> import('./service-task/service-task.module').then(m=>m.ServiceTaskModule)
  },{
    path:'passenger-task',
    loadChildren:()=> import('./passanger/passanger.module').then(m=>m.PassangerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
