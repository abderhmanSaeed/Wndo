import {
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
      label: "View Details",
      value: "viewDetails"
    },
    {
      label: "Tracking Order",
      value: "trackingOrder"
    },
    {
      label: "Cancel Order",
      value: "cancelOrder"
    }]

  getIOrderItemState(item: any): string {
    // Check if the status exists in orderStatistics

    switch (item.itemState) {
      case OrderItemState.OrderPlaced:
        return 'text-lightBlue-500';
      case OrderItemState.Shipping:
        return 'text-orange-700';
      case OrderItemState.PickUpOnTheWay:
        return 'text-orange-700';
      case OrderItemState.PickUp:
        return 'text-orange-700';
      case OrderItemState.DeliveryOnTheWay:
        return 'text-orange-700';
      case OrderItemState.Delivered:
        return 'text-green-600';
      case OrderItemState.Canceled:
        return 'text-red-600';
      case OrderItemState.Refund:
        return 'text-red-600';
      case OrderItemState.Returned:
        return 'text-yellow-500';
      // Add more cases for other enum values
      default:
        return 'Unknown State';
    }

  }
  // New method to get the enum value for itemState
  getOrderItemStateLabel(item: any): string  {

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

  getStyle(status: string) {
    switch (status) {
      case 'ordered':
        return {
          textColor: 'text-lightBlue-500',
        };
      case 'shipping':
        return {
          textColor: 'text-orange-700',
        };
      case 'delivered':
        return {
          textColor: 'text-green-600',
        };

      case 'returned':
        return {
          textColor: 'text-yellow-500',
        };
      case 'cancelled':
        return {
          textColor: 'text-red-600',
        };
      default:
        return {
          textColor: '',
        };
    }
  }


}
