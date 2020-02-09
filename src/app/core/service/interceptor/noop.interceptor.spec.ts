import { TestBed } from '@angular/core/testing';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { NoopInterceptor } from './noop.interceptor';
describe('NoopInterceptor', () => {
  let service: NoopInterceptor;
  beforeEach(() => {
    const httpHandlerStub = () => ({ handle: req => ({}) });
    const httpRequestStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        NoopInterceptor,
        { provide: HttpHandler, useFactory: httpHandlerStub },
        { provide: HttpRequest, useFactory: httpRequestStub }
      ]
    });
    service = TestBed.get(NoopInterceptor);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('intercept', () => {
    it('makes expected calls', () => {
      // tslint:disable-next-line: deprecation
      const httpHandlerStub: HttpHandler = TestBed.get(HttpHandler);
      // tslint:disable-next-line: deprecation
      const httpRequestStub: HttpRequest<any> = TestBed.get(HttpRequest);
      spyOn(httpHandlerStub, 'handle').and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(httpHandlerStub.handle).toHaveBeenCalled();
    });
  });
});
