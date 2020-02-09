import { TestBed } from '@angular/core/testing';
import { SearchMapperService } from './search-mapper.service';
describe('SearchMapperService', () => {
  let service: SearchMapperService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SearchMapperService] });
    // tslint:disable-next-line: deprecation
    service = TestBed.get(SearchMapperService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
