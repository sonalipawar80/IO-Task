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
import { PipeMrDashboardComponent } from './components/pipe-mr-dashboard/pipe-mr-dashboard.component';
import { SummaryCharMrPipe } from './pipes-mr/summary-char-mr.pipe';
import { SummaryWordMrPipe } from './pipes-mr/summary-word-mr.pipe';
import { FilterMrPipe } from './pipes-mr/filter-mr.pipe';
import { FilesizeMrPipe } from './pipes-mr/filesize-mr.pipe';
import { MaterialModule } from "src/app/material/material.module";

@NgModule({
  declarations: [
    PipeDashboardComponent,
    FilterPipePipe,
    SummaryPipe,
    SummaryWordPipe,
    PostCardComponent,
    FilesizePipe,
    PipeMrDashboardComponent,
    SummaryCharMrPipe,
    SummaryWordMrPipe,
    FilterMrPipe,
    FilesizeMrPipe
  ],
  imports: [
    CommonModule,
    PipeTaskRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MaterialModule
]
})
export class PipeTaskModule { }
