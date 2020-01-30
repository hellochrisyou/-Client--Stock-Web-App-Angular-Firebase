import { Injectable, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmComponent } from '@shared/dialog/confirm/confirm.component';
import { User } from '@shared/interface/models';
import { auth } from 'firebase';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CloseDialogService } from '../close-dialog/close-dialog.service';
import { UserService } from '../firebase/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: User;
  
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
    private snackBar: MatSnackBar,
    private afs: AngularFirestore,
    public dialog: MatDialog,
    private closeDialogService: CloseDialogService,
    private userService: UserService
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
    this.afAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        this.userData = {
          email: res.user.email,
          displayName: res.user.email,
          photoURL: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        }
        this.userService.addUser(this.userData);
        console.log('Successfully signed up!', res);
        this.snackBar.open('Sign Up', 'SUCCESS', {
        });
        this.router.navigateByUrl('search-stock');
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
        this.ngZone.run(() => {
          console.log('ngZone Run', res);
          this.userData = {
            email: res.user.displayName,
            displayName: res.user.email,
            photoURL: res.user.photoURL,
          }
          this.userService.addUser(this.userData);
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
        this.userData = {};
      }).catch(error => {
        console.log(error);
      });
  }

  // Firebase Google Sign-in
  public signinGithub() {
    return this.OAuthProvider(new auth.GithubAuthProvider())
      .then(res => {
        console.log('Github Successfully logged in!');
        this.userData = {};
      }).catch(error => {
        console.log(error);
      });
  }

  get authenticated(): boolean {
    return this.afAuth.authState !== null;
  }

  public signOut() {
    this.afAuth.auth.signOut().then(() => {
      this.router.navigate(['/home']);
    });
  }

  /* Sign in */
  public signinEmail(email: string, password: string) {
    this.afAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(credential => {
        console.log('Successfully signed in!', credential);
        this.router.navigateByUrl('search-stock');        
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

