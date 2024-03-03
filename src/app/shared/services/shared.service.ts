// shared.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  // Create a subject to emit events when the LOGIN button is clicked
  private loginButtonClickedSubject = new Subject<void>();

  // Observable to subscribe to login button clicks
  loginButtonClicked$ = this.loginButtonClickedSubject.asObservable();

  private productsSource = new BehaviorSubject<any[]>([]);
  products$ = this.productsSource.asObservable();

  // Method to notify subscribers that the LOGIN button is clicked
  notifyLoginButtonClicked() {
    this.loginButtonClickedSubject.next();
  }

  updateProducts(products: any[]): void {
    localStorage.setItem('products', JSON.stringify(products));
    this.productsSource.next(products);
  }

  loadProductsFromLocalStorage(): void {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    this.productsSource.next(products);
  }

}
