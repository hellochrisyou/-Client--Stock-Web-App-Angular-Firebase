import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { CreateBaseForm } from '@shared/base/base-form';
import { User } from '@shared/interface/models';
import { URL_VALIDATOR } from '@shared/validator/error-validator/validators';
import { AuthService } from 'app/core/service/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class EditProfileComponent extends CreateBaseForm {

  public user: User = {};

  constructor(
    protected fb: FormBuilder,
    protected changeDetectorRef: ChangeDetectorRef,
    protected auth: AuthService,
    private af: AngularFireAuth,
    private snackBar: MatSnackBar,
    private changeDetectorRefs: ChangeDetectorRef,
    private router: Router
  ) {
    super(fb, changeDetectorRef);
  }

  public ngOnInit(): void {
    super.ngOnInit();    

    this.formGroup = this.fb.group({
      displayNameCtrl: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]],
      countryCtrl: ['', [
        Validators.required,
        Validators.maxLength(30)
      ]], 
      photoCtrl: ['', [
        Validators.required, 
        Validators.pattern(URL_VALIDATOR)
      ]],
    })
  }

  public ngOnDestroy(): void {
    super.ngOnDestroy();
  }

  public submit(): void {    
    this.user.displayName = this.formGroup.get('displayNameCtrl').value;
    this.user.country = this.formGroup.get('countryCtrl').value;
    this.user.photoURL = this.formGroup.get('photoCtrl').value;    
    this.user.email = this.af.auth.currentUser.email;
    this.user.uid =  this.af.auth.currentUser.email;
    this.auth.updateUserData(this.user);
    this.changeDetectorRefs.detectChanges();
    this.snackBar.open('Sign Up', 'SUCCESS', {});
    this.router.navigateByUrl('/home');
  }
}
