import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateFormRoutingModule } from './template-form-routing.module';
import { FormDashboardComponent } from './components/form-dashboard/form-dashboard.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";


@NgModule({
  declarations: [
    FormDashboardComponent
  ],
  imports: [
    CommonModule,
    TemplateFormRoutingModule,
    FormsModule,
    MatButtonModule
]
})
export class TemplateFormModule { }
