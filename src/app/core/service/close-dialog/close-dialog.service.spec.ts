import { TestBed } from '@angular/core/testing';
import { CloseDialogService } from './close-dialog.service';
describe('CloseDialogService', () => {
  let service: CloseDialogService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CloseDialogService] });
    // tslint:disable-next-line: deprecation
    service = TestBed.get(CloseDialogService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
