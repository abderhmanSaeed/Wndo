import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyOrdersService {
  private apiEndPoint = '';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
  }

  myOrders(sellerId?: string, orderStatus?: number): Observable<any> {
    // Request body
    const requestBody: any = {
      sellerId: sellerId || null,
      orderStatus: orderStatus || null,
    };

    // Make the API call
    return this.http.post(`${this.apiEndPoint}/order/buyer-web-orders-history`, requestBody);
  }

  getOrderStatistics(): Observable<any> {
    return this.http.get<any>(`${this.apiEndPoint}/order/buyer-order-statistics`);
  }

  getOrderDetails(orderNumber: string): Observable<any> {
    // Append the orderNumber to the query params
    const url = `${this.apiEndPoint}/order/order-details?orderNumber=${orderNumber}`;
    return this.http.get(url);
  }
}
