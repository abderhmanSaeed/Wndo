import { ShippingFessService } from './../../../../data/service/shippeng-fees/shipping-fess.service';
import { Component, Input } from '@angular/core';
import { ProductResponse, productRecords } from '../../../models';
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
  constructor(private shippingFessService: ShippingFessService) { }

  // onQuantityChange(quantity: number): void {
  //   if (this.product && this.product.id) {
  //     this.shippingFessService.updateProductQuantity(this.product.id, quantity);
  //   }
  // }

  // In VisualProductSummaryComponent

  onQuantityChange(event: { quantity: number; productId: string }): void {
    const { quantity, productId } = event;
    // Assuming you have a service method to handle the update
    this.shippingFessService.updateProductQuantity(productId, quantity);
  }



}
