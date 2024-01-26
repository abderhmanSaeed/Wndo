import { OrderItemState, OrderState } from '../../shared/models';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class OrderStateService {

  constructor() {}

  /**
   * Gets the text color class based on the order item state.
   * @param item The order item.
   * @returns The CSS class for the text color.
   */
  getIOrderItemState(item: any): string {
    switch (item) {
      case OrderItemState.OrderPlaced:
        return 'order-placed-state--textColor';
      case OrderItemState.Shipping:
        return 'order-shipping-state--textColor';
      case OrderItemState.PickUpOnTheWay:
        return 'order-pickUp-state--textColor';
      case OrderItemState.PickUp:
        return 'order-pickUp-state--textColor';
      case OrderItemState.DeliveryOnTheWay:
        return 'order-delivery-state--textColor';
      case OrderItemState.Delivered:
        return 'order-delivered-state--textColor';
      case OrderItemState.Canceled:
        return 'order-canceled-state--textColor';
      case OrderItemState.Refund:
        return 'order-refund-state--textColor';
      case OrderItemState.Returned:
        return 'order-returned-state--textColor';

      default:
        return 'Unknown State';
    }
  }

  /**
   * Gets the border color class based on the order item state.
   * @param item The order item.
   * @returns The SCSS class for the border color.
   */
  getIOrderItemBorderColorState(item: any): string {
       // Check if the status exists in orderStatistics
       switch (item) {
        case OrderState.OrderPlaced:
          return 'order-placed-state--borderColor';
        case OrderState.Shipping:
          return 'order-shipping-state--borderColor';
        case OrderState.Delivered:
          return 'order-delivered-state--borderColor';
        case OrderState.Canceled:
          return 'order-canceled-state--borderColor';
        case OrderState.Refund:
          return 'order-refund-state--borderColor';
        case OrderState.Returned:
          return 'order-returned-state--borderColor';

        default:
          return 'Unknown State';
      }
  }

  /**
   * Gets the background color class based on the order item state.
   * @param item The order item.
   * @returns The SCSS class for the background color.
   */
  getIOrderItemBgColorState(item: any): string {
    switch (item) {
      case OrderItemState.OrderPlaced:
        return 'order-placed-state--bgColor';
      case OrderItemState.Shipping:
        return 'order-shipping-state--bgColor';
      case OrderItemState.PickUpOnTheWay:
        return 'order-pickUp-state--bgColor';
      case OrderItemState.PickUp:
        return 'order-pickUp-state--bgColor';
      case OrderItemState.DeliveryOnTheWay:
        return 'order-delivery-state--bgColor';
      case OrderItemState.Delivered:
        return 'order-delivered-state--bgColor';
      case OrderItemState.Canceled:
        return 'order-canceled-state--bgColor';
      case OrderItemState.Refund:
        return 'order-refund-state--bgColor';
      case OrderItemState.Returned:
        return 'order-returned-state--bgColor';

      default:
        return 'Unknown State';
    }
  }


}
