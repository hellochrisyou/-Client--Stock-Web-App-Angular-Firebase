import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryLogicComponent } from './logic/history-logic/history-logic.component';


@NgModule({
  declarations: [HistoryLogicComponent],
  imports: [
    CommonModule,
    SharedModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
