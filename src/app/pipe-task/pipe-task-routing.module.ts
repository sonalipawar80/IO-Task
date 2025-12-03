import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeDashboardComponent } from './components/pipe-dashboard/pipe-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:PipeDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeTaskRoutingModule { }
