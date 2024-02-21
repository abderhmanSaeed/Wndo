import { ShippingFessService } from './../../../../data/service/shippeng-fees/shipping-fess.service';
import { Component, Input } from '@angular/core';
import { ProductResponse, productRecords } from '../../../models';
import { ModalService } from '../../modal/modal.service';
import { ConfirmationModalComponent } from '../../modals/confirmation-modal/confirmation-modal.component';
import { ModalDataService } from '../../modal/modal.data.service';
import { AddProductToCardModalComponent } from '../../modals/add-product-to-card-modal/add-product-to-card-modal.component';
import { ProductService } from '../../../../data/service/product/product.service';
import { EditPRoductToCartModalComponent } from '../../modals/edit-product-to-cart-modal/edit-product-to-cart-modal.component';
import { AuthService } from '../../../../data/service/auth/auth.service';
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
  @Input() productsBackEnd: any | null = null;

  @Input() classes?: ClassProps;
  @Input() showDesc?: boolean = false;
  @Input() hasCustomBorderColor?: boolean = false;
  @Input() hasQuantity?: boolean = true;
  @Input() editOrdelete?: boolean = false;

  productQuantity: number = 0;
   currentLang = this.authService.getCurrentLanguage();

  dropdownactions: any = [
    {
      label:  this.currentLang === 'en' ? 'Edit' : 'تعديل',
      value: 'Edit',
    },
    {
      label:  this.currentLang === 'en' ? 'Delete' : 'حذف',
      value: 'Delete',
    },
  ];
  productDetails: ProductResponse | null = null; // Initialize to null or default value

  constructor(private shippingFessService: ShippingFessService, private modalService: ModalService,
    private modalDataService: ModalDataService, private productService: ProductService, private authService: AuthService,) { }

  // onQuantityChange(quantity: number): void {
  //   if (this.product && this.product.id) {
  //     this.shippingFessService.updateProductQuantity(this.product.id, quantity);
  //   }
  // }

  // In VisualProductSummaryComponent

  getDropdownActions(product: any) {
    // Clone the original dropdown actions to avoid modifying the original array
    let actions = [...this.dropdownactions];
    this.productsBackEnd.forEach((element: any) => {
      if (element.id === product.id) {
        if (element.quantity !== -1) {
          // Conditionally remove the 'Edit ptoduct' action based on product.quantity
          actions = actions.filter(action => action.value !== 'Edit');
        }
      }

    });



    return actions;
  }

  onQuantityChange(event: { quantity: number; productId: string }): void {
    const { quantity, productId } = event;
    // Assuming you have a service method to handle the update
    this.shippingFessService.updateProductQuantity(productId, quantity);
  }

  onDropdownChange(selectedValue: string, productId: any) {
    if (selectedValue === 'Edit') {
      this.getProductDetails(productId);


    }
    if (selectedValue === 'Delete') {
      this.handleDelete(productId);
    }
    console.log("Selected Value:", selectedValue);
    console.log("Selected order Number:", productId);
  }

  getProductDetails(productId: any): void {
    this.productService.getProductDetails(productId)
      .subscribe(
        (data: ProductResponse) => {
          console.log('Product Details:', data);
          this.productDetails = data; // Assign the response to the variable
          this.handleEdit();
          this.modalDataService.setData({ product: data?.responseData });

        },
        error => {
          console.error('Error:', error);
          // Optionally handle error, e.g., display an error message
        }
      );
  }

  handleEdit() {

    this.modalService.open(EditPRoductToCartModalComponent, {
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

  handleDelete(productId: any) {
    this.modalDataService.setProductId({ productId: productId });

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
