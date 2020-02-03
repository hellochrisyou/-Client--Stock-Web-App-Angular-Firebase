import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CreateBaseForm } from '@shared/base/base-form';
import { AuthService } from 'app/core/service/auth/auth.service';
import { FormBuilder } from '@angular/forms';
import { EmitService } from 'app/core/service/emit/emit.service';
import { Router } from '@angular/router';
import { CREATE_LOGIN_FG } from '@home/home.config';

@Component({
  selector: 'mobile-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends CreateBaseForm implements OnInit, OnDestroy {

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
      alert('Please fill all the required fields!')
      return false;
    } else {
      console.log(this.formGroup.value)
    }
    console.log('check 1', this.formGroup.get('loginEmailCtrl').value);
    this.auth.signinEmail(this.formGroup.get('loginEmailCtrl').value, this.formGroup.get('loginPassCtrl').value);
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.formGroup = CREATE_LOGIN_FG(this.fb);
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public loginGoogle(): void {
    // if (!this.formGroup.valid) {
    //   alert('Please fill all the required fields')
    //   return false;
    // } else {
    //   console.log(this.formGroup.value)
    // }
    this.auth.signinGoogle();
  }

}
