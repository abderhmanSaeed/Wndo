import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  constructor() { }

  setToken(token:  string):  void {
    return  localStorage.setItem('token', token );
  }
  setRefreshToken(token:  string):  void {
    return  localStorage.setItem('refresh_token', token );
  }
  getToken():  string {
      return localStorage.getItem('token')??"";
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_info');
    localStorage.removeItem('token_expiration');
}

isAuth(): boolean {
  // Check if access token is present in local storage
  const accessToken = localStorage.getItem('token');

  // Return true if access token is present, indicating the user is authenticated
  return !!accessToken;
}
}
