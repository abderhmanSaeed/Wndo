import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { ModalDataService } from '../../modal/modal.data.service';
import { ShippingFessService } from '../../../../data/service/shippeng-fees/shipping-fess.service';
@Component({
  selector: 'app-edit-product-to-cart-modal',
  templateUrl: './edit-product-to-cart-modal.component.html',
  styleUrl: './edit-product-to-cart-modal.component.scss'
})
export class EditPRoductToCartModalComponent implements OnInit {

  constructor(private modalService: ModalService, private modalDataService: ModalDataService, private shippingFessService: ShippingFessService) { }
  product: any;
  productSelected: any;
  showNotification: boolean = false;
  existingProductStore: any;

  selectedColor: any;
  selectedSize: any;
  selectedSizeStore: boolean = false;
  colorWithSizesSelected: any;
  size: any;
  sizeQuantities: any;
  productQuantity: number = 0;
  userSelectedQuantity!: number;

  ngOnInit() {
    const modalData = this.modalDataService.getData();
    if (modalData.product) {
      this.product = modalData.product;
      // Step 1: Retrieve the products from localStorage
      const storedProductsString = localStorage.getItem('products');
      const products = storedProductsString ? JSON.parse(storedProductsString) : [];

      // Step 2: Find the matching product
      const matchingProduct = products.find((product: { id: any; }) => product.id === modalData.product.id);

      // Step 3: Assign the found product to this.product, if found
      if (matchingProduct) {
        this.productSelected = matchingProduct;
        this.product.colorWithSizes.forEach((element: any) => {
          if (element.color.id === this.productSelected.colorId) {
            this.logColor(element);
            if (element.sizes.id === this.productSelected.sizeId) {
              this.selectedSizeStore = true;
            }
          }
        });
        console.log(this.productSelected);

      } else {
        console.log('No matching product found in localStorage');
        // Handle case where no matching product is found, if necessary
      }
    }

  }

  onQuantityChange(event: { quantity: number; productId: string }): void {
    const { quantity, productId } = event;
    this.userSelectedQuantity = quantity;

    // Assuming you have a service method to handle the update
    // this.shippingFessService.updateProductQuantity(productId, quantity);
  }

  logColor(colorWithSizes: any): void {
    console.log(colorWithSizes);
    this.selectedColor = colorWithSizes?.color?.id;
    this.colorWithSizesSelected = colorWithSizes;
    if (colorWithSizes.sizes.length === 0) {
      this.productSelected.colorId = colorWithSizes?.color?.id;
      this.productSelected.sizeQuantity = colorWithSizes?.color?.quantity;
      this.sizeQuantities = colorWithSizes?.color?.quantity;

    }
    else {
      this.productSelected.sizes = colorWithSizes?.sizes;
    }

    if (this.userSelectedQuantity > this.productSelected.sizeQuantity) {
      // this.productSelected.quantity = this.productSelected.quantity
      this.userSelectedQuantity = this.productSelected.sizeQuantity

    }

  }

  logSize(size: any): void {
    this.size = size;
    console.log(size);
    this.selectedSize = size.id;
    this.productSelected.sizeId = size.id;
    this.productSelected.sizeQuantity = size.quantity;
    this.sizeQuantities = size.quantity;
    // Check if the size already exists in sizeQuantities, if not, initialize it to 0

    if (this.userSelectedQuantity > size.quantity) {
      // this.productSelected.quantity = this.productSelected.quantity
      this.userSelectedQuantity = size.quantity

    }


    // if (
    //   this.sizeQuantities > size.quantity &&
    //   this.userSelectedQuantity > size.quantity
    // ) {
    //   this.productQuantity = size.quantity;
    // }
  }

  // onQuantityChange(newQuantity: number): void {
  //   // Update your logic here based on the new quantity
  //   // For example, you can check if newQuantity > sizeQuantities and update accordingly
  //   this.userSelectedQuantity = newQuantity;
  // }

  onCloseModal() {
    console.log("close")
    this.modalService.close()
  }

