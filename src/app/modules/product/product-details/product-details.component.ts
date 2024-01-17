import { SharedModule } from './../../../shared/shared.module';
import { ProductResponse, ProductApiAlsoResponse, ProductColorAndSizesResponse } from '../../../shared/models';
import { ProductService } from './../../../data/service/product/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  standalone: true,
  imports: [SharedModule, TranslateModule],
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})

export class ProductDetailsComponent implements OnInit {
  productDetails: ProductResponse | null = null; // Initialize to null or default value
  responseData: ProductApiAlsoResponse | null = null; // Initialize to null or default value
  productColorAndSizesResponse: ProductColorAndSizesResponse | undefined;

  // productId: any = '7a734dd3-3cf8-4ec1-b7ad-7a8912d0a03b';
  constructor(private productService: ProductService, private route: ActivatedRoute,) {

  }
  ngOnInit(): void {
    this.init();

  }
  init(): void {
    // Retrieve seller ID from route parameters
    const productId = this.route.snapshot.paramMap.get('productId');
    console.log('Seller ID in ProductOffersComponent:', productId);
    // Your initialization code here
    this.getProductDetails(productId);
    this.getProductAlsoDetails(productId);
    this.getProductColorAndSizes(productId);
  }
  getProductDetails(productId: any): void {
    this.productService.getProductDetails(productId)
      .subscribe(
        (data: ProductResponse) => {
          console.log('Product Details:', data);
          this.productDetails = data; // Assign the response to the variable
        },
        error => {
          console.error('Error:', error);
          // Optionally handle error, e.g., display an error message
        }
      );
  }
  getProductAlsoDetails(productId: any) {
    this.productService.getProductAlsoLikeDetails(productId).subscribe(
      (response: ProductApiAlsoResponse) => {
        if (response.isSuccess && response.statusCode === 200) {
          // Handle the successful response here
          console.log('May Also Like Products:', response.responseData);
          this.responseData = response;
        } else {
          // Handle the error or other status codes
          console.error('Error:', response.errorMessage);
        }
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  getProductColorAndSizes(productId: any) {
    this.productService.getProductColorAndSizes(productId)
      .subscribe(
        (data: ProductColorAndSizesResponse) => {
          this.productColorAndSizesResponse = data;
          console.log('Product Color and Sizes Response:', data);
        },
        error => console.error('Error:', error)
      );
  }
}
