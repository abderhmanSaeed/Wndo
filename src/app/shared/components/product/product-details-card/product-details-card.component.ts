import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrl: './product-details-card.component.scss',
})
export class ProductDetailsCardComponent implements OnInit {
  sizeQuantities: any;
  // Product

  @Input() product: any;
  @Input() productColorAndSizesResponse: any;

  @Input() responseData: any;

  productQuantity: number = 0;
  userSelectedQuantity!: number;
  colorWithSizesSelected: any;
  selectedColor: any; // Assuming your color object has a specific type, replace 'any' with the actual type
  selectedSize: any; // Assuming your color object has a specific type, replace 'any' with the actual type

  productColor = [
    {
      color: {
        "id": 36,
        "name": "Dark green",
        "hexaCode": "006400",
        "quantity": -1
      },
      sizes: [
        {
          "id": 4,
          "name": "L",
          "quantity": 4
        },
        {
          "id": 5,
          "name": "XL",
          "quantity": 5
        },
        {
          "id": 6,
          "name": "XXL",
          "quantity": 6
        }
      ]
    },
    {
      color: {
        "id": 37,
        "name": "yellow green",
        "hexaCode": "FFFF00",
        "quantity": -1
      },
      sizes: [
        {
          "id": 5,
          "name": "XXL",
          "quantity": 4
        }
      ]
    },
    {
      color: {
        "id": 38,
        "name": "red green",
        "hexaCode": "006400",
        "quantity": -1
      },
      sizes: [
        {
          "id": 6,
          "name": "L",
          "quantity": 6
        }
      ]
    }
  ]
  colorWithSizes: any;
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.selectedColor = this.productColor[0]; // Assuming productColor is an array
    this.selectedColor = this.product?.colorWithSizes[0]; // Assuming productColor is an array
    if (this.selectedColor) {
      this.logColor(this.selectedColor);
    }
    // You can add additional logic or error checking as needed
  }


  logColor(colorWithSizes: any): void {
    console.log(colorWithSizes);
    this.selectedColor = colorWithSizes;
    this.colorWithSizesSelected = colorWithSizes;
  }
  logSize(size: any): void {
    console.log(size);

    // Check if the size already exists in sizeQuantities, if not, initialize it to 0
    if (this.sizeQuantities > size.quantity && this.userSelectedQuantity > size.quantity) {
      this.productQuantity = size.quantity;

    }
    this.selectedSize = size.id;
    this.sizeQuantities = size.quantity;

    // You can add more logic or use this data as needed
  }
  onQuantityChange(newQuantity: number): void {
    // Update your logic here based on the new quantity
    // For example, you can check if newQuantity > sizeQuantities and update accordingly
    this.userSelectedQuantity = newQuantity;
  }


}
