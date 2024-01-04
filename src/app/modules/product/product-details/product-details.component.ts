import { ProductResponse } from '../../../shared/models/product';
import { ProductService } from './../../../data/service/product/product.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  productDetails: ProductResponse | null = null; // Initialize to null or default value

  constructor(private productService: ProductService) {}
  getProductDetails(productId: string): void {
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
}
