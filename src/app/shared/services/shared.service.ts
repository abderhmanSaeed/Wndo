// shared.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // Create a subject to emit events when the LOGIN button is clicked
  private loginButtonClickedSubject = new Subject<void>();

  // Observable to subscribe to login button clicks
  loginButtonClicked$ = this.loginButtonClickedSubject.asObservable();

  // Method to notify subscribers that the LOGIN button is clicked
  notifyLoginButtonClicked() {
    this.loginButtonClickedSubject.next();
  }

}
