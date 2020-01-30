import { TestBed } from '@angular/core/testing';

import { NanService } from '../mapper/nan.service';

describe('NanService', () => {
  let service: NanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
