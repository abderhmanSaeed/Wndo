import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrl: './success.component.scss'
})
export class SuccessComponent implements OnInit {
  orderNumber: string | null = null;

  constructor(private route: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.orderNumber = params.get('orderNumber');
    });
  }
  navigateTrackOrder() {
    localStorage.removeItem('products');
    this.router.navigate(['/product/orderProcess', { orderNumber: this.orderNumber }]);

  }
}
