import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CreateBaseForm } from '@shared/base/base-form';
import { EmitService } from 'app/core/service/emit/emit.service';
import { AuthService } from 'app/core/service/auth/auth.service';
import { CREATE_SIGNUP_FG } from '@home/home.config';

@Component({
  selector: 'mobile-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends CreateBaseForm implements OnInit, OnDestroy {

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
      alert('Please fill all the required fields')
      return false;
    } else {
      console.log(this.formGroup.value);
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
