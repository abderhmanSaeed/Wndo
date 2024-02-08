import { environment } from '../../../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiEndPoint = '';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
  }

  // login(requestBody: any): Observable<any> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     }),
  //   };

  //   return this.http.post<any>(`${this.apiEndPoint}/app/user-web/login`, requestBody, httpOptions);
  // }

  login(requestBody: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.post<any>(`${this.apiEndPoint}/user-web/login`, requestBody, httpOptions)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Login failed:', error);
          return throwError('Something went wrong during login.');
        })
      );
  }

  signUp(requestBody: any): Observable<any> {


    return this.http.post(`${this.apiEndPoint}/user-web/sign-up`, requestBody)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Login failed:', error);
          return throwError('Something went wrong during login.');
        })
      );
  }

  forgotPassword(requestBody: any): Observable<any> {


    return this.http.post(`${this.apiEndPoint}/user-web/forget-password`, requestBody)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          console.error('Login failed:', error);
          return throwError('Something went wrong during login.');
        })
      );
  }
}
