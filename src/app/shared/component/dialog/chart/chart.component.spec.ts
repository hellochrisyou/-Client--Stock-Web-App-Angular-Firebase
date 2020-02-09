import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DialogData } from '@shared/interface/interface';
import { HttpService } from 'app/core/service/http/http.service';
import { ChartService } from 'app/core/service/mapper/chart.service';
import { ChartComponent } from './chart.component';
describe('ChartComponent', () => {
  let component: ChartComponent;
  let fixture: ComponentFixture<ChartComponent>;
  beforeEach(() => {
    const matDialogRefStub = () => ({ updateSize: string => ({}) });
    const dialogDataStub = () => ({ keyword: { symbol: {} }, increment: {} });
    const httpServiceStub = () => ({
      getChart: (symbol, increment) => ({ subscribe: () => ({}) })
    });
    const chartServiceStub = () => ({
      mapChartArrayFiveDays: (data, symbol) => ({}),
      mapChartArrayOneMonth: (data, symbol) => ({}),
      mapChartArrayOneYear: (data, symbol) => ({}),
      mapChartArrayFiveYears: (data, symbol) => ({}),
      getLow: () => ({}),
      getHigh: () => ({}),
      getChange: () => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ChartComponent],
      providers: [
        { provide: MatDialogRef, useFactory: matDialogRefStub },
        // { provide: DialogData, useFactory: dialogDataStub },
        { provide: HttpService, useFactory: httpServiceStub },
        { provide: ChartService, useFactory: chartServiceStub }
      ]
    });
    fixture = TestBed.createComponent(ChartComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('lineChartColors defaults to: [, , , ]', () => {
    expect(component.lineChartColors).toEqual([, , ,]);
  });
  it('lineChartLegend defaults to: true', () => {
    expect(component.lineChartLegend).toEqual(true);
  });
  it('lineChartPlugins defaults to: []', () => {
    expect(component.lineChartPlugins).toEqual([]);
  });
  it('lineChartType defaults to: line', () => {
    expect(component.lineChartType).toEqual('line');
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const matDialogRefStub: MatDialogRef<any> = fixture.debugElement.injector.get(
        MatDialogRef
      );
      const httpServiceStub: HttpService = fixture.debugElement.injector.get(
        HttpService
      );
      const chartServiceStub: ChartService = fixture.debugElement.injector.get(
        ChartService
      );
      spyOn(matDialogRefStub, 'updateSize').and.callThrough();
      spyOn(httpServiceStub, 'getChart').and.callThrough();
      spyOn(chartServiceStub, 'mapChartArrayFiveDays').and.callThrough();
      spyOn(chartServiceStub, 'mapChartArrayOneMonth').and.callThrough();
      spyOn(chartServiceStub, 'mapChartArrayOneYear').and.callThrough();
      spyOn(chartServiceStub, 'mapChartArrayFiveYears').and.callThrough();
      spyOn(chartServiceStub, 'getLow').and.callThrough();
      spyOn(chartServiceStub, 'getHigh').and.callThrough();
      spyOn(chartServiceStub, 'getChange').and.callThrough();
      component.ngOnInit();
      expect(matDialogRefStub.updateSize).toHaveBeenCalled();
      expect(httpServiceStub.getChart).toHaveBeenCalled();
      expect(chartServiceStub.mapChartArrayFiveDays).toHaveBeenCalled();
      expect(chartServiceStub.mapChartArrayOneMonth).toHaveBeenCalled();
      expect(chartServiceStub.mapChartArrayOneYear).toHaveBeenCalled();
      expect(chartServiceStub.mapChartArrayFiveYears).toHaveBeenCalled();
      expect(chartServiceStub.getLow).toHaveBeenCalled();
      expect(chartServiceStub.getHigh).toHaveBeenCalled();
      expect(chartServiceStub.getChange).toHaveBeenCalled();
    });
  });
});
