import { AuthService } from './../../data/service/auth/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Get the authentication token from the AuthService
    const token = this.authService.getToken();
    console.log(token);
    // Clone the request and set the necessary headers
    request = request.clone({
      setHeaders: {
        Authorization: token ? `Bearer ${token}` : '',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': 'https://almansoroffice.net',
        'Access-Control-Allow-Method': 'OPTIONS,POST,GET',
        'Lang': 'ar'
      }
    });

    // Continue with the modified request
    return next.handle(request);
  }
}
