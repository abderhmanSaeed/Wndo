import { OrderState } from './../../../models/my-orders.model';
import { OrderStateService } from './../../../services/order-state.service';
import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
} from '@angular/core';
import { OrderItemState } from '../../../models';

@Component({
  selector: 'app-my-order-card',
  templateUrl: './my-order-card.component.html',
  styleUrl: './my-order-card.component.scss',
})
export class MyOrderCardComponent {
  urlPreview: any;

  index = 0;

  @Input() product: any;

  dropdownactions: any = [
    {
      label: 'View Details',
      value: 'viewDetails',
    },
    {
      label: 'Tracking Order',
      value: 'trackingOrder',
    },
    {
      label: 'Cancel Order',
      value: 'cancelOrder',
    },
  ];

  constructor(private orderStateService: OrderStateService) {}

  getTextColorClass(item: any): string {
    return this.orderStateService.getIOrderItemState(item);
  }

  getBorderColorClass(item: any): string {
    return this.orderStateService.getIOrderItemBorderColorState(item);
  }

  // New method to get the enum value for itemState
  getOrderItemStateLabel(item: any): string {
    switch (item.itemState) {
      case OrderItemState.OrderPlaced:
        return 'Order Placed';
      case OrderItemState.Shipping:
        return 'Shipping';
      case OrderItemState.PickUpOnTheWay:
        return 'Pick Up On The Way';
      case OrderItemState.PickUp:
        return 'Pick Up';
      case OrderItemState.DeliveryOnTheWay:
        return 'Delivery On TheWay';
      case OrderItemState.Delivered:
        return 'Delivered';
      case OrderItemState.Canceled:
        return 'Canceled';
      case OrderItemState.Refund:
        return 'Refund';
      case OrderItemState.Returned:
        return 'Returned';
      // Add more cases for other enum values
      default:
        return 'Unknown State';
    }
  }
}
