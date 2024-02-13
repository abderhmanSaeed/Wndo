import { ShippingFessService } from './../../../../data/service/shippeng-fees/shipping-fess.service';
import { Component, Input } from '@angular/core';
import { ProductResponse, productRecords } from '../../../models';
import { ModalService } from '../../modal/modal.service';
import { ConfirmationModalComponent } from '../../modals/confirmation-modal/confirmation-modal.component';
import { ModalDataService } from '../../modal/modal.data.service';
type Product = {
  name: string;
  hexColor: string;
  totalPrice: number;
  priceAfterDiscount: number
}

type ClassProps = {
  base?: string,
  baseBorderColor?: string
}
@Component({
  selector: 'app-visual-product-summary',
  templateUrl: './visual-product-summary.component.html',
  styleUrl: './visual-product-summary.component.scss'
})
export class VisualProductSummaryComponent {
  @Input() product: any | null = null;
  @Input() classes?: ClassProps;
  @Input() showDesc?: boolean = false;
  @Input() hasCustomBorderColor?: boolean = false;
  @Input() hasQuantity?: boolean = true;
  productQuantity: number = 0;

  dropdownactions: any = [
    {
      label: 'Edit',
      value: 'Edit',
    },
    {
      label: 'Delete',
      value: 'Delete',
    },
  ];

  constructor(private shippingFessService: ShippingFessService, private modalService: ModalService, private modalDataService: ModalDataService) { }

  // onQuantityChange(quantity: number): void {
  //   if (this.product && this.product.id) {
  //     this.shippingFessService.updateProductQuantity(this.product.id, quantity);
  //   }
  // }

  // In VisualProductSummaryComponent

  onQuantityChange(event: { quantity: number; productId: string }): void {
    const { quantity, productId } = event;
    // Assuming you have a service method to handle the update
    this.shippingFessService.updateProductQuantity(productId, quantity);
  }

  onDropdownChange(selectedValue: string, id: any) {
    if (selectedValue === 'Edit') {

    }
    if (selectedValue === 'Delete') {
      this.handleConfirm(id);
    }
    console.log("Selected Value:", selectedValue);
    console.log("Selected order Number:", id);
  }

  handleConfirm(id: any) {
    this.modalDataService.setProductId({ productId: id });

    this.modalService.open(ConfirmationModalComponent, {
      animations: {
        modal: {
          enter: 'enter-slide-down 0.8s',
        },
        overlay: {
          enter: 'fade-in 0.8s',
          leave: 'fade-out 0.3s forwards',
        },
      },
      size: {
        width: '36rem',
      },
    });
  }


}
