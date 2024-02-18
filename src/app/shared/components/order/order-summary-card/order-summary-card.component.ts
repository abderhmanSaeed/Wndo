import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ShippingFessService } from '../../../../data/service/shippeng-fees/shipping-fess.service';
import { Subscription } from 'rxjs';
import { OrderService } from '../../../../data/service/order/order.service';

@Component({
  selector: 'app-order-summary-card',
  templateUrl: './order-summary-card.component.html',
  styleUrl: './order-summary-card.component.scss'
})
export class OrderSummaryCardComponent implements OnInit , OnDestroy{
  @Input() order!: any
  @Input() totalDetails!: any
  @Input() checkout: boolean = false;
  shippingFee: number = 0;
  private subscriptions = new Subscription();


  constructor(private shippingFessService: ShippingFessService, private orderService: OrderService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.shippingFessService.getShippingFee().subscribe(fee => {
        this.shippingFee = fee;
      })
    );
    this.subscriptions.add(this.orderService.getOrder().subscribe(
      order => console.log(order) // Logs the current order
    ));
  }
  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.subscriptions.unsubscribe();
  }
}
