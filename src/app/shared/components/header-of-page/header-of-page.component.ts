import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header-of-page',
  templateUrl: './header-of-page.component.html',
  styleUrl: './header-of-page.component.scss'
})
export class HeaderOfPageComponent implements OnInit {
  @Input() seller!: any;
  productId: any = '7a734dd3-3cf8-4ec1-b7ad-7a8912d0a03b';
  isProductOffersRoute: boolean = false;

  constructor(private renderer: Renderer2, private el: ElementRef, private route: ActivatedRoute, private router: Router,) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.isProductOffersRoute = paramMap.has('productOffers');
    });
  }

  logSellerId() {
    let sellerId = this.seller?.id;
    if (!sellerId) {
      sellerId = '3e6baab3-d304-435c-63f9-3a0427ec59c8';

    }
    // Only navigate if not on the productOffers route
    if (!this.isProductOffersRoute) {
      // Navigate to the product/productOffers route with seller ID
      this.router.navigate(['/product/productOffers', { sellerId: sellerId }]);
    }
  }


}
