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
import { Router } from '@angular/router';
import { ModalService } from '../../modal/modal.service';
import { RefundOrderComponent } from '../../modals/refund-order/refund-order.component';
import { ModalDataService } from '../../modal/modal.data.service';
import { CancelOrderComponent } from '../../modals/cancel-order/cancel-order.component';


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
    {
      label: 'Refund Order',
      value: 'refundOrder',
    },
  ];

  indexOfItem: number = 0;
  orderNumber: any;

  constructor(private orderStateService: OrderStateService, private router: Router, private modalService: ModalService
    , private modalDataService: ModalDataService) { }

  getTextColorClass(item: any): string {
    return this.orderStateService.getIOrderItemState(item);
  }
  getDropdownActions(product: any) {
    // Clone the original dropdown actions to avoid modifying the original array
    let actions = [...this.dropdownactions];

    // Conditionally remove the 'Cancel Order' action based on product.orderState
    if (!product.isCancel) {
      actions = actions.filter(action => action.value !== 'cancelOrder');
    }
    // Conditionally remove the 'Refund Order' action based on product.orderState
    if (!product.canBeRefunded) {
      actions = actions.filter(action => action.value !== 'refundOrder');
    }

    return actions;
  }

  getBorderColorClass(item: any): string {
    return this.orderStateService.getIOrderItemBorderColorState(item);
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
  onDropdownChange(selectedValue: string, orderNumber: any) {
    if (selectedValue === 'viewDetails') {
      this.router.navigate(['/product/myOrdersDetails', { orderNumber }]);

    }
    if (selectedValue === 'trackingOrder') {
      this.router.navigate(['/product/orderProcess', { orderNumber }]);

    }
    if (selectedValue === 'refundOrder') {
      this.orderNumber = orderNumber;
      this.modalDataService.setItemOrOrder('Order');
      this.openRefundOrderModal();

    }
    if (selectedValue === 'cancelOrder') {
      this.orderNumber = orderNumber;
      this.modalDataService.setItemOrOrder('Order');
      this.openLCancelOrderModal();

    }
    console.log("Selected Value:", selectedValue);
    console.log("Selected order Number:", orderNumber);
  }

  openRefundOrderModal() {
    this.modalDataService.setOrderNumber(this.orderNumber);
    this.modalService.open(RefundOrderComponent, {
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
  openLCancelOrderModal() {
    this.modalDataService.setOrderNumber(this.orderNumber);
    this.modalService.open(CancelOrderComponent, {
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
