import { TestBed } from '@angular/core/testing';
import { Stock } from '@shared/interface/models';
import { SearchCacheStockService } from './search-cache-stock.service';
describe('SearchCacheStockService', () => {
  let service: SearchCacheStockService;
  beforeEach(() => {
    const stockStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        SearchCacheStockService,
      ]
    });
    // tslint:disable-next-line: deprecation
    service = TestBed.get(SearchCacheStockService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
