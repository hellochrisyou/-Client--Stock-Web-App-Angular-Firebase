import { Injectable } from '@angular/core';
import { Stock } from '@shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class StockMapperService {

  stockArr: Stock[];
  curStock: Stock = {
    options: ' '
  };


  constructor() { }

  public mapStockArray(data: any): Stock[] {
    this.stockArr = [];
    data.forEach(x => {
      this.curStock = {
        options: ' '
    };
      this.curStock.symbol = x.symbol;
      this.curStock.exchange = x.primaryExchange;
      this.curStock.name = x.companyName;
      this.curStock.open = Math.round(x.open* 100) / 100;
      this.curStock.low = Math.round(x.low* 100) / 100;
      this.curStock.high = Math.round(x.high* 100) / 100;
      this.curStock.latestPrice = Math.round(x.latestPrice* 100) / 100;
      this.curStock.change = Math.round(x.change* 100) / 100;
      this.curStock.changePercent = Math.round(x.changePercent* 100) / 100;
      this.curStock.week52Low = Math.round(x.week52Low* 100) / 100;
      this.curStock.week52High = Math.round(x.week52High* 100) / 100;
      this.curStock.ytdChange = Math.round(x.ytdChange * 100) / 100
      this.stockArr.push(this.curStock);
    });
    return this.stockArr;
  }
}
