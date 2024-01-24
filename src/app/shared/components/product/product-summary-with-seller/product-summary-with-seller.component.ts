import { Component, Input } from '@angular/core';
import { OrderItemState } from '../../../models';

type ClassProps = {
  base?: string;
};
@Component({
  selector: 'app-product-summary-with-seller',
  templateUrl: './product-summary-with-seller.component.html',
  styleUrl: './product-summary-with-seller.component.scss',
})
export class ProductSummaryWithSellerComponent {
  @Input() product: any | null = null;
  @Input() classes?: ClassProps;
  @Input() showDesc?: boolean = false;
  @Input() borderStartColor?: string = 'border-primary-500';

  productQuantity: number = 0;


  // Styles
  getIOrderItemState(item: any): any {
    // Check if the status exists in orderStatistics
    switch (item) {
      case OrderItemState.OrderPlaced:
        return {textColor: 'text-lightBlue-500', bgColor: 'bg-lightBlue-500'};
      case OrderItemState.Shipping:
        return { textColor: 'text-orange-700', bgColor: 'bg-orange-700'};
      case OrderItemState.PickUpOnTheWay:
        return { textColor: 'text-orange-700', bgColor: 'bg-orange-700'};
      case OrderItemState.PickUp:
        return { textColor: 'text-orange-700', bgColor: 'bg-orange-700'};
      case OrderItemState.DeliveryOnTheWay:
        return { textColor: 'text-orange-700', bgColor: 'bg-orange-700'};
      case OrderItemState.Delivered:
        return { textColor: 'text-green-600', bgColor: 'bg-green-600'};
      case OrderItemState.Canceled:
        return { textColor: 'text-red-600', bgColor: 'bg-red-600'};
      case OrderItemState.Refund:
        return { textColor: 'text-red-600', bgColor: 'bg-red-600'};
      case OrderItemState.Returned:
        return { textColor: 'text-yellow-500', bgColor: 'bg-yellow-500'};
      // Add more cases for other enum values
      default:
        return 'Unknown State';
    }
  }

  // New method to get the enum value for itemState
  getOrderItemStateLabel(item: any): string {
    switch (item) {
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
