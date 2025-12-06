import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipeTaskRoutingModule } from './pipe-task-routing.module';
import { PipeDashboardComponent } from './components/pipe-dashboard/pipe-dashboard.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { FilterPipePipe } from './Pipes/filter-pipe.pipe';
import { SummaryPipe } from './Pipes/summary.pipe';
import { SummaryWordPipe } from './Pipes/summary-word.pipe';
import { PostCardComponent } from './components/post-card/post-card.component';
import { MatButtonModule } from "@angular/material/button";
import { FilesizePipe } from './Pipes/filesize.pipe';

@NgModule({
  declarations: [
    PipeDashboardComponent,
    FilterPipePipe,
    SummaryPipe,
    SummaryWordPipe,
    PostCardComponent,
    FilesizePipe
  ],
  imports: [
    CommonModule,
    PipeTaskRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule
]
})
export class PipeTaskModule { }
