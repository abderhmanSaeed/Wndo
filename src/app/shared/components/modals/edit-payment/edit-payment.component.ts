import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../../../data/service/auth/auth.service';
import { PaymentType } from '../../../models';
import { OrderService } from '../../../../data/service/order/order.service';
import { Subscription } from 'rxjs';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrl: './edit-payment.component.scss'
})
export class EditPaymentComponent implements OnInit, OnDestroy {
  currentLang = this.authService.getCurrentLanguage();
  currentPaymentMethod: any;
  private subscriptions = new Subscription();

  paymentMethods = [
    {
      label: this.currentLang === 'en' ? 'Cash on Delivery' : 'الدفع عند الإستلام',
      name: 'cash',
      value: PaymentType.Cash,
      desc: this.currentLang === 'en' ? 'Extra fee will be applied' : 'سيتم تطبيق مصاريف إضافية',
      children: '<i class="fa-solid fa-wallet"></i>',
    },
    {
      label: this.currentLang === 'en' ? 'Credit Card' : 'بطاقة الإئتمان',
      name: 'creditCard',
      value: PaymentType.CreditCard,
      desc: '',
      children: '<i class="fa-regular fa-credit-card"></i>',
    },
  ];
  constructor(private modalService: ModalService, private authService: AuthService, private orderService: OrderService) { }
  ngOnInit(): void {



    this.subscriptions.add(
      this.orderService.getOrder().subscribe(order => {
        console.log(order);
        if (order) {
          this.currentPaymentMethod = order.paymentMethod;
        }

      })
    );


  }
  onPaymentMethodChange(selectedValue: any): void {
    if (typeof selectedValue === 'number') {
      console.log('Selected payment method:', selectedValue);
      // this.orderService.setPaymentMethod(selectedValue);
      this.currentPaymentMethod = selectedValue;

      // Handle the payment method change
      // Possibly convert selectedValue to the enum value if needed
    }
  }
  updatePaymentMethod() {
    this.orderService.setPaymentMethod(this.currentPaymentMethod);
    this.modalService.close()

  }

  onCloseModal() {
    console.log("close")
    this.modalService.close()
  }
  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    this.subscriptions.unsubscribe();
  }
}
