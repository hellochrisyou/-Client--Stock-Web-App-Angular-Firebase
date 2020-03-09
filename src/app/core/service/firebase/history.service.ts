import { Injectable } from '@angular/core';
import { SearchHistory } from '@shared/interface/models';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private snackBar: MatSnackBar,
  ) { }

  public addHistory(value: string) {
    let thisValue;
    switch (value) {
      case 'mostactive': {
        thisValue = 'Most Active';
        break;
      }
      case 'gainers': {
        thisValue = 'Gainers';
        break;
      }
      case 'losers': {
        thisValue = 'Losers';
        break;
      }
      case 'iexvolume': {
        thisValue = 'Volume';
        break;
      }
      default: {
        break;
      }
    }
    this.path = this.auth.userData.email + '-history';
    this.history = {
      uId: '',
      name: thisValue
    };

    return new Promise<any>((resolve, reject) => {
      this.afs.collection(this.path)
        .add(this.history)
        .then(res => {
          this.history.uId = res.id;
          this.afs.collection(this.path).doc(this.history.uId).set({
            uId: res.id,
            name: thisValue
          });
        }, err => reject(err)
        );
    });
  }

  public getAllHistory(): AngularFirestoreCollection<SearchHistory> {
    this.path = this.auth.userData.emaill + '-history';
    return this.afs.collection<SearchHistory>(this.path);
  }

  public clearHistory() {
    this.path = this.auth.userData.email + '-history';
    this.getAllHistory().snapshotChanges().subscribe(value => {
      value.forEach(data => {
        this.afs.collection(this.path).doc(data.payload.doc.id).delete();
      });
    });
  }

  public openSnackBar(message: string, title: string): void {
    this.snackBar.open(message, title, {
      duration: 2000,
    });
  }
}
