import { Component } from '@angular/core';
import { MyOrdersService } from '../../../../data/service/my-orders/my-orders.service';
import { ModalService } from '../../modal/modal.service';
import { ModalDataService } from '../../modal/modal.data.service';
export enum CancellationReason {
  DeliveryDateChanged = 0,
  ProductNotRequiredAnymore = 1,
  BadReviewFromFriends = 2,
  Other = 3
}

type OptionProps = {
  label: string,
  value: string,
  name: string,
  desc?: string,
  children?: any
}
@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrl: './cancel-order.component.scss'
})
export class CancelOrderComponent {
  defaultReasonValue: string = CancellationReason.Other.toString(); // Convert the enum value to a string

  refundReasons: OptionProps[] = [
    {
      label: 'Delivery Date Changed',
      value: CancellationReason.DeliveryDateChanged.toString(),
      name: 'DeliveryDateChanged',
      desc: 'The product is being delivered to Date Changed.',
    },
    {
      label: 'Product Not Required Anymore.',
      value: CancellationReason.ProductNotRequiredAnymore.toString(),
      name: 'ProductNotRequiredAnymore',
      desc: 'A similar product Not Required Anymore.',
    },
    {
      label: 'Bad Review From Friends.',
      value: CancellationReason.BadReviewFromFriends.toString(),
      name: 'BadReviewFromFriends',
      desc: 'Bad Review From Friends.',
    },
    {
      label: 'Other.',
      value: CancellationReason.Other.toString(),
      name: 'Other',
      desc: 'My reason for a refund is not listed above.',
    },
  ];
  // Add a property to store the selected reason if necessary
  selectedReason: any = CancellationReason.Other.toString(); // Default to 'Other'

  constructor(private myOrdersService: MyOrdersService, private modalService: ModalService,
    private modalDataService: ModalDataService) { }


  handleChange(newValue: any): void {
    // console.log('Selected Refund Reason:', newValue);
    // Update your component's state or perform other actions based on the new value
    // For example, if you're keeping track of the selected reason in a property:
    this.selectedReason = newValue;
    console.log(this.selectedReason);
  }
  submitCancel() {
    const orderNumber = this.modalDataService.getOrderNumber(); // Example order number
    const cancelReason = Number(this.modalDataService.getSelectedReason()); // Example refund reason
    const itemOrOrder = this.modalDataService.getItemOrOrder(); // Example refund reason
    if (itemOrOrder === 'Order') {
      this.myOrdersService.cancelOrder(orderNumber, cancelReason)
        .subscribe({
          next: (response) => console.log('Refund successful:', response),
          error: (error) => console.error('Refund failed:', error)
        });
    }
    if (itemOrOrder === 'Item') {
      this.myOrdersService.cancelOrderItem(orderNumber, cancelReason)
        .subscribe({
          next: (response) => console.log('Refund successful:', response),
          error: (error) => console.error('Refund failed:', error)
        });
    }
    this.onCloseModal();
  }

  onCloseModal() {
    console.log("close")
    this.modalService.close()
  }
}
