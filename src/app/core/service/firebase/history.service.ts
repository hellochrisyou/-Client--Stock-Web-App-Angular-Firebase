import { Injectable } from '@angular/core';
import { SearchHistory } from '@shared/interface/models';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  history: SearchHistory;
  historyCollection: AngularFirestoreCollection<SearchHistory>;
  histories: Observable<SearchHistory[]>;
  path: string;
  constructor(
    private afs: AngularFirestore,
    private angularFireAuth: AngularFireAuth,
    private snackBar: MatSnackBar,
  ) { }

  public addHistory(value: string) {
    this.path = this.angularFireAuth.auth.currentUser.email + '-history';
    this.history = {
      uId: '',
      name: value
    };
    return new Promise<any>((resolve, reject) => {
      this.afs.collection(this.path)
        .add(this.history)
        .then(res => {
          this.history.uId = res.id;
          this.afs.collection(this.path).doc(this.history.uId).set({
            uId: res.id,
            name: value
          });
          console.log('Response from Added Collection: ', res);
        }, err => reject(err)
        );
    });
  }

  public getAllHistory(): AngularFirestoreCollection<SearchHistory> {
    this.path = this.angularFireAuth.auth.currentUser.email + '-history';
    return this.afs.collection<SearchHistory>(this.path);
  }

  public clearHistory() {
    this.path = this.angularFireAuth.auth.currentUser.email + '-history';
    console.log('path', this.path);
    this.getAllHistory().snapshotChanges().subscribe(value => {
      console.log('value here', value);
      value.forEach(data => {
        this.afs.collection(this.path).doc(data.payload.doc.id).delete();
      })
    })
  }

  public openSnackBar(message: string, title: string): void {
    this.snackBar.open(message, title, {
      duration: 2000,
    });
  }
}