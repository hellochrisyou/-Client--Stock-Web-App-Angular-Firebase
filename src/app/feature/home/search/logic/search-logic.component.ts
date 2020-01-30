import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource, MatDialog, MatSnackBar } from '@angular/material';
import { STOCK_COL_OBJ } from '@shared/const/column.const';
import * as GLOBAL from '@shared/const/url.const';
import { ColumnObject } from '@shared/interface/interface';
import { SearchHistory, Stock } from '@shared/interface/models';
import { HttpService } from 'app/core/service/http/http.service';
import { StockMapperService } from 'app/core/service/mapper/stock-mapper.service';
import { ErrorComponent } from '@shared/dialog/error/error.component';
import { NanService } from 'app/core/service/mapper/nan.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { SearchMapperService } from 'app/core/service/mapper/search-mapper.service';
import { HistoryService } from 'app/core/service/firebase/history.service';
import { EmitService } from 'app/core/service/emit/emit.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'search-stock',
  templateUrl: './search-logic.component.html',
  styleUrls: ['./search-logic.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchLogicComponent implements OnInit {

  text: 'Search Results are'
  isSearch = 'true';
  tmpAccount: Account;
  stockArr: Stock[];
  stockCol: ColumnObject[] = STOCK_COL_OBJ;
  searchArr: SearchHistory[];

  saveHistory: SearchHistory = {
    name: '',
    // dateRecorded: new Date()
  }

  constructor(
    private httpService: HttpService,
    private stockMapperService: StockMapperService,
    public dialog: MatDialog,
    private nanService: NanService,
    private changeDetectorRefs: ChangeDetectorRef,
    private historyService: HistoryService,
    private emitService: EmitService
  ) { }

  ngOnInit() {
    this.changeDetectorRefs.detectChanges();
}
    public onSubmit(value: string): void {
    console.log('value of submit', value);
    this.httpService.getIex(value).subscribe(data => {
      this.stockArr = this.stockMapperService.mapStockArray(data);
      this.stockArr = this.nanService.mapStockArray(this.stockArr);
      console.log('Data retrieved from getIEX', this.stockArr);      
      this.historyService.addHistory(value);  
      this.changeDetectorRefs.detectChanges();
      this.emitService.refreshTable();
      console.log('Done', this.stockArr);
    },
      err => console.log('HTTP Error for getIEX: ', err),
      () => console.log('HTTP getIEX complete.')
    );
  }


}