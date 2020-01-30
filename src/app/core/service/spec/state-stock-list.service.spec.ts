import { TestBed } from '@angular/core/testing';

import { StateStockListService } from '../state-management/state-stock-list.service';

describe('StateStockListService', () => {
  let service: StateStockListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateStockListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
