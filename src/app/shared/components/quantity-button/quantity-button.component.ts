import { Component, EventEmitter, Input, Output } from '@angular/core';
type ClassesProps = {
  base?: string
}
@Component({
  selector: 'app-quantity-button',
  templateUrl: './quantity-button.component.html',
  styleUrls: ['./quantity-button.component.scss']
})
export class QuantityButtonComponent {
  @Input() classes?: ClassesProps;
  @Input() quantity: number = 1;
  @Input() disabledAddQuantity: boolean = false;
  @Input() maxQuantity: number = Infinity; // Add this line
  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();

  userSelectedQuantity: number = 1;

  ngOnChanges() {
    // Update user-selected quantity when the input quantity changes
    this.userSelectedQuantity = this.quantity;
  }

  increaseQuantity() {
    if (this.userSelectedQuantity < this.maxQuantity) {
      this.userSelectedQuantity++;
      this.emitQuantityChange();
    }
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
