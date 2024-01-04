import { SharedModule } from './../../../shared/shared.module';
import { ProductResponse, ProductApiAlsoResponse, ProductColorAndSizesResponse } from '../../../shared/models';
import { ProductService } from './../../../data/service/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})

export class ProductDetailsComponent implements OnInit {
  productDetails: ProductResponse | null = null; // Initialize to null or default value
  responseData: ProductApiAlsoResponse | null = null; // Initialize to null or default value
  productColorAndSizesResponse: ProductColorAndSizesResponse | undefined;

  productId: any = '7a734dd3-3cf8-4ec1-b7ad-7a8912d0a03b';
  constructor(private productService: ProductService) { }
  ngOnInit(): void {
    this.getProductDetails();
    this.getProductAlsoDetails();
    this.getProductColorAndSizes();
  }
  getProductDetails(): void {
    this.productService.getProductDetails(this.productId)
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
  getProductAlsoDetails() {
    this.productService.getProductAlsoLikeDetails(this.productId).subscribe(
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
  getProductColorAndSizes(){
    this.productService.getProductColorAndSizes(this.productId)
    .subscribe(
      (data: ProductColorAndSizesResponse) => {
        this.productColorAndSizesResponse = data;
        console.log('Product Color and Sizes Response:', data);
      },
      error => console.error('Error:', error)
    );
  }
}

