import { Injectable } from '@angular/core';
import { Stock } from '@shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class NanService {

  constructor() { }

  public mapStockArray(dataSource: Stock[]): Stock[] {
    dataSource.forEach(element => {
      for (var key in element) {
        if (element.hasOwnProperty(key)) {
          if (element[key] === 0) {
            element[key] = 'n/a';
          }
        }
      }
    });
    return dataSource;
  }
}

