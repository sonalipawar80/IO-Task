import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlattningOperatorRoutingModule } from './flattning-operator-routing.module';
import { MergeMapComponent } from './components/merge-map/merge-map.component';
import {HttpClientModule} from '@angular/common/http';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    MergeMapComponent
  ],
  imports: [
    CommonModule,
    FlattningOperatorRoutingModule,
    HttpClientModule,
    MaterialModule
  ]
})
export class FlattningOperatorModule { }
