import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ChartComponent } from '@shared/component/dialog/chart/chart.component';
import { ErrorDialogComponent } from '@shared/component/dialog/error/error.component';
import { COLS_DISPLAY } from '@shared/const/column.const';
import { SearchHistory, Stock } from '@shared/interface/models';
import { expandRowTransition } from 'app/core/animation/animation';
import { EmitService } from 'app/core/service/emit/emit.service';
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
  columnsDisplay = COLS_DISPLAY;
  dataSource: MatTableDataSource<Stock | SearchHistory>;
  index: number;

  private _isStock: boolean;
  private _isSearch: string;
  private _columnIds: string[] = [];
  private _columnObjects: any[];
  private _type: string;
  private _dataArray: any[];

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
  public get dataArray(): any[] {
    return this._dataArray;
  }
  public set dataArray(value: any[]) {
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
    public dialog: MatDialog,
    private stockService: StockService,
    private emitService: EmitService,
  ) {
  }

  public ngOnInit() {
    this.emitService.refreshOutput.subscribe(x => {
      this.refresh();
    });
  }

  public refresh(): void {
    this.dataSource = new MatTableDataSource<any>(this.dataArray);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log('emitted', this.dataArray);
  }

  public select(value: number): void {
    if (this._isSearch === 'true') {
      console.log('select value: ', value);
      console.log('datararay number', this.dataArray[value]);
      this.stockService.addStock(this.dataArray[value]);
    } else {
      this.stockService.deleteStock(this.dataArray[value]);
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
  public openDialog(index: number, incrementStr: string) {
    const dialogRef = this.dialog.open(ChartComponent, {
      data: {
        keyword: this.dataArray[index],
        increment: incrementStr
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  public openErrorDialog(errorMessage: string): void {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
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

  public setDataColor(value: number | string) {
    if (typeof value !== 'string') {
      if (value > 0) {
        return '#4bb543';
      } else {
        return '#dd0031';
      }
    } else {
      return;
    }
  }
}
