import { TestBed } from '@angular/core/testing';
import { HttpRequest } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';
import { HeaderInterceptor } from './header.interceptor';
describe('HeaderInterceptor', () => {
  let service: HeaderInterceptor;
  beforeEach(() => {
    const httpRequestStub = () => ({ clone: object => ({}) });
    const httpHandlerStub = () => ({ handle: req => ({}) });
    TestBed.configureTestingModule({
      providers: [
        HeaderInterceptor,
        { provide: HttpRequest, useFactory: httpRequestStub },
        { provide: HttpHandler, useFactory: httpHandlerStub }
      ]
    });
    service = TestBed.get(HeaderInterceptor);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('intercept', () => {
    it('makes expected calls', () => {
      // tslint:disable-next-line: deprecation
      const httpRequestStub: HttpRequest<any> = TestBed.get(HttpRequest);
      // tslint:disable-next-line: deprecation
      const httpHandlerStub: HttpHandler = TestBed.get(HttpHandler);
      spyOn(httpRequestStub, 'clone').and.callThrough();
      spyOn(httpHandlerStub, 'handle').and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(httpRequestStub.clone).toHaveBeenCalled();
      expect(httpHandlerStub.handle).toHaveBeenCalled();
    });
  });
});
