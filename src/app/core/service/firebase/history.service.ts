import { Injectable } from '@angular/core';
import { SearchHistory } from '@shared/interface/models';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

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
    private auth: AuthService,
  ) { }

  public addHistory(value: string) {
    this.history = {
      name: value
    };
    return new Promise<any>((resolve, reject) => {
      this.afs.collection(this.auth.getUser().email + '-history')
        .add(this.history)
        .then(res => {
          console.log('Response from Added Collection: ', res);
        }, err => reject(err)
        );
    });
  }


  public getAllHistory(): AngularFirestoreCollection<SearchHistory> {
    return this.afs.collection<SearchHistory>(this.auth.getUser().email + '-history');
  }

  public clearHistory() {

    this.path = this.auth.getUser().email + '-history';
    console.log('path', this.path);
    this.getAllHistory().snapshotChanges().subscribe(value => {
      console.log('value here', value);
      value.forEach(data => {
        this.afs.collection(this.path).doc(data.payload.doc.id).delete();
      })
    })    
  }
}
