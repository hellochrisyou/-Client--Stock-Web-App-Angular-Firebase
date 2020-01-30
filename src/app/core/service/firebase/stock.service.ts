import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Stock } from '@shared/interface/models';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  stock: Stock;
  stockCollection: AngularFirestoreCollection<Stock>;
  histories: Observable<Stock[]>;
  path: string;
  constructor(
    private afs: AngularFirestore,
    private auth: AuthService,
  ) { }

  public addStock(stock: Stock) {
    this.stock = {
      uId: '',
      symbol: stock.symbol,
      name:stock.exchange,
      exchange:stock.exchange,
      open:stock.open,
      low:stock.low,
      high:stock.high,
      latestPrice:stock.latestPrice,
      change:stock.change,
      changePercent:stock.changePercent,
      week52Low:stock.week52Low,
      week52High:stock.week52High,
      ytdChange:stock.ytdChange
    };
    return new Promise<any>((resolve, reject) => {
      this.path = this.auth.getUser().email + '-stock';
      this.afs.collection(this.path)
        .add(this.stock)
        .then(res => {
          stock.uId  = res.id;
          this.afs.collection(this.path).doc(stock.uId).set({uId: res.id});
          console.log('Response from Added Collection: ', res);
        }, err => reject(err)
        );
    });
  }


  public getStocks(): AngularFirestoreCollection<Stock> {
    return this.afs.collection<Stock>(this.auth.getUser().email + '-stock');
  }

  public deleteStock(stock: Stock) {
    this.path = this.auth.getUser().email + '-stock';
    console.log('path', this.path);

    this.getStocks().snapshotChanges().subscribe(value => {
      console.log('value here', value);
      value.forEach(data => {
        if (stock.uId === data.payload.doc.id) {
          this.afs.collection(this.path).doc(data.payload.doc.id).delete();
        }
      })
    })    
  }
  
}
