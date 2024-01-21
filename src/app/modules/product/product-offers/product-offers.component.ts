import { SvgIconComponent } from 'angular-svg-icon';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ActivatedRoute } from '@angular/router';
import { SellerProductsOffersService } from './../../../data/service/seller-products-offers/seller-products-offers.service';

@Component({
  selector: 'app-product-offers',
  templateUrl: './product-offers.component.html',
  styleUrl: './product-offers.component.scss',
  standalone: true,
  imports: [SharedModule, SvgIconComponent],
})
export class ProductOffersComponent implements OnInit {
  sellerProducts: any;
  sellerOffers: any;
  selectedTab: string = 'all-products'; // Initial selected tab

  constructor(private route: ActivatedRoute, private SellerProductsOffersService: SellerProductsOffersService) {

  }
  ngOnInit(): void {
    // Retrieve seller ID from route parameters
    const sellerId = this.route.snapshot.paramMap.get('sellerId');
    console.log('Seller ID in ProductOffersComponent:', sellerId);
    this.getSellerProducts(sellerId, false);
    this.getSellerOffers(sellerId, true);
  }

  // Example method to call Seller Products
  getSellerProducts(sellerId: any, isOffers: boolean) {
    // Call the service method
    this.SellerProductsOffersService.getSellerProductsOrOffers(sellerId, isOffers)
      .subscribe(
        (response) => {
          // Handle the API response here
          this.sellerProducts = response?.responseData;
          console.log('API Response: Seller Products', response);
        },
        (error) => {
          // Handle errors here
          console.error('Error:', error);
        }
      );
  }


  // Example method to call Seller Offers
  getSellerOffers(sellerId: any, isOffers: boolean) {
    // Call the service method
    this.SellerProductsOffersService.getSellerProductsOrOffers(sellerId, isOffers)
      .subscribe(
        (response) => {

          // Handle the API response here
          this.sellerOffers = response?.responseData;
          console.log('API Response: Seller Offers', response);
        },
        (error) => {
          // Handle errors here
          console.error('Error:', error);
        }
      );
  }
  selectTab(tabId: string): void {
    this.selectedTab = tabId;
  }

}
