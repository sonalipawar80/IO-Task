import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeDashboardComponent } from './components/pipe-dashboard/pipe-dashboard.component';
import { PipeMrDashboardComponent } from './components/pipe-mr-dashboard/pipe-mr-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:PipeMrDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PipeTaskRoutingModule { }