  // Method to handle the button click and store productId in localStorage
  storeProductInLocalStorageWithoutNavigate(product: any): void {
    // Retrieve the existing products array from localStorage
    const existingProductsString = localStorage.getItem('products');
    let existingProducts: any[] = [];

    if (existingProductsString) {
      existingProducts = JSON.parse(existingProductsString);
    }

    let existingProductIndex = -1;
    if (product.colorWithSizes.length > 0 && this.colorWithSizesSelected.sizes.length === 0) {
      // Check if the product with the same ID and hexaCode already exists
      existingProductIndex = existingProducts.findIndex(existingProduct =>
        existingProduct.id === product.id && existingProduct.hexColor === this.colorWithSizesSelected.color.hexaCode
      );
      if (existingProductIndex !== -1) {

        // If the product already exists, check if quantity update is allowed
        const existingProduct = existingProducts[existingProductIndex];
        this.existingProductStore = existingProduct;
        // Update the existing product quantity
        existingProducts[existingProductIndex] = {
          ...existingProduct,
          sizeQuantity: this.sizeQuantities,
          quantity: this.userSelectedQuantity,
          totalPrice: product.price.price,
          priceAfterDiscount: product.price.priceAfterOffer,

        };

      }
      else {
        const existingProductIndexNot = existingProducts.findIndex(existingProduct =>
          existingProduct.id === product.id && existingProduct.hexColor !== this.colorWithSizesSelected.color.hexaCode
        );
        if (existingProductIndexNot !== -1) {

          // If the product already exists, check if quantity update is allowed
          const existingProduct = existingProducts[existingProductIndexNot];
          this.existingProductStore = existingProduct;
          // Update the existing product quantity
          existingProducts[existingProductIndexNot] = {
            ...existingProduct,
            hexColor: this.colorWithSizesSelected.color.hexaCode,
            colorId: this.colorWithSizesSelected.color.id,
            sizeQuantity: this.sizeQuantities,
            quantity: this.userSelectedQuantity,
            totalPrice: product.price.price,
            priceAfterDiscount: product.price.priceAfterOffer,

          };

        }
      }

    }
    if (product.colorWithSizes.length > 0 && this.colorWithSizesSelected.sizes.length > 0) {
      // Check if the product with the same ID and hexaCode already exists
      existingProductIndex = existingProducts.findIndex(existingProduct =>
        existingProduct.id === product.id && existingProduct.hexColor === this.colorWithSizesSelected.color.hexaCode
      );
      if (existingProductIndex !== -1) {

        // If the product already exists, check if quantity update is allowed
        const existingProduct = existingProducts[existingProductIndex];
        this.existingProductStore = existingProduct;
        // Update the existing product quantity
        existingProducts[existingProductIndex] = {
          ...existingProduct,
          size: this.size.name,
          sizeId: this.size.id,
          sizeQuantity: this.sizeQuantities,
          quantity: this.userSelectedQuantity,
          totalPrice: product.price.price,
          priceAfterDiscount: product.price.priceAfterOffer,

        };

      }
      const existingProductIndexNot = existingProducts.findIndex(existingProduct =>
        existingProduct.id === product.id && existingProduct.hexColor !== this.colorWithSizesSelected.color.hexaCode
      );
      if (existingProductIndexNot !== -1) {

        // If the product already exists, check if quantity update is allowed
        const existingProduct = existingProducts[existingProductIndexNot];
        this.existingProductStore = existingProduct;
        // Update the existing product quantity
        existingProducts[existingProductIndexNot] = {
          ...existingProduct,
          hexColor: this.colorWithSizesSelected.color.hexaCode,
          colorId: this.colorWithSizesSelected.color.id,
          size: this.size.name,
          sizeId: this.size.id,
          sizeQuantity: this.sizeQuantities,
          quantity: this.userSelectedQuantity,
          totalPrice: product.price.price,
          priceAfterDiscount: product.price.priceAfterOffer,

        };

      }
    }
    if (product.sizes.length > 0) {
      // Check if the product with the same ID and hexaCode already exists
      existingProductIndex = existingProducts.findIndex(existingProduct =>
        existingProduct.id === product.id && existingProduct.hexColor === this.colorWithSizesSelected.color.hexaCode
      );
    }


    // if (existingProductIndex !== -1) {
    //   // If the product already exists, check if quantity update is allowed
    //   const existingProduct = existingProducts[existingProductIndex];
    //   this.existingProductStore = existingProduct;
    //   // Update the existing product quantity
    //   existingProducts[existingProductIndex] = {
    //     ...existingProduct,
    //     hexColor: this.colorWithSizesSelected.color.hexaCode ? this.colorWithSizesSelected.color.hexaCode : null,
    //     colorId: this.colorWithSizesSelected.color.id ? this.colorWithSizesSelected.color.id : null,
    //     size: this.size.name ? this.size.name : null,
    //     sizeId: this.size.id ? this.size.id : null,
    //     sizeQuantity: this.sizeQuantities,
    //     quantity: this.userSelectedQuantity,
    //     totalPrice: product.price.price,
    //     priceAfterDiscount: product.price.priceAfterOffer,

    //   };

    // }
    this.onCloseModal();

    // Store the updated products array in localStorage
    localStorage.setItem('products', JSON.stringify(existingProducts));
    window.location.reload();
  }
  // Method to show the notification
  showCustomNotification() {
    this.showNotification = true;

    // Optional: Auto-close after a certain duration
    setTimeout(() => {
      this.closeNotification();
    }, 5000); // Display duration in milliseconds
  }
  // Method to close the notification
  closeNotification() {
    this.showNotification = false;
  }

}

