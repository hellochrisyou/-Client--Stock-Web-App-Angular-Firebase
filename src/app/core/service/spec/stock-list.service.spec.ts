import { TestBed } from '@angular/core/testing';

import { StockListService } from '../state/stock-list.service';

describe('StockListService', () => {
  let service: StockListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
