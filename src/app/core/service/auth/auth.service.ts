import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth, User } from 'firebase';
import { Observable, of } from 'rxjs';
import { MatSnackBar, MatDialog } from '@angular/material';
import { ConfirmComponent } from '@shared/dialog/confirm/confirm.component';
import { CloseDialogService } from '../close-dialog/close-dialog.service';
import { switchMap, first } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  data: User;
  
  private _user: Observable<User>; // Added with UserStore

  public get user(): Observable<User> {
    return this._user;
  }
  public set user(value: Observable<User>) {
    this._user = value;
  }

  constructor(
    public router: Router,
    public ngZone: NgZone,
    public afAuth: AngularFireAuth,
    private angularFireAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
    private afs: AngularFirestore,
    public dialog: MatDialog,
    private closeDialogService: CloseDialogService
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return of(null)
        }
      })
    )
  }

  /* Sign up */
  public signupEmail(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
        this.updateUserData(res.user) //Added with UserStore
        this.snackBar.open('Sign Up', 'SUCCESS', {
        });
        this.closeDialogService.closeSignupDialog();
      })
      .catch(error => {
        console.log(error);
        this.signupErrorPopup(error.message);
      });
  }

  // Firebase SignInWithPopup
  OAuthProvider(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((res) => {
        this.updateUserData(res.user) //Added with UserStore
        this.ngZone.run(() => {
          console.log('ngZone Run', res);
          this.router.navigate(['home']);
        });
      }).catch((error) => {
        window.alert(error);
      });
  }

  // Firebase Google Sign-in
  public signinGoogle() {
    return this.OAuthProvider(new auth.GoogleAuthProvider())
      .then(res => {
        console.log('Google Successfully logged in!', res);
      }).catch(error => {
        console.log(error);
      });
  }

  // Firebase Google Sign-in
  public signinGithub() {
    return this.OAuthProvider(new auth.GithubAuthProvider())
      .then(res => {
        console.log('Github Successfully logged in!');
      }).catch(error => {
        console.log(error);
      });
  }

  public getUser(): User {
    return this.angularFireAuth.auth.currentUser;    
  }

  public updateUserData( user: User) { // Added with UserStore
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);

    this.data = user;
    console.log('user', user); 
    user.updateProfile({
      displayName: user.displayName,
      photoURL: user.photoURL,
    }).then(function() {
      console.log('User Updated',user);
    }).catch(function(error) {      
      console.log('User update failed');
    });    

    return userRef.set(this.data, { merge: true });
  }


  public signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/home']);
    });
  }

  /* Sign in */
  public signinEmail(email: string, password: string) {
    this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        console.log('Successfully signed in!', credential);
        this.updateUserData(credential.user);
      })
      .catch(err => {
        console.log('Something is wrong:', err.message);
      });
  }

  public signupErrorPopup(message: string): void {
    const dialogRef = this.dialog.open(ConfirmComponent, {
      width: '25vw',
      data: {
        title: 'Error',
        subTitle: 'Signup Failed',
        text: message
      }
    });
    dialogRef.afterClosed().subscribe();
  }
}

