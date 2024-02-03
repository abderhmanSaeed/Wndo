import { Component } from '@angular/core';
import { MyOrdersService } from '../../../../data/service/my-orders/my-orders.service';
import { ModalService } from '../../modal/modal.service';
import { ModalDataService } from '../../modal/modal.data.service';
export enum RefundReason {
  ProductDeliveredToWrongAddress = 0,
  CheaperAlternativeAvailableWithLessPrice = 1,
  ProductDoesNotMatchMyExpectation = 2,
  // Assuming you might want to add 'Other' as an option in your enum
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
  selector: 'app-refund-order',
  templateUrl: './refund-order.component.html',
  styleUrl: './refund-order.component.scss'
})


export class RefundOrderComponent {
  defaultReasonValue: string = RefundReason.Other.toString(); // Convert the enum value to a string

  refundReasons: OptionProps[] = [
    {
      label: 'Product is being delivered to a wrong address.',
      value: RefundReason.ProductDeliveredToWrongAddress.toString(),
      name: 'ProductDeliveredToWrongAddress',
      desc: 'The product is not being delivered to the correct address.',
    },
    {
      label: 'Cheaper alternative available for lesser price.',
      value: RefundReason.CheaperAlternativeAvailableWithLessPrice.toString(),
      name: 'CheaperAlternativeAvailableWithLessPrice',
      desc: 'A similar product is available at a lower price.',
    },
    {
      label: 'Product doesn\'t match my expectation.',
      value: RefundReason.ProductDoesNotMatchMyExpectation.toString(),
      name: 'ProductDoesNotMatchMyExpectation',
      desc: 'The product does not meet the quality or functionality I expected.',
    },
    {
      label: 'Other.',
      value: RefundReason.Other.toString(),
      name: 'Other',
      desc: 'My reason for a refund is not listed above.',
    },
  ];
  // Add a property to store the selected reason if necessary
  selectedReason: any = RefundReason.Other.toString(); // Default to 'Other'

  constructor(private myOrdersService: MyOrdersService, private modalService: ModalService,
    private modalDataService: ModalDataService) { }


  handleChange(newValue: any): void {
    // console.log('Selected Refund Reason:', newValue);
    // Update your component's state or perform other actions based on the new value
    // For example, if you're keeping track of the selected reason in a property:
    this.selectedReason = newValue;
    console.log(this.selectedReason);
  }
  submitRefund() {
    const orderNumber = this.modalDataService.getOrderNumber(); // Example order number
    const refundReason = this.modalDataService.getSelectedReason(); // Example refund reason

    this.myOrdersService.refundOrder(orderNumber, refundReason)
      .subscribe({
        next: (response) => console.log('Refund successful:', response),
        error: (error) => console.error('Refund failed:', error)
      });
    this.onCloseModal();
  }

  onCloseModal() {
    console.log("close")
    this.modalService.close()
  }
}
