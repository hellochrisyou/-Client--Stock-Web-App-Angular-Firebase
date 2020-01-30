import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyListRoutingModule } from './my-list-routing.module';
import { MyListComponent } from './my-list.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [MyListComponent],
  imports: [
    SharedModule,
    MyListRoutingModule
  ],
  exports: [
    MyListComponent
  ]
})
export class MyListModule { }
