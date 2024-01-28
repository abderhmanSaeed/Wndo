import { Component, Input } from '@angular/core';
import { ProductResponse } from '../../../models';
type Product = {
  name: string;
  hexColor: string;
  totalPrice: number;
  priceAfterDiscount: number
}

type ClassProps = {
  base?: string,
  baseBorderColor?: string
}
@Component({
  selector: 'app-visual-product-summary',
  templateUrl: './visual-product-summary.component.html',
  styleUrl: './visual-product-summary.component.scss'
})
export class VisualProductSummaryComponent {
  @Input() product: any | null = null;
  @Input() classes?: ClassProps;
  @Input() showDesc?: boolean = false;
  @Input() hasCustomBorderColor?: boolean = false;
  @Input() hasQuantity?: boolean = true;

  productQuantity: number = 0;
}
