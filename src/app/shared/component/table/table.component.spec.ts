import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';
import { EmitService } from 'app/core/service/emit/emit.service';
import { StockService } from 'app/core/service/firebase/stock.service';
import { COLS_DISPLAY } from '@shared/const/column.const';
import { TableComponent } from './table.component';
describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;
  beforeEach(() => {
    const matDialogStub = () => ({
      open: (chartComponent, object) => ({
        afterClosed: () => ({ subscribe: () => ({}) })
      })
    });
    const emitServiceStub = () => ({
      refreshOutput: { subscribe: () => ({}), unsubscribe: () => ({}) }
    });
    const stockServiceStub = () => ({
      addStock: arg => ({}),
      deleteStock: arg => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [TableComponent],
      providers: [
        { provide: MatDialog, useFactory: matDialogStub },
        { provide: EmitService, useFactory: emitServiceStub },
        { provide: StockService, useFactory: stockServiceStub }
      ]
    });
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('tmpSearchArr defaults to: []', () => {
    expect(component.tmpSearchArr).toEqual([]);
  });
  it('columnsDisplay defaults to: COLS_DISPLAY', () => {
    expect(component.columnsDisplay).toEqual(COLS_DISPLAY);
  });
});
