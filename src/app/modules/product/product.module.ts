import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { OrderProcessComponent } from './order-process/order-process.component';
import { ProductOffersComponent } from './product-offers/product-offers.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductOrdersComponent,
    OrderProcessComponent,
    ProductOffersComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
    ModalModule.forRoot()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductModule { }
