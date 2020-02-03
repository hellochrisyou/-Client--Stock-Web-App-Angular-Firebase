import { HomeComponent } from './logic/home-logic.component';
import { LoginLogicComponent } from './presentation-desktop/login-presentation/login-presentation.component';
import { SignupLogicComponent } from './presentation-desktop/signup-presentation/signup-presentation.component';
import { MobileComponent } from './presentation-mobile/mobile.component';
import { LoginComponent } from './presentation-mobile/login/login.component';
import { SignUpComponent } from './presentation-mobile/sign-up/sign-up.component';

export const HomeComponents: any[] = [
    HomeComponent,
    LoginLogicComponent,
    SignupLogicComponent,
    LoginComponent,
    MobileComponent,
    SignUpComponent];

export * from './logic/home-logic.component';
export * from './presentation-desktop/login-presentation/login-presentation.component';
export * from './presentation-desktop/signup-presentation/signup-presentation.component';
export * from './presentation-mobile/mobile.component';
export * from './presentation-mobile/login/login.component';
export * from './presentation-mobile/sign-up/sign-up.component';
