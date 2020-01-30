import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home/home.module').then(mod => mod.HomeModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./feature/home/profile/profile.module').then(mod => mod.ProfileModule),
   },
  {
    path: 'search-stock',
    loadChildren: () => import('./feature/home/search/search.module').then(mod => mod.SearchModule),
  },
  {
    path: 'my-list',
    loadChildren: () => import('./feature/home/my-list/my-list.module').then(mod => mod.MyListModule),
  },
  {
    path: 'history',
    loadChildren: () => import('./feature/home/history/history.module').then(mod => mod.HistoryModule),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: ErrorComponent, data: {state: 'error' } }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
