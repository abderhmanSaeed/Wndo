import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrl: './product-details-card.component.scss',
})
export class ProductDetailsCardComponent implements OnInit {
  sizeQuantities: any;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');

  }
  // Product

  @Input() product: any;
  @Input() productColorAndSizesResponse: any;

  @Input() responseData: any;

  productQuantity: number = 0;
  c = [
    {
      "color": {
        "id": 36,
        "name": "Dark green",
        "hexaCode": "006400",
        "quantity": -1
      },
      "sizes": [
        {
          "id": 4,
          "name": "XL",
          "quantity": 5
        }
      ]
    },
    {
      "color": {
        "id": 37,
        "name": "below green",
        "hexaCode": "006400",
        "quantity": -1
      },
      "sizes": [
        {
          "id": 5,
          "name": "XL",
          "quantity": 4
        }
      ]
    },
    {
      "color": {
        "id": 38,
        "name": "red green",
        "hexaCode": "006400",
        "quantity": -1
      },
      "sizes": [
        {
          "id": 6,
          "name": "XL",
          "quantity": 6
        }
      ]
    }
  ]
  logColor(size: any): void {
    console.log(size);

    // Check if the size already exists in sizeQuantities, if not, initialize it to 0
    //  this.productQuantity = size.quantity;
    this.sizeQuantities = size.quantity;

    // You can add more logic or use this data as needed
  }

}
