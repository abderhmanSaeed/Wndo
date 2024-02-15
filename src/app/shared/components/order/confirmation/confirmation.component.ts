import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';import { ShippingFessService } from '../../../../data/service/shippeng-fees/shipping-fess.service';
import { OrderService } from '../../../../data/service/order/order.service';
import { OrderItem } from '../../../models/order.models';
type ClassesProps = {
  base?: string
}
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent implements OnInit, OnDestroy {
  @Input() haveACoupon: boolean = false;
  @Input() classes?: ClassesProps;

   address: any; // To hold the current address
   order: any;
   orderItems: OrderItem[] = [];
  private subscription = new Subscription();

  constructor(private shippingFessService: ShippingFessService, private orderService: OrderService) {}

  ngOnInit() {
    // Subscribe to the address observable to listen for changes
    this.subscription.add(this.shippingFessService.getAddress().subscribe(
      (address) => {
        this.address = address;
      }
    ));

    this.subscription.add(this.orderService.getOrder().subscribe(
      (order) => {
        this.order = order;
        console.log(order);
      }
    ));
    this.loadOrderItems();
  }
  loadOrderItems(): void {
    const productsJson = localStorage.getItem('products');
    if (productsJson) {
      const products = JSON.parse(productsJson);
      this.orderItems = []; // Initialize or clear the array

      products.forEach((product: any) => {
        // Check if an item with the same productId already exists in the orderItems array
        const existingItemIndex = this.orderItems.findIndex(item => item.productId === product.id);

        if (existingItemIndex === -1) { // Item not found, -1 indicates no match
          const orderItem = new OrderItem(
            product.id,
            product.sellerId,
            product.sizeId,
            product.colorId,
            product.quantity,
          );
          // Add orderItem to the array
          this.orderItems.push(orderItem);
          this.orderService.addOrderItem(orderItem);
        }
      });
    }
  }


  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.subscription.unsubscribe();
  }
}
