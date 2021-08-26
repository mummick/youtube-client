import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class QueriesInterceptor implements HttpInterceptor {
  private API_KEY = 'AIzaSyA6AujVbrHG9TWO8V6OKcUBpab5A8vv7Cc';

  private URL_PREFIX = 'https://www.googleapis.com/youtube/v3/';

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(
      request.clone({
        url: `${this.URL_PREFIX}${request.url}`,
        setParams: {
          key: this.API_KEY,
        },
      }),
    );
  }
}
