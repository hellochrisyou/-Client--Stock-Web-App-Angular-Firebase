import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import * as fromHome from '.';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [...fromHome.HomeComponents],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [...fromHome.HomeComponents]
})
export class HomeModule { }
