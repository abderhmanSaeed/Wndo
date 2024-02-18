import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { Subscription } from 'rxjs';
import { OrderService } from '../../../../data/service/order/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmed-modal',
  templateUrl: './order-confirmed-modal.component.html',
  styleUrl: './order-confirmed-modal.component.scss'
})
export class OrderConfirmedModal implements OnInit, OnDestroy {
  orderNumber: number | null = null;
  private subscription = new Subscription();
  constructor(private modalService: ModalService, private orderService: OrderService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscription.add(
      this.orderService.getOrderNumber().subscribe((number) => {
        this.orderNumber = number;
      })
    );
  }

  navigateTrackOrder() {
    this.router.navigate(['/product/orderProcess', { orderNumber: this.orderNumber }]);
    this.close();

  }
  close() {
    this.modalService.close();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
