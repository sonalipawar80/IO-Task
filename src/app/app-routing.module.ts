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
  },{
    path:'directive-tasks',
    loadChildren:()=> import('./directive-tasks/directive-tasks.module').then(m=>m.DirectiveTasksModule)
  },{
    path:'ng-content',
    loadChildren:()=>import('./ng-content/ng-content.module').then(m=>m.NgContentModule)
  },{
    path:'flatting-operator',
    loadChildren:()=>import('./flattning-operator/flattning-operator.module').then(m=>m.FlattningOperatorModule)
  },{
    path:'pipe-task',
    loadChildren:()=>import('./pipe-task/pipe-task.module').then(m=>m.PipeTaskModule)
  },{
    path:'form-task',
    loadChildren:()=>import('./template-form/template-form.module').then(m=>m.TemplateFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
