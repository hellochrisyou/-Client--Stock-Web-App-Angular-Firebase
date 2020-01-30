import { TestBed } from '@angular/core/testing';

import { SearchCacheStockService } from '../cache/search-cache-stock.service';

describe('SearchStateService', () => {
  let service: SearchCacheStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCacheStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
