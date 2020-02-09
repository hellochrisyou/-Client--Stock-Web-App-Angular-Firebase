import { TestBed } from '@angular/core/testing';
import { StockMapperService } from './stock-mapper.service';
describe('StockMapperService', () => {
  let service: StockMapperService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [StockMapperService] });
    // tslint:disable-next-line: deprecation
    service = TestBed.get(StockMapperService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
