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

  refundOrder(orderNumber: number, refundReason: number) {
    const url = `${this.apiEndPoint}/order/refund-order`;
    const body = { orderNumber, refundReason };
    return this.http.post(url, body);
  }

  refundOrderItem(orderItemNumber: number, refundReason: number) {
    const url = `${this.apiEndPoint}/order/refund-order-item`;
    const body = { orderItemNumber, refundReason };
    return this.http.post(url, body);
  }

  cancelOrder(orderNumber: number, refundReason: number) {
    const url = `${this.apiEndPoint}/order/cancel-order`;
    const body = { orderNumber, refundReason };
    return this.http.post(url, body);
  }

  cancelOrderItem(orderItemNumber: number, refundReason: number) {
    const url = `${this.apiEndPoint}/order/cancel-order-item`;
    const body = { orderItemNumber, refundReason };
    return this.http.post(url, body);
  }

  trackOrder(orderNumber: string): Observable<any> {
    // Construct the URL with the orderNumber
    const url = `${this.apiEndPoint}/order/track-order?orderNumber=${orderNumber}`;

    // Perform the GET request and return the observable
    return this.http.get(url);
  }
}
