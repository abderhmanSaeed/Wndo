import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SvgIconComponent } from 'angular-svg-icon';

@Component({
  selector: 'app-my-orders-details',
  templateUrl: './my-orders-details.component.html',
  styleUrl: './my-orders-details.component.scss',
  standalone: true,
  imports: [SharedModule, SvgIconComponent],
})
export class MyOrdersDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    const orderNumber = this.route.snapshot.paramMap.get('orderNumber');
    console.log(`order ditais order Number is ${orderNumber}`);
  }

  products: any[] = [];
}
