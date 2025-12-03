import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormDashboardComponent } from './components/form-dashboard/form-dashboard.component';

const routes: Routes = [{
  path:'',
  component:FormDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateFormRoutingModule { }
