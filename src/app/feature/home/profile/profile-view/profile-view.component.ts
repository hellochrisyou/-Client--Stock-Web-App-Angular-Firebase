import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'app/core/service/auth/auth.service';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '@shared/interface/models';

@Component({
  selector: 'profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  thisUser: User;
  user: User;

  constructor(
    public auth: AuthService,
    private afs: AngularFirestore,
  ) { }

  ngOnInit() {
    this.thisUser = this.auth.authState.email;
    console.log(this.auth.authState.email);
    let docRef = this.afs.doc(`users/${this.auth.authState.email}`);
    docRef.get().subscribe(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        console.log('Document data:', doc.data());
        this.thisUser = doc.data();
        if (this.thisUser.country === '') {
          this.thisUser.country = 'N/A';        
        } 
        if (this.thisUser.photoURL === '') {
          this.thisUser.country = 'N/A';        
        }
      }
    }, (err => {
      console.log('Error fetching document: ', err);
    }));
  }
}
