import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'app/core/service/auth/auth.service';
import { UserService } from 'app/core/service/firebase/user.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from '@shared/interface/models';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { MatBottomSheet } from '@angular/material';
import { CreateBaseForm } from '@shared/base/base-form';
import { FormBuilder, Validators } from '@angular/forms';
import { URLVALIDATOR } from '@shared/validator/error-validator/validators';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';

declare var $: any

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  
  userDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;

  constructor(
    public auth: AuthService,
    public afAuth: AngularFireAuth,
    public userService: UserService,
  ){}

  public ngOnInit(): void {
    this.userDoc = this.userService.getUser();
    this.user = this.userDoc.valueChanges(); 
    console.log ('profile user', this.user);
  }
}
