import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyListComponent } from './my-list.component';
import { AuthGuard } from 'app/core/service/guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: MyListComponent,  canActivate: [AuthGuard] , data: {state: 'my-list' } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyListRoutingModule { }
