import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from '../loader/loader.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs/operators';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoaderService);
  loaderService.showLoader();
  return next(req).pipe(finalize(() => loaderService.hideLoader()));
};
