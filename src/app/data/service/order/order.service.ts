import { environment } from './../../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order, OrderItem } from '../../../shared/models/order.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
   order = new BehaviorSubject<Order | null>(null);
  private orderNumberSource = new BehaviorSubject<number | null>(null);

  private apiEndPoint = '';


  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
  }

  placeOrder(orderData: any) {
    const url = `${this.apiEndPoint}/order`;

    // Define headers
    const httpOptions = {
      headers: new HttpHeaders({
        'x-Version': '2',
      })
    };

    // Use the httpOptions in the POST request
    return this.http.post(url, orderData, httpOptions);
  }

  getOrder() {
    console.log(this.order.value); // Logs the current value of the BehaviorSubject
    return this.order.asObservable();
  }
  addOrderItem(orderItem: OrderItem) {
    const currentOrder = this.order.value;
    if (currentOrder) {
      currentOrder.orderItems.push(orderItem);
      this.order.next(currentOrder);
    }
  }
  // Getter to expose the orderNumber as an observable for components to subscribe
  getOrderNumber() {
    return this.orderNumberSource.asObservable();
  }

  // Method to update the orderNumber
  setOrderNumber(orderNumber: number) {
    this.orderNumberSource.next(orderNumber);
  }
  private initializeOrderIfNeeded() {
    if (!this.order.value) {
      // Initialize a new Order object with default values
      // You may need to adjust this according to how your Order constructor is defined
      // or how you want to initialize the default state of an Order
      const defaultOrder = new Order(
        0, // Default pickUpTime
        0, // Default paymentMethod
        0, // Default addressId
        '', // Default voucherCode
        0, // Default totalOrderPrice
        0, // Default shippingFees
        []  // Default orderItems
      );
      this.order.next(defaultOrder);
    }
  }
  setPickUpTime(pickUpTime: number) {
    this.initializeOrderIfNeeded();
    const currentOrder = this.order.value; // At this point, currentOrder is guaranteed to be non-null
    currentOrder!.pickUpTime = pickUpTime; // The "!" is to assure TypeScript that currentOrder is not null
    this.order.next(currentOrder);
  }


  setPaymentMethod(paymentMethod: number) {
    this.initializeOrderIfNeeded();
    const currentOrder = this.order.value!;
    currentOrder.paymentMethod = paymentMethod;
    this.order.next(currentOrder);
  }

  setAddressId(addressId: number) {
    this.initializeOrderIfNeeded();
    const currentOrder = this.order.value!;
    currentOrder.addressId = addressId;
    this.order.next(currentOrder);
  }

  setVoucherCode(voucherCode: string) {
    this.initializeOrderIfNeeded();
    const currentOrder = this.order.value!;
    currentOrder.voucherCode = voucherCode;
    this.order.next(currentOrder);
  }

  setTotalOrderPrice(totalOrderPrice: number) {
    this.initializeOrderIfNeeded();
    const currentOrder = this.order.value!;
    currentOrder.totalOrderPrice = totalOrderPrice;
    this.order.next(currentOrder);
  }

  setShippingFees(shippingFees: number) {
    this.initializeOrderIfNeeded();
    const currentOrder = this.order.value!;
    currentOrder.shippingFees = shippingFees;
    this.order.next(currentOrder);
  }


  private updateOrder(order: Order) {
    // Here you could also perform validations or additional logic before updating the order
    this.order.next(order);
  }
}
