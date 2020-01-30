import { Injectable } from '@angular/core';
import { User } from '@shared/interface/models';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;
  userCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  constructor(
    private afs: AngularFirestore,
    private auth: AuthService
    ) { }

  addUser(value: string) {}
  
  deleteUser(id: string) {}
}
