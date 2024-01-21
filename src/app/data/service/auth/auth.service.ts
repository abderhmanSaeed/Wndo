import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private userNameSubject = new BehaviorSubject<string | null>(null);
  private tokenSubject = new BehaviorSubject<string | null>(null);

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();
  userName$ = this.userNameSubject.asObservable();
  token$ = this.tokenSubject.asObservable();

  constructor() { }

  setAuthenticated(isAuthenticated: boolean): void {
    this.isAuthenticatedSubject.next(isAuthenticated);
  }

  setUserName(userName: string | null): void {
    this.userNameSubject.next(userName);
  }

  setToken(token: string): void {
    localStorage.setItem('token', token);
    this.tokenSubject.next(token);
  }

  getToken(): string | null {
    try {
      const tokenLocalStorage = localStorage?.getItem('token');
      if (tokenLocalStorage) {
        // const token = JSON.parse(tokenLocalStorage);
        return JSON.stringify(tokenLocalStorage);
      }
    } catch (error) {
      console.error('Error accessing localStorage:', error);
    }
    return null;
  }



  setRefreshToken(token: string): void {
    return localStorage.setItem('refresh_token', token);
  }


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('user_info');
    localStorage.removeItem('token_expiration');
  }
  // Add a method to clear the token
  clearToken(): void {
    localStorage.removeItem('token');
    this.tokenSubject.next(null);
  }
  isAuth(): boolean {
    // Check if access token is present in local storage
    const accessToken = localStorage.getItem('token');

    // Return true if access token is present, indicating the user is authenticated
    return !!accessToken;
  }
}
