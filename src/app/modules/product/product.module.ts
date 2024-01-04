import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { ProductRoutingModule } from './product-routing.module';
import { ProductDetailsComponent } from './product-details/product-details.component';


@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
  ],
})
export class ProductModule { }
