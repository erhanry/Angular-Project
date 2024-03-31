import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ErrorService } from './core/error.service';

const { apiUrl } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private errorService: ErrorService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url.startsWith('/api')) {
      request = request.clone({
        url: request.url.replace('/api', apiUrl),
        withCredentials: true,
      });
    }

    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.errorService.setError(err?.error?.message[0]);
        } else if (err.status === 404) {
          this.errorService.setError(err?.error?.message);
        } else {
          this.errorService.setError(err);
        }

        return [err];
      })
    );
  }
}

export const AppInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true,
};
