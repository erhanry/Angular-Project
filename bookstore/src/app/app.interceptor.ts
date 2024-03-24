import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

const { apiUrl } = environment;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

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

    return next.handle(request);
    //Todo
    // .pipe(
    //   catchError((err) => {
    //     if (err.status === 401) {
    //       this.router.navigate(['/auth/login']);
    //     } else {
    //       this.errorService.setError(err);
    //       this.router.navigate(['/error']);
    //     }

    //     return [err];
    //   })
    // );
  }
}

export const AppInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true,
};
