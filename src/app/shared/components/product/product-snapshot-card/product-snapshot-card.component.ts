import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-snapshot-card',
  templateUrl: './product-snapshot-card.component.html',
  styleUrl: './product-snapshot-card.component.scss'
})
export class ProductSnapshotCardComponent {
  @Input() product: any;
}
