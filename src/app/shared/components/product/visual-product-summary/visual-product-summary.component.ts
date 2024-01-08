import { Component, Input } from '@angular/core';
type Product =  {
  name: string;
  hexColor:string;
  totalPrice: number;
  priceAfterDiscount: number
}

type ClassProps = {
  base?: string
}
@Component({
  selector: 'app-visual-product-summary',
  templateUrl: './visual-product-summary.component.html',
  styleUrl: './visual-product-summary.component.scss'
})
export class VisualProductSummaryComponent {
  @Input() product:any ;
  @Input() classes?:ClassProps ;
  @Input() showDesc?:boolean = false;

  productQuantity: number = 0;
}
