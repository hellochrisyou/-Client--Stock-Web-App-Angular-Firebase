import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CreateBaseForm } from '@shared/base/base-form';
import { AuthService } from 'app/core/service/auth/auth.service';
import { EmitService } from 'app/core/service/emit/emit.service';
import { CREATE_SIGNUP_FG } from '@home/home.config';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'home-signup',
  templateUrl: './signup-presentation.component.html',
  styleUrls: ['../../logic/home-logic.component.scss']
})
export class SignupLogicComponent extends CreateBaseForm implements OnInit, OnDestroy {

  constructor(
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    protected emitService: EmitService,
    protected auth: AuthService
  ) {
    super(fb, changeDetectorRef);
  }

  public signup(): boolean {
    if (!this.formGroup.valid) {
      alert('Please correctly fill all the required fields');
      return false;
    } else {
      this.auth.signupEmail(this.formGroup.get('signupEmailCtrl').value, this.formGroup.get('signupPassCtrl').value);
    }


  }
  public ngOnInit(): void {
    super.ngOnInit();
    this.formGroup = CREATE_SIGNUP_FG(this.fb);
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }


}
