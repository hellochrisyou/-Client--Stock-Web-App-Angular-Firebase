import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { STOCK_COL_OBJ } from '@shared/const/column.const';
import * as GLOBAL from '@shared/const/url.const';
import { ColumnObject } from '@shared/interface/interface';
import { Stock } from '@shared/interface/models';
import { HttpService } from 'app/core/service/http/http.service';
import { StockService } from 'app/core/service/firebase/stock.service';
import { map } from 'rxjs/operators';
import { EmitService } from 'app/core/service/emit/emit.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.scss']
})
export class MyListComponent implements OnInit {
 
  isSearch = 'false';
  stockArr: Stock[] = [];
  stockCol: ColumnObject[] = STOCK_COL_OBJ;

  constructor(
    private stockService: StockService,
    private emitService: EmitService,
    private changeDetectorRefs: ChangeDetectorRef


  ) { }

  ngOnInit() {
    console.log('this Stock arr', this.stockArr);
    this.stockService.getStocks().valueChanges().pipe(map(data => data)).subscribe( value => {
      console.log('observable stocks', value)
      this.stockArr = value;
      this.changeDetectorRefs.detectChanges();
      this.emitService.refreshTable();
      console.log('this Stock arr2', this.stockArr);
    });  
  }
}
