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

  userSelectedQuantity: number = 1;

  ngOnChanges() {
    // Update user-selected quantity when the input quantity changes
    this.userSelectedQuantity = this.quantity;
  }

  increaseQuantity() {
    this.userSelectedQuantity++;
    this.emitQuantityChange();
  }

  decreaseQuantity() {
    if (this.userSelectedQuantity > 1) {
      this.userSelectedQuantity--;
      this.emitQuantityChange();
    }
  }

  private emitQuantityChange() {
    this.quantityChange.emit(this.userSelectedQuantity);
  }
}
