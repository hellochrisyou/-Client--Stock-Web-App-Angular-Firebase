import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { SearchLogicComponent } from './logic/search-logic.component';
import { SearchPresentationComponent } from './presentation/search-presentation.component';
import { SearchRoutingModule } from './search-routing.module';
@NgModule({
  declarations: [
    SearchLogicComponent, 
    SearchPresentationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchRoutingModule
  ],
  exports: [
    SearchLogicComponent,
    SearchPresentationComponent
  ],
  providers: [

  ]
})
export class SearchModule { }
