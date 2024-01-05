import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrl: './product-details-card.component.scss',
})
export class ProductDetailsCardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // Product
  @Input() product: any;
  @Input() productColorAndSizesResponse: any;

  @Input() responseData:  any;

  productQuantity: number = 0;



}
