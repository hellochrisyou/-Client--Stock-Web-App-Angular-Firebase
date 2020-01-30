import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/core/service/guard/auth.guard';
import { HistoryLogicComponent } from './logic/history-logic/history-logic.component';

const routes: Routes = [
  {
    path: '',
    component: HistoryLogicComponent,  canActivate: [AuthGuard] , data: {state: 'history' } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
