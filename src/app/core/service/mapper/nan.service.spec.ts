import { TestBed } from '@angular/core/testing';
import { NanService } from './nan.service';
describe('NanService', () => {
  let service: NanService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [NanService] });
    // tslint:disable-next-line: deprecation
    service = TestBed.get(NanService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
