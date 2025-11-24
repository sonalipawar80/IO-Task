import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { PassengerDashboardComponent } from "./passenger-dashboard/passenger-dashboard.component";


const routes:Routes=[
{
    path:'',
    component:PassengerDashboardComponent
}
]


@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PassangerRoutingModule{}