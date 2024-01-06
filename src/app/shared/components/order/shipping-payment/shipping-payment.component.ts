import { Component } from '@angular/core';

@Component({
  selector: 'app-shipping-payment',
  templateUrl: './shipping-payment.component.html',
  styleUrl: './shipping-payment.component.scss',
})
export class ShippingPaymentComponent {
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
}
