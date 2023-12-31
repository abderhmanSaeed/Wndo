import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-shipping-payment',
  templateUrl: './shipping-payment.component.html',
  styleUrl: './shipping-payment.component.scss',
})
export class ShippingPaymentComponent {
  constructor(private modalService: ModalService) {}
  cities = [
    { label: 'Cairo', value: 'cairo' },
    { label: 'Alex', value: 'alex' },
  ];

  paymentMethods = [
    {
      label: 'Cash on Delievery',
      name: 'cash',
      value: 'cash',
      desc: 'Extra fee will be applied',
      children: '<i class="fa-solid fa-wallet"></i>',
    },
    {
      label: 'Credit Card',
      name: 'creditCard',
      value: 'creditCard',
      desc: '',
      children: '<i class="fa-regular fa-credit-card"></i>',
    },
  ];


  shippingTimes = [
    {
      label: 'Any time',
      name: 'anyTime',
      value: 'any',

    },
    {
      label: 'Morning 9 am - 2 pm',
      name: 'morning',
      value: 'morning',
     },
     {
      label: 'Evening 2 pm - 8 pm',
      name: 'evening',
      value: 'evening',
     },
  ];

// //Modal
//   @ViewChild('temporaryPasswordModal',  { static: true, read: ViewContainerRef })
//   vcr!: ViewContainerRef;

//   openModalTemporaryPassword(view: TemplateRef<Element>) {
//     this.modalService.open(this.vcr, view , {
//       animations: {
//         modal: {
//           enter: 'enter-slide-down 0.8s',
//         },
//         overlay: {
//           enter: 'fade-in 0.8s',
//           leave: 'fade-out 0.3s forwards',
//         },
//       },
//       size: {
//         width: '36rem',
//       },
//     });
//   }

//   close() {
//     this.modalService.close();
//   }
}
