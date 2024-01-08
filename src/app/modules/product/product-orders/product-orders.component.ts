import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-product-orders',
  templateUrl: './product-orders.component.html',
  styleUrl: './product-orders.component.scss',
  standalone: true,
  imports:[SharedModule]
})
export class ProductOrdersComponent {

}
