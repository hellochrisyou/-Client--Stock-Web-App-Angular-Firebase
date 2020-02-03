import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import * as fromInterceptors from './service/interceptor';

@NgModule({
  declarations: [
    HeaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    ...fromInterceptors.httpInterceptorProviders
  ]
})
export class CoreModule { }
