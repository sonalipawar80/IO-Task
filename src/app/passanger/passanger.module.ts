import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PassengerDashboardComponent } from './passenger-dashboard/passenger-dashboard.component';
import { PassangerRoutingModule } from './passanger-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { MaterialModule } from '../material/material.module';
import { PassengerCardComponent } from './passenger-card/passenger-card.component';
import { PassengerCountComponent } from './passenger-count/passenger-count.component';



@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerCardComponent,
    PassengerCountComponent
  ],
  imports: [
    CommonModule,
    PassangerRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class PassangerModule { }
