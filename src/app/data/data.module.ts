import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerProductsOffersService } from './service/seller-products-offers/seller-products-offers.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // Other services
    // ProductService,
    SellerProductsOffersService
  ],
})
export class DataModule { }
