import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'app/core/service/guard/auth.guard';

import { SearchLogicComponent } from './logic/search-logic.component';


const routes: Routes = [
  {
    path: '',
    component: SearchLogicComponent, canActivate: [AuthGuard], data: { state: 'search-stock' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
