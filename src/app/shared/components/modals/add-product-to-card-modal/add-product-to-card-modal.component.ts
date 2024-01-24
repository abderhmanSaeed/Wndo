import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-add-product-to-card-modal',
  templateUrl: './add-product-to-card-modal.component.html',
  styleUrl: './add-product-to-card-modal.component.scss',
})
export class AddProductToCardModalComponent implements OnInit {
  constructor(private modalService: ModalService) {}
  product: any;

  selectedColor: any;
  selectedSize: any;
  colorWithSizesSelected: any;
  size: any;
  sizeQuantities: any;
  productQuantity: number = 0;
  userSelectedQuantity!: number;

  ngOnInit() {
    this.product = {
      id: '7a734dd3-3cf8-4ec1-b7ad-7a8912d0a03b',
      colorWithSizes: [
        {
          color: {
            id: 36,
            name: 'Dark green',
            hexaCode: '006400',
            quantity: -1,
          },
          sizes: [
            {
              id: 4,
              name: 'XL',
              quantity: 5,
            },
          ],
        },
      ],
      sizes: [],
      quantity: -1,
    };
  }

  logColor(colorWithSizes: any): void {
    console.log(colorWithSizes);
    this.selectedColor = colorWithSizes?.color?.id;
    this.colorWithSizesSelected = colorWithSizes;
  }

  logSize(size: any): void {
    this.size = size;
    console.log(size);

    // Check if the size already exists in sizeQuantities, if not, initialize it to 0
    if (
      this.sizeQuantities > size.quantity &&
      this.userSelectedQuantity > size.quantity
    ) {
      this.productQuantity = size.quantity;
    }
    this.selectedSize = size.id;
    this.sizeQuantities = size.quantity;
  }

  onQuantityChange(newQuantity: number): void {
    // Update your logic here based on the new quantity
    // For example, you can check if newQuantity > sizeQuantities and update accordingly
    this.userSelectedQuantity = newQuantity;
  }

  onCloseModal() {
    console.log("close")
    this.modalService.close()
  }
}
