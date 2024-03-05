import { Component } from '@angular/core';
import { MyOrdersService } from '../../../../data/service/my-orders/my-orders.service';
import { ModalService } from '../../modal/modal.service';
import { ModalDataService } from '../../modal/modal.data.service';
import { AuthService } from '../../../../data/service/auth/auth.service';
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
  currentLang = this.authService.getCurrentLanguage();
  requestAdmin: boolean = false;
  requestMessage: any;

  cancelReasons: OptionProps[] = [
    {
      label: this.currentLang === 'en' ? 'Delivery Date Changed' : 'تغير موعد التسليم',
      value: CancellationReason.DeliveryDateChanged.toString(),
      name: 'DeliveryDateChanged',
      desc: this.currentLang === 'en' ? 'The delivery date has been changed.' : 'تم تغيير موعد التسليم للمنتج.',
    },
    {
      label: this.currentLang === 'en' ? 'Product Not Required Anymore.' : 'المنتج لم يعد مطلوبًا.',
      value: CancellationReason.ProductNotRequiredAnymore.toString(),
      name: 'ProductNotRequiredAnymore',
      desc: this.currentLang === 'en' ? 'The product is no longer required.' : 'المنتج لم يعد مطلوبًا بعد الآن.',
    },
    {
      label: this.currentLang === 'en' ? 'Bad Review From Friends.' : 'تقييم سيئ من الأصدقاء.',
      value: CancellationReason.BadReviewFromFriends.toString(),
      name: 'BadReviewFromFriends',
      desc: this.currentLang === 'en' ? 'Received a bad review from friends.' : 'حصلت على تقييم سيئ من الأصدقاء.',
    },
    {
      label: this.currentLang === 'en' ? 'Other.' : 'أخرى.',
      value: CancellationReason.Other.toString(),
      name: 'Other',
      desc: this.currentLang === 'en' ? 'My reason for cancellation is not listed above.' : 'سبب الإلغاء الخاص بي غير مدرج أعلاه.',
    },
  ];

  // Add a property to store the selected reason if necessary
  selectedReason: any = CancellationReason.Other.toString(); // Default to 'Other'

  constructor(private myOrdersService: MyOrdersService, private modalService: ModalService,
    private modalDataService: ModalDataService, private authService: AuthService) { }


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
          next: (response: any) => {
            // Here you check if the response object has the property indicating success
            // You might need to adjust the 'success' property based on how your actual response object is structured
            if (response && response.isSuccess) {
              this.requestAdmin = true;

              console.log('cancelled successful:', response);
              // Handle successful refund here, for example, by updating the UI or notifying the user
            } else {
              this.requestAdmin = true;
              this.requestMessage = response.errorMessage;
              console.error('cancelled was processed but did not meet success criteria:', response);
              // Handle the case where the refund process did something unexpected
            }
          },
          error: (error) => {

            console.error('cancelled failed:', error);
            // Handle the error scenario, for example, by displaying an error message to the user
          }
        });
    }
    if (itemOrOrder === 'Item') {
      this.myOrdersService.cancelOrderItem(orderNumber, cancelReason)
        .subscribe({
          next: (response: any) => {
            // Here you check if the response object has the property indicating success
            // You might need to adjust the 'success' property based on how your actual response object is structured
            if (response && response.isSuccess) {
              this.requestAdmin = true;

              console.log('cancelled successful:', response);
              // Handle successful refund here, for example, by updating the UI or notifying the user
            } else {
              this.requestAdmin = true;
              this.requestMessage = response.errorMessage;
              console.error('cancelled was processed but did not meet success criteria:', response);
              // Handle the case where the refund process did something unexpected
            }
          },
          error: (error) => {
            console.error('cancelled failed:', error);
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
