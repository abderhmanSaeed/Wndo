import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-header-of-page',
  templateUrl: './header-of-page.component.html',
  styleUrl: './header-of-page.component.scss'
})
export class HeaderOfPageComponent implements OnInit {
  @Input() seller!: any;
  isProductOffersRoute: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(queryParams => {
      this.isProductOffersRoute = 'sellerId' in queryParams;
    });
  }

  logSellerId() {
    let sellerId = this.seller?.id;
    // Only navigate if not on the productOffers route
    if (!this.isProductOffersRoute) {
      // Navigate to the product/productOffers route with seller ID
      this.router.navigate(['/product/productOffers', { sellerId: sellerId }]);    }
  }


}
