import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Stock } from '@shared/interface/models';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';

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
    private snackBar: MatSnackBar,
    private angularFireAuth: AngularFireAuth,
  ) { }

  public addStock(stock: Stock) {
    this.path = this.angularFireAuth.auth.currentUser.email + '-stock';
    this.stock = {
      options: ' ',
      uId: '',
      symbol: stock.symbol,
      name: stock.exchange,
      exchange: stock.exchange,
      open: stock.open,
      low: stock.low,
      high: stock.high,
      latestPrice: stock.latestPrice,
      change: stock.change,
      changePercent: stock.changePercent,
      week52Low: stock.week52Low,
      week52High: stock.week52High,
      ytdChange: stock.ytdChange
    };
    console.log('addStock', this.stock);
    return new Promise<any>((resolve, reject) => {
      this.afs.collection(this.path)
        .add(this.stock)
        .then(res => {
          stock.uId = res.id;
           this.afs.collection(this.path).doc(stock.uId).set({ 
            uId: res.id, 
            symbol: this.stock.symbol, 
            options: ' ',
            name: this.stock.name,  
            exchange: this.stock.name,  
            open: this.stock.open,  
            low: this.stock.low,  
            high: this.stock.high,  
            latestPrice: this.stock.latestPrice,  
            change: this.stock.change,  
            changePercent: this.stock.changePercent,  
            week52Low: this.stock.week52Low,  
            week52High: this.stock.week52High,  
            ytdChange: this.stock.ytdChange,  
          });
          console.log('Response from Added Collection: ', res);
          this.openSnackBar('Stock Added', 'Succesful');
        }, err => reject(err)
        );
    });
  }


  public getStocks(): AngularFirestoreCollection<Stock> {
    this.path = this.angularFireAuth.auth.currentUser.email + '-stock';
    return this.afs.collection<Stock>(this.path);
  }

  public deleteStock(stock: Stock) {
    this.path = this.angularFireAuth.auth.currentUser.email + '-stock';
    console.log('path', this.path);
    return new Promise<any>((resolve, reject) => {
      this.getStocks().snapshotChanges().subscribe(value => {
        console.log('value here', value);
        value.forEach(data => {
          if (stock.uId === data.payload.doc.id) {
            this.afs.collection(this.path).doc(data.payload.doc.id).delete();
          }
          // this.openSnackBar('Stock Deleted', 'Succesful');
        })
      });
    });
  }

  public openSnackBar(message: string, title: string): void {
    this.snackBar.open(message, title, {
      duration: 2000,
    });

  }
}