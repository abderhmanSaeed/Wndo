import { Component } from '@angular/core';
import { MyOrdersService } from '../../../../data/service/my-orders/my-orders.service';
import { ModalService } from '../../modal/modal.service';
import { ModalDataService } from '../../modal/modal.data.service';
import { AuthService } from '../../../../data/service/auth/auth.service';
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
  requestAdmin: boolean = false;
  currentLang = this.authService.getCurrentLanguage();

  refundReasons: OptionProps[] = [
    {
      label: this.currentLang === 'en' ? 'Product is being delivered to a wrong address.' : 'يتم تسليم المنتج إلى عنوان خاطئ.',
      value: RefundReason.ProductDeliveredToWrongAddress.toString(),
      name: 'ProductDeliveredToWrongAddress',
      desc: this.currentLang === 'en' ? 'The product is not being delivered to the correct address.' : 'المنتج لا يتم تسليمه إلى العنوان الصحيح.',
    },
    {
      label: this.currentLang === 'en' ? 'Cheaper alternative available for lesser price.' : 'هناك بديل أرخص متاح بسعر أقل.',
      value: RefundReason.CheaperAlternativeAvailableWithLessPrice.toString(),
      name: 'CheaperAlternativeAvailableWithLessPrice',
      desc: this.currentLang === 'en' ? 'A similar product is available at a lower price.' : 'هناك منتج مشابه متاح بسعر أقل.',
    },
    {
      label: this.currentLang === 'en' ? 'Product doesn\'t match my expectation.' : 'المنتج لا يتوافق مع توقعاتي.',
      value: RefundReason.ProductDoesNotMatchMyExpectation.toString(),
      name: 'ProductDoesNotMatchMyExpectation',
      desc: this.currentLang === 'en' ? 'The product does not meet the quality or functionality I expected.' : 'المنتج لا يلبي الجودة أو الوظيفة التي توقعتها.',
    },
    {
      label: this.currentLang === 'en' ? 'Other.' : 'أخرى.',
      value: RefundReason.Other.toString(),
      name: 'Other',
      desc: this.currentLang === 'en' ? 'My reason for a refund is not listed above.' : 'سبب طلب الاسترداد الخاص بي ليس مذكورًا أعلاه.',
    },
  ];

  // Add a property to store the selected reason if necessary
  selectedReason: any = RefundReason.Other.toString(); // Default to 'Other'

  constructor(private myOrdersService: MyOrdersService, private modalService: ModalService,
    private modalDataService: ModalDataService, private authService: AuthService) { }


  handleChange(newValue: any): void {
    // console.log('Selected Refund Reason:', newValue);
    // Update your component's state or perform other actions based on the new value
    // For example, if you're keeping track of the selected reason in a property:
    this.selectedReason = newValue;
    console.log(this.selectedReason);
  }
  submitRefund() {
    const orderNumber = this.modalDataService.getOrderNumber(); // Example order number
    const refundReason = Number(this.modalDataService.getSelectedReason()); // Example refund reason
    const itemOrOrder = this.modalDataService.getItemOrOrder(); // Example refund reason
    if (itemOrOrder === 'Order') {
      this.myOrdersService.refundOrder(orderNumber, refundReason)
        .subscribe({
          next: (response: any) => {
            // Here you check if the response object has the property indicating success
            // You might need to adjust the 'success' property based on how your actual response object is structured
            if (response && response.isSuccess) {
              this.requestAdmin = true;

              console.log('Refund successful:', response);
              // Handle successful refund here, for example, by updating the UI or notifying the user
            } else {
              console.error('Refund was processed but did not meet success criteria:', response);
              // Handle the case where the refund process did something unexpected
            }
          },
          error: (error) => {
            console.error('Refund failed:', error);
            // Handle the error scenario, for example, by displaying an error message to the user
          }
        });

    }
    if (itemOrOrder === 'Item') {
      this.myOrdersService.refundOrderItem(orderNumber, refundReason)
        .subscribe({
          next: (response: any) => {
            // Here you check if the response object has the property indicating success
            // You might need to adjust the 'success' property based on how your actual response object is structured
            if (response && response.isSuccess) {
              this.requestAdmin = true;

              console.log('Refund successful:', response);
              // Handle successful refund here, for example, by updating the UI or notifying the user
            } else {
              console.error('Refund was processed but did not meet success criteria:', response);
              // Handle the case where the refund process did something unexpected
            }
          },
          error: (error) => {
            console.error('Refund failed:', error);
            // Handle the error scenario, for example, by displaying an error message to the user
          }
        });

    }

  }

  onCloseModal() {
    console.log("close")
    this.modalService.close()
    window.location.reload();

  }
}
