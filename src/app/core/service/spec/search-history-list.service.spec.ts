import { TestBed } from '@angular/core/testing';

import { SearchHistoryListService } from '../state/search-history-list.service';

describe('SearchHistoryListService', () => {
  let service: SearchHistoryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchHistoryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
