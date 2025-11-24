import { Component, NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ServDashboardComponent } from "./serv-dashboard/serv-dashboard.component";

const route:Routes=[
{
    path:'',
    component:ServDashboardComponent
}
]
@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class ServiceTaskRoutingModule{}