import { ChangeDetectorRef, Component, OnDestroy, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateBaseForm } from '@shared/base/base-form';
import { AuthService } from 'app/core/service/auth/auth.service';
import { URLVALIDATOR, ALPHABETVALIDATOR } from '@shared/validator/error-validator/validators';
import { User } from '@shared/interface/models';

@Component({
  selector: 'edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent extends CreateBaseForm {

  // public thisUser: User = {};
  // @Output() submitUser = new EventEmitter<User>();

  // constructor(
  //   protected fb: FormBuilder,
  //   protected changeDetectorRef: ChangeDetectorRef,
  //   protected auth: AuthService,
  // ) {
  //   super(fb, changeDetectorRef);
  // }

  // public ngOnInit(): void {
  //   super.ngOnInit();


  //   this.formGroup = this.fb.group({
  //     displayNameCtrl: ['', [
  //       Validators.required,
  //       Validators.minLength(2),
  //       Validators.maxLength(30)
  //     ]],
  //     photoCtrl: ['', [
  //       Validators.required, 
  //       Validators.pattern(URLVALIDATOR)
  //     ]],
  //   })
  // }

  // public ngOnDestroy(): void {
  //   super.ngOnDestroy();
  // }

  public submit(): void {
    // if (this.formGroup.get('displayNameCtrl').value !== '') {
    //   this.thisUser.displayName = this.formGroup.get('displayNameCtrl').value;
    // }
    // if (this.formGroup.get('photoCtrl').value !== '') {
    //   this.thisUser.photoURL = this.formGroup.get('photoCtrl').value;
    // }
    // this.submitUser.emit(this.thisUser);
  }
}
