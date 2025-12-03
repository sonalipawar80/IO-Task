import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgContentCard1Component } from './components/ng-content-card1/ng-content-card1.component';
import { NgContentDashboardComponent } from './components/ng-content-dashboard/ng-content-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component: NgContentCard1Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgContentRoutingModule { }
