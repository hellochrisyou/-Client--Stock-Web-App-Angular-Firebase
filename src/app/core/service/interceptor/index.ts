import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { CachingInterceptor } from './caching.interceptor';
import { EnsureHttpsInterceptor } from './convert-https.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { NoopInterceptor } from './noop.interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: NoopInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: EnsureHttpsInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },
];