import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../../data/service/auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  // constructor(private authService: AuthService){}
  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   console.log('Interceptor is working!');
  //   console.log(this.authService.getToken());
  //   return next.handle(request);
  // }
  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Log original headers
    console.log('Original Headers:', request.headers);

    // Get the authentication token from the AuthService
    const token = this.authService.getToken();
    console.log('Token:', token);

    // Clone the request and set the necessary headers
    request = request.clone({
      setHeaders: {
        Authorization: token ? 'Bearer ' + token : '',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': 'https://almansoroffice.net',
        'Access-Control-Allow-Method': 'OPTIONS,POST,GET',
        'Lang': 'en'
      }
    });

    // Log modified headers
    console.log('Modified Headers:', request.headers);

    // Continue with the modified request
    return next.handle(request);
  }

}
