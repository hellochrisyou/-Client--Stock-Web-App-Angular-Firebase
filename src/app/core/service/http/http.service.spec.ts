import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpService } from './http.service';
import { MatDialog } from '@angular/material/dialog';
describe('HttpService', () => {
  let service: HttpService;
  beforeEach(() => {
    const httpErrorResponseStub = () => ({
      error: { message: {} },
      status: {}
    });
    const matDialogStub = () => ({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        HttpService,
        { provide: HttpErrorResponse, useFactory: httpErrorResponseStub },
        { provide: MatDialog, useFactory: matDialogStub }
      ]
    });
    // tslint:disable-next-line: deprecation
    service = TestBed.get(HttpService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
