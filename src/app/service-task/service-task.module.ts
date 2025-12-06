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
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    ServDashboardComponent,
    ServFormComponent,
    TodoserviceTaskComponent
  ],
  imports: [
    CommonModule,
    ServiceTaskRoutingModule,
    IOTaskModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    SharedModuleModule,
    HttpClientModule,
    ReactiveFormsModule
    
    
]
})
export class ServiceTaskModule{ 

}
