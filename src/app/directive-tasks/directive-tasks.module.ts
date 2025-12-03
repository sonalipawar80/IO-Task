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
import { MatButtonModule } from "@angular/material/button";
import { HighligherMrComponent } from './machinetest-components/highligher-mr/highligher-mr.component';
import { LowercaseMrComponent } from './machinetest-components/lowercase-mr/lowercase-mr.component';
import { CreditcardMrComponent } from './machinetest-components/creditcard-mr/creditcard-mr.component';
import { HighligherMrDirective } from './machinetestDirectives/highligher-mr.directive';
import { LowercaseMrDirective } from './machinetestDirectives/lowercase-mr.directive';
import { CreditcardMrDirective } from './machinetestDirectives/creditcard-mr.directive';


@NgModule({
  declarations: [
    HighlighComponent,
    ToLowercaseComponent,
    CraditCardComponent,
    DirectiveDashboardComponent,
    HighlightDirective,
    ToLowerCaseDirective,
    CraditCardDirective,
    LowercaseMrComponent,
    CreditcardMrComponent,
    HighligherMrDirective,
    LowercaseMrDirective,
    CreditcardMrDirective,
    HighligherMrComponent

  ],
  imports: [
    CommonModule,
    DirectiveTasksRoutingModule,
    MatButtonModule
]
})
export class DirectiveTasksModule { }
