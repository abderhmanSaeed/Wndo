import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SvgIconComponent } from 'angular-svg-icon';
import { OrderStateService } from '../../../shared/services/order-state.service';

@Component({
  selector: 'app-my-orders-details',
  templateUrl: './my-orders-details.component.html',
  styleUrl: './my-orders-details.component.scss',
  standalone: true,
  imports: [SharedModule, SvgIconComponent],
})
export class MyOrdersDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute, private orderStateService: OrderStateService) { }


    getTextColorClass(item: any): string {
      return this.orderStateService.getIOrderItemState(item);
    }

    getBorderColorClass(item: any): string {
      return this.orderStateService.getIOrderItemBorderColorState(item);
    }

    products: any[] = [
      {
        "orderNumber": 100631,
        "orderState": 1,
        "price": 213.5,
        "noOfItems": 1,
        "createdAt": "09 December, 04 PM",
        "canBeRefunded": false,
        "isCancel": true,
        "items": [
          {
            "name": "باليت هايلايتر مايت سينما",
            "itemState": 1
          }
        ],
        hexColor: "006400",
        id: "7a734dd3-3cf8-4ec1-b7ad-7a8912d0a03b",
        image: "https://wndoprobucket.s3.eu-west-3.amazonaws.com/50caa500-eced-4803-9800-2fac3798ab6b.jpg",
        name: "385",
        priceAfterDiscount: 0,
        quantity: 5,
        size: "XL",
        sizeQuantity: 5,
        totalPrice: 385,
        seller: {
          name: "more beauty",
          image: "data:image/png;base64,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"
        }
      }

    ];

    displayProducts: any[] = [];

  ngOnInit(): void {
    const orderNumber = this.route.snapshot.paramMap.get('orderNumber');
    console.log(`order ditais order Number is ${orderNumber}`);

    this.displayProducts = this.products.map(product => ({
      ...product,
      image: product.images[0]
    }));
  }





}
