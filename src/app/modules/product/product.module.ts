import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { OrderProcessComponent } from './order-process/order-process.component';
import { ProductOffersComponent } from './product-offers/product-offers.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import {provideClientHydration} from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductOrdersComponent,
    OrderProcessComponent,
    ProductOffersComponent,
    MyOrdersComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
    ModalModule.forRoot(),
  ],
  providers: [provideClientHydration()],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductModule { }
