import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectiveDashboardComponent } from './components/directive-dashboard/directive-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:DirectiveDashboardComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectiveTasksRoutingModule { 

}
