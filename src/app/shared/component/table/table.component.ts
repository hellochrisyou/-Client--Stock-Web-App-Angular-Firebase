import { Component, Input, OnInit, ViewChild, AfterViewInit, AfterViewChecked, AfterContentChecked, DoCheck, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import * as GLOBAL from '@shared/const/url.const';
import { ChartComponent } from '@shared/dialog/chart/chart.component';
import { SearchHistory, Stock } from '@shared/interface/models';
import { HttpService } from 'app/core/service/http/http.service';
import { NanService } from 'app/core/service/mapper/nan.service';
import { ErrorComponent } from '@shared/dialog/error/error.component';
import { expandRowTransition } from 'app/core/animation/animation';
import { COLS_DISPLAY } from '@shared/const/column.const';
import { BehaviorSubject } from 'rxjs';
import { HistoryService } from 'app/core/service/firebase/history.service';
import { StockService } from 'app/core/service/firebase/stock.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'base-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [expandRowTransition]
})
export class TableComponent implements OnInit {

  tmpSearchArr: SearchHistory[] = [];
  expandRow: Stock;
  columns_display = COLS_DISPLAY;


  private _isStock: boolean;
  private _isSearch: string;
  public dataSource: MatTableDataSource<Stock>;
  public index: number;
  private _columnIds: string[] = [];
  private _columnObjects: any[];
  private _type: string;
  private _dataArray: Stock[] | SearchHistory[];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input()
  public get isStock(): boolean {
    return this._isStock;
  }
  public set isStock(value: boolean) {
    this._isStock = value;
  }

  @Input()
  public get isSearch(): string {
    return this._isSearch;
  }
  public set isSearch(value: string) {
    this._isSearch = value;
  }

  @Input()
  public get dataArray(): Stock[] | SearchHistory[] {
    return this._dataArray;
  }
  public set dataArray(value: Stock[]| SearchHistory[]) {
    this._dataArray = value;
  }

  @Input()
  public get columnIds(): any[] {
    return this._columnIds;
  }
  public set columnIds(colObjArr: any[]) {
    if (colObjArr) {
      this._columnIds = colObjArr.map(c => c.columnId);
    }
  }

  @Input()
  public get columnObjects() {
    return this._columnObjects;
  }
  public set columnObjects(colObjArr: any[]) {
    this._columnObjects = colObjArr;
  }

  @Input()
  public get type(): string {
    return this._type;
  }
  public set type(value: string) {
    this._type = value;
  }

  constructor(
    private httpService: HttpService,
    private nanService: NanService,
    public dialog: MatDialog,
    private historyService: HistoryService,
    private snackBar: MatSnackBar,
    private stockService: StockService
  ) { }

  ngOnInit() {
    console.log('table here', this.dataArray);
    this.dataSource = new MatTableDataSource<Stock | SearchHistory>(this.dataArray);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log('datasource mat table', this.dataSource);
  }

  public select(value: number): void {
    if (this._isSearch === 'true') {
      console.log('select value: ', value);
      console.log('datararay number', this.dataArray[value])

      this.stockService.addStock(this.dataArray[value]);      
    } else {
      this.stockService.deleteStock(this.dataArray[value])
    }
  }

  // SORTING
  public applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // DIALOGS AND SNACKBARS
  public openDialog(index: number, increment: string) {
    const dialogRef = this.dialog.open(ChartComponent, {
      data: {
        keyword: this.dataArray[index],
        increment: increment
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

  public openErrorDialog(errorMessage: String): void {
    const dialogRef = this.dialog.open(ErrorComponent, {
      data: {
        title: errorMessage,
        subtitle: 'Saving stock',
        text: 'You have already saved this stock'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  public openSnackBar(message: string, title: string): void {
    this.snackBar.open(message, title, {
      duration: 2000,
    });
  }

  public setDataColor(value: number | string) {
    if (typeof value !== 'string') {
      if (value > 0) {
        return '#4bb543'
      } else {
        return '#dd0031';
      }
    } else {
      return;
    }
  }
}