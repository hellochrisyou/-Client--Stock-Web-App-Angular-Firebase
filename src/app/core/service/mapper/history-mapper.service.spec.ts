import { TestBed } from '@angular/core/testing';
import { HistoryMapperService } from './history-mapper.service';
describe('HistoryMapperService', () => {
  let service: HistoryMapperService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HistoryMapperService] });
    // tslint:disable-next-line: deprecation
    service = TestBed.get(HistoryMapperService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
