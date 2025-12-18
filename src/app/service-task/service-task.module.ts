import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServDashboardComponent } from './serv-dashboard/serv-dashboard.component';
import { ServiceTaskRoutingModule } from './service-task-routing.module';
import { IOTaskModule } from "src/app/io-task/io-task.module";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IStd } from '../io-task/const';
import { ServFormComponent } from './serv-form/serv-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { TodoserviceTaskComponent } from './components/todoservice-task/todoservice-task.component';
import {HttpClientModule} from '@angular/common/http';
import { CricketerdashboardComponent } from './cricketers-task/cricketerdashboard/cricketerdashboard.component';
import { GallaryDashboardComponent } from './Gallary-task/gallary-dashboard/gallary-dashboard.component';
import { OrderDashboardComponent } from './order-task/order-dashboard/order-dashboard.component';
import { OrderCardComponent } from './order-task/order-card/order-card.component';
import { A11yModule } from "@angular/cdk/a11y";

@NgModule({
  declarations: [
    ServDashboardComponent,
    ServFormComponent,
    TodoserviceTaskComponent,
    CricketerdashboardComponent,
    GallaryDashboardComponent,
    OrderDashboardComponent,
    OrderCardComponent
  ],
  imports: [
    CommonModule,
    ServiceTaskRoutingModule,
    IOTaskModule,
    FormsModule,
    MaterialModule,
    SharedModuleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    A11yModule
]
})
export class ServiceTaskModule{ 

}
