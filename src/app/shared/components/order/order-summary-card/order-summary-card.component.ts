import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-summary-card',
  templateUrl: './order-summary-card.component.html',
  styleUrl: './order-summary-card.component.scss'
})
export class OrderSummaryCardComponent implements OnInit {
  @Input() order!: any

  constructor() { }

  ngOnInit(): void {
  }

}
