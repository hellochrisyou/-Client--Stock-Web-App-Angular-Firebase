import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchLogicComponent } from './logic/search-logic.component';
import { AuthGuard } from 'app/core/service/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: SearchLogicComponent, canActivate: [AuthGuard] , data: {state: 'search-stock' } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
