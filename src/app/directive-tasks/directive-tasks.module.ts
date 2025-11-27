import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectiveTasksRoutingModule } from './directive-tasks-routing.module';
import { HighlighComponent } from './components/highligh/highligh.component';
import { ToLowercaseComponent } from './components/to-lowercase/to-lowercase.component';
import { CraditCardComponent } from './components/cradit-card/cradit-card.component';
import { DirectiveDashboardComponent } from './components/directive-dashboard/directive-dashboard.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ToLowerCaseDirective } from './directives/to-lower-case.directive';
import { CraditCardDirective } from './directives/cradit-card.directive';


@NgModule({
  declarations: [
    HighlighComponent,
    ToLowercaseComponent,
    CraditCardComponent,
    DirectiveDashboardComponent,
    HighlightDirective,
    ToLowerCaseDirective,
    CraditCardDirective
  ],
  imports: [
    CommonModule,
    DirectiveTasksRoutingModule
  ]
})
export class DirectiveTasksModule { }
