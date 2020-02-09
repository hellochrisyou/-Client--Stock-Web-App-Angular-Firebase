import { Injectable } from '@angular/core';
import { SearchHistory } from '@shared/interface/models';

@Injectable({
  providedIn: 'root'
})
export class SearchMapperService {

  // tslint:disable-next-line: variable-name
  private searchArr: SearchHistory[];

  current: SearchHistory = {
  };

  constructor() { }

  public mapSearchArray(data: any): SearchHistory[] {
    this.searchArr = [];
    data.forEach(x => {
      this.current = {};
      this.current.name = x.name,
        this.searchArr.push(this.current);
    });
    return this.searchArr;
  }
}

