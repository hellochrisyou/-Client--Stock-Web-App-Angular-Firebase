import { TestBed } from '@angular/core/testing';
import { EmitService } from './emit.service';
describe('EmitService', () => {
  let service: EmitService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [EmitService] });
    // tslint:disable-next-line: deprecation
    service = TestBed.get(EmitService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
