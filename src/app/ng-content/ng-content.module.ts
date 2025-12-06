import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgContentRoutingModule } from './ng-content-routing.module';
import { NgContentDashboardComponent } from './components/ng-content-dashboard/ng-content-dashboard.component';
import { NgContentCard1Component } from './components/ng-content-card1/ng-content-card1.component';
import { MatButtonModule } from "@angular/material/button";
import { GetConfirmComponent } from './components/get-confirm/get-confirm.component';
import { A11yModule } from "@angular/cdk/a11y";
import { DashboardMrComponent } from './components-mr/dashboard-mr/dashboard-mr.component';
import { CardComponent } from './components-mr/card/card.component';
import { FormsModule } from "@angular/forms";
import { SignUpComponent } from './components-mr/sign-up/sign-up.component';
import { LogInComponent } from './components-mr/log-in/log-in.component';
import { GetConfirmMrComponent } from './components-mr/get-confirm-mr/get-confirm-mr.component';
import { CardConfirmComponent } from './components-mr/card-confirm/card-confirm.component';


@NgModule({
  declarations: [
    NgContentDashboardComponent,
    NgContentCard1Component,
    GetConfirmComponent,
    DashboardMrComponent,
    CardComponent,
    SignUpComponent,
    LogInComponent,
    GetConfirmMrComponent,
    CardConfirmComponent
  ],
  imports: [
    CommonModule,
    NgContentRoutingModule,
    MatButtonModule,
    A11yModule,
    FormsModule
]
})
export class NgContentModule { }
