import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs'; import { ShippingFessService } from '../../../../data/service/shippeng-fees/shipping-fess.service';
import { OrderService } from '../../../../data/service/order/order.service';
import { OrderItem } from '../../../models/order.models';
import { ModalService } from '../../modal/modal.service';
import { EditPaymentComponent } from '../../modals/edit-payment/edit-payment.component';
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
  code: any;

  constructor(private shippingFessService: ShippingFessService, private orderService: OrderService, private modalService: ModalService) { }

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
      this.orderItems = this.order.orderItems; // Initialize or clear the array

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
          // this.orderItems.push(orderItem);
          this.orderService.addOrderItem(orderItem);
        }
      });
    }
  }
  onNameChanged(code: string) {
    this.code = code;
  }

  validateVoucher(): void {
    this.orderService.validateVoucher(this.code, this.order.totalOrderPrice - this.order.shippingFees, this.order.shippingFees)
      .subscribe(
        response => {
          // Handle successful response here
          console.log('Voucher validated:', response);
        },
        error => {
          // Handle error response here
          console.error('Error validating voucher:', error);
        }
      );
  }

  EditPaymentMethod() {

    this.modalService.open(EditPaymentComponent, {
      animations: {
        modal: {
          enter: 'enter-slide-down 0.8s',
        },
        overlay: {
          enter: 'fade-in 0.8s',
          leave: 'fade-out 0.3s forwards',
        },
      },
      size: {
        width: '36rem',
      },
    });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.subscription.unsubscribe();
  }
}
