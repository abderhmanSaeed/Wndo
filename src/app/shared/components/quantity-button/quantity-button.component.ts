import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quantity-button',
  templateUrl: './quantity-button.component.html',
  styleUrl: './quantity-button.component.scss'
})
export class QuantityButtonComponent {
  @Input() quantity: number = 1;
  @Input() disabledAddQuantity: boolean = false;
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  increaseQuantity() {
    this.quantity++;
    this.emitQuantityChange();
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      this.emitQuantityChange();
    }
  }

  private emitQuantityChange() {
    this.quantityChange.emit(this.quantity);
  }
}
