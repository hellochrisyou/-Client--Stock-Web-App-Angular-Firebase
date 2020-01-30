import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './logic/home-logic.component';
import { SharedModule } from '@shared/shared.module';
import { LoginLogicComponent } from '@home/home/presentation/login-presentation/login-presentation.component';
import { SignupLogicComponent } from '@home/home/presentation/signup-presentation/signup-presentation.component';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent, 
    LoginLogicComponent, 
    SignupLogicComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    LoginLogicComponent, 
    SignupLogicComponent
  ]
})
export class HomeModule { }
