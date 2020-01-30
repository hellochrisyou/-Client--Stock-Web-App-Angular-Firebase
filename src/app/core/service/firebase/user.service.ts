import { Injectable } from '@angular/core';
import { User } from '@shared/interface/models';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  userCollection: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  path: string;
  constructor(
    private afs: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
  ) { }

  public addUser(user: User) {
    this.path = this.angularFireAuth.auth.currentUser.email + '-user';
    this.user = {
    displayName: user.displayName,
    email: user.email,  
    photoURL: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    age: null,
    country: null,  
    retirementAge: null 
    };

    this.afs.collection('users').doc(this.user.email).set(this.user);
  }

  public updateUser(user: User): void {
    this.afs.doc(user.email).set({
      displayName: user.displayName,
      email: user.email,  
      photoURL: user.photoURL,
      age: user.age,
      country: user.country,  
      retirementAge: user.retirementAge
    });
  }

  public getUser(): AngularFirestoreDocument<User> {
    return this.afs.collection('users').doc<User>(this.angularFireAuth.auth.currentUser.email);
  }
}
