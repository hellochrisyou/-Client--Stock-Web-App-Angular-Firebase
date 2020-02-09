import { TestBed } from '@angular/core/testing';
import { ChartService } from './chart.service';
describe('ChartService', () => {
  let service: ChartService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ChartService] });
    // tslint:disable-next-line: deprecation
    service = TestBed.get(ChartService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('chartData defaults to: []', () => {
    expect(service.chartData).toEqual([]);
  });
  it('highData defaults to: []', () => {
    expect(service.highData).toEqual([]);
  });
  it('latestPriceData defaults to: []', () => {
    expect(service.latestPriceData).toEqual([]);
  });
  it('changeData defaults to: []', () => {
    expect(service.changeData).toEqual([]);
  });
});
