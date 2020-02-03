import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import * as fromSearch from '.';
import { SearchLogicComponent, SearchPresentationComponent } from '.';

@NgModule({
  declarations: [
    SearchLogicComponent, SearchPresentationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule
  ],
  exports: [
    SearchLogicComponent, SearchPresentationComponent
  ],
  providers: [

  ]
})
export class SearchModule { }
