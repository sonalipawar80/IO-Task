import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgContentRoutingModule } from './ng-content-routing.module';
import { NgContentDashboardComponent } from './components/ng-content-dashboard/ng-content-dashboard.component';
import { NgContentCard1Component } from './components/ng-content-card1/ng-content-card1.component';
import { MatButtonModule } from "@angular/material/button";
import { GetConfirmComponent } from './components/get-confirm/get-confirm.component';
import { A11yModule } from "@angular/cdk/a11y";


@NgModule({
  declarations: [
    NgContentDashboardComponent,
    NgContentCard1Component,
    GetConfirmComponent
  ],
  imports: [
    CommonModule,
    NgContentRoutingModule,
    MatButtonModule,
    A11yModule
]
})
export class NgContentModule { }
