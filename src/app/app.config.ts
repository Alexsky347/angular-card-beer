import {
  ApplicationConfig,
  InjectionToken,
  importProvidersFrom
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions
} from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  HttpClientModule,
  provideHttpClient,
  withFetch,
  withInterceptors
} from '@angular/common/http';
import { loaderInterceptor } from './core/services/interceptors/loader.interceptor';
import { PRECONNECT_CHECK_BLOCKLIST } from '@angular/common';
export const BACKEND_URL = new InjectionToken<string>('API URL');
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withInterceptors([loaderInterceptor])),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
    { provide: BACKEND_URL, useValue: 'https://api.punkapi.com/v2/beers' },
    {provide: PRECONNECT_CHECK_BLOCKLIST, useValue: 'https://images.punkapi.com'}
  ]
};
