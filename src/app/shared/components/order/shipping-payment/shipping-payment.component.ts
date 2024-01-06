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
}
