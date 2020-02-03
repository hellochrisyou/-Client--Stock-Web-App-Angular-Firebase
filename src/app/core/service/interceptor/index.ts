import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CachingInterceptor } from './caching.interceptor';
import { EnsureHttpsInterceptor } from './convert-https.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { NoopInterceptor } from './noop.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { HeaderInterceptor } from './header.interceptor';

export const httpInterceptorProviders: any[] = [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: EnsureHttpsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
];

export * from './caching.interceptor';
export * from './convert-https.interceptor';
export * from './logging.interceptor';
export * from './noop.interceptor';
export * from './error.interceptor';
export * from './header.interceptor';
