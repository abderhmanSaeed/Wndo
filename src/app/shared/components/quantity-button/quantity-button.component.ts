import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
type ClassesProps = {
  base?: string
}
@Component({
  selector: 'app-quantity-button',
  templateUrl: './quantity-button.component.html',
  styleUrls: ['./quantity-button.component.scss']
})
export class QuantityButtonComponent implements OnInit {
  @Input() classes?: ClassesProps;
  @Input() quantity: number = 1;
  @Input() disabledAddQuantity: boolean = false;
  @Input() maxQuantity: number = Infinity; // Add this line
  @Input() productId!: string;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() quantityChangeObject: EventEmitter<{ quantity: number; productId: string }> = new EventEmitter();

  userSelectedQuantity: number = 1;

  ngOnInit(): void {
    // Emit the initial quantity value when the component initializes
    this.emitQuantityChange();
  }
  
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
    this.quantityChangeObject.emit({
      quantity: this.userSelectedQuantity,
      productId: this.productId
    });
  }
}
