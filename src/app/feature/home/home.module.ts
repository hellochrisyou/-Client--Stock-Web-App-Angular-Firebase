import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './logic/home-logic.component';
import { LoginComponent } from './mobile/login/login.component';
import { MobileComponent } from './mobile/mobile.component';
import { SignUpComponent } from './mobile/sign-up/sign-up.component';
import { LoginLogicComponent } from './presentation-desktop/login-presentation/login-presentation.component';
import { SignupLogicComponent } from './presentation-desktop/signup-presentation/signup-presentation.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginLogicComponent,
    SignupLogicComponent,
    MobileComponent,
    LoginComponent,
    SignUpComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    LoginLogicComponent,
    SignupLogicComponent,
    MobileComponent
  ]
})
export class HomeModule { }
