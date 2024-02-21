import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { SuccessComponent } from './success/success.component';
import { FailComponent } from './fail/fail.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    SuccessComponent,
    FailComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SharedModule
  ]
})
export class PaymentModule { }
