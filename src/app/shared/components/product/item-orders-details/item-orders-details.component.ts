import { Component, Input } from '@angular/core';

type ClassProps = {
  base?: string,
  baseBorderColor?: string
}
@Component({
  selector: 'app-item-orders-details',
  templateUrl: './item-orders-details.component.html',
  styleUrl: './item-orders-details.component.scss'
})
export class ItemOrdersDetailsComponent {
  @Input() order: any | null = null;
  @Input() classes?: ClassProps;
  @Input() showDesc?: boolean = false;
  @Input() hasCustomBorderColor?: boolean = false;
  @Input() hasQuantity?: boolean = true;

  productQuantity: number = 0;
}
