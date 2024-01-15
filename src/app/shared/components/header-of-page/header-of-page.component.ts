import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ProductService } from '../../../data/service/product/product.service';
import { ProductResponse } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header-of-page',
  templateUrl: './header-of-page.component.html',
  styleUrl: './header-of-page.component.scss'
})
export class HeaderOfPageComponent implements OnInit {
  productDetails: ProductResponse | null = null; // Initialize to null or default value

  productId: any = '7a734dd3-3cf8-4ec1-b7ad-7a8912d0a03b';
  isProductOffersRoute: boolean = false;

  constructor(private productService: ProductService,
    private renderer: Renderer2, private el: ElementRef,private route: ActivatedRoute, private router: Router,) { }
  ngOnInit(): void {
    this.getProductDetails();
    this.route.paramMap.subscribe(paramMap => {
      this.isProductOffersRoute = paramMap.has('productOffers');
    });
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
  logSellerId() {
    const sellerId = this.productDetails?.responseData?.seller?.id;

    // Only navigate if not on the productOffers route
    if (!this.isProductOffersRoute) {
      // Navigate to the product/productOffers route with seller ID
      this.router.navigate(['/product/productOffers', { sellerId: sellerId }]);
    }
  }

  changeCursorToHand() {
    console.log('changeCursorToHand called');
    // Apply cursor style only if not on the productOffers route
    if (!this.isProductOffersRoute) {
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    } else {
      // Remove the cursor style
      this.renderer.removeStyle(this.el.nativeElement, 'cursor');
    }
  }


}
