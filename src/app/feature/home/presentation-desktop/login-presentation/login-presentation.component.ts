import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CREATE_LOGIN_FG } from '@home/home.config';
import { CreateBaseForm } from '@shared/base/base-form';
import { AuthService } from 'app/core/service/auth/auth.service';
import { EmitService } from 'app/core/service/emit/emit.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home-login',
  templateUrl: './login-presentation.component.html',
  styleUrls: ['../../logic/home-logic.component.scss']
})
export class LoginLogicComponent extends CreateBaseForm implements OnInit, OnDestroy {

  public loginEmail() {
    return this.formGroup.get('loginEmailCtrl');
  }

  public loginPass() {
    return this.formGroup.get('loginPassCtrl');
  }

  constructor(
    protected auth: AuthService,
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    protected emitService: EmitService,
    protected router: Router
  ) {
    super(fb, changeDetectorRef);
    // this.emitService.logingOutput.subscribe(x => {
    //   this.auth.SigninEmail(this.formGroup.get('loginEmailCtrl').value, this.formGroup.get('loginPassCtrl').value);
    // });
  }

  public login(): boolean {
    if (!this.formGroup.valid) {
      alert('Please correctly fill all the required fields!');
      return false;
    } else {
      this.auth.signinEmail(this.formGroup.get('loginEmailCtrl').value, this.formGroup.get('loginPassCtrl').value);
    }
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.formGroup = CREATE_LOGIN_FG(this.fb);
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public loginGoogle(): void {
    this.auth.signinGoogle();
  }

}
