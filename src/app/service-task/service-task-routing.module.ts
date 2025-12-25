import { Component, NgModule } from "@angular/core";
import { NgModel } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { ServDashboardComponent } from "./serv-dashboard/serv-dashboard.component";
import { ServFormComponent } from "./serv-form/serv-form.component";
import { TodoserviceTaskComponent } from "./components/todoservice-task/todoservice-task.component";
import { CricketerdashboardComponent } from "./cricketers-task/cricketerdashboard/cricketerdashboard.component";
import { GallaryDashboardComponent } from "./Gallary-task/gallary-dashboard/gallary-dashboard.component";
import { OrderDashboardComponent } from "./order-task/order-dashboard/order-dashboard.component";
import { TaskDashboardComponent } from "./task-manager-task/task-dashboard/task-dashboard.component";

const route:Routes=[
{
    path:'',
    component:ServDashboardComponent
},{
    path:'student-task',
    component:ServFormComponent
},{
    path:'todo-task',
    component:TodoserviceTaskComponent
},{
    path:'gallary-task',
    component:GallaryDashboardComponent
},{
    path:'cricket-task',
    component:CricketerdashboardComponent
},{
    path:'order-task',
    component:OrderDashboardComponent
},{
    path:'order-task',
    component:OrderDashboardComponent
},{
    path:'todo-task',
    component:TodoserviceTaskComponent
},{
    path:'task-manager',
    component:TaskDashboardComponent
}

]
@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})
export class ServiceTaskRoutingModule{}