import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { log } from 'console';
import { IOTaskRoutingModule } from './io-task-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    IOTaskRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule

  ],
  providers:[]
})
export class IOTaskModule { 

  constructor(){
    console.log('io module load')
  }
  
}
