import { Injectable } from '@angular/core';
import { SearchHistory } from '@shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class HistoryMapperService {

  // tslint:disable-next-line: variable-name
  historyArr: SearchHistory[];
  curHistory: SearchHistory = {};


  constructor() { }

  public mapHistoryArray(data: any): SearchHistory[] {
    this.historyArr = [];
    data.forEach(x => {
      this.curHistory = {};

      switch (x.name) {
        case 'mostactive': {
          this.curHistory.name = 'Most Active'
          break;
        }
        default: {
          this.curHistory.name = x.name;
          break;
        }
      }
      this.historyArr.push(this.curHistory);
    });
    return this.historyArr;
  }
}

