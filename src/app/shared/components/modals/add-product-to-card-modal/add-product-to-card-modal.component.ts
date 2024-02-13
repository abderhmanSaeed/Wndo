import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { ModalDataService } from '../../modal/modal.data.service';

@Component({
  selector: 'app-add-product-to-card-modal',
  templateUrl: './add-product-to-card-modal.component.html',
  styleUrl: './add-product-to-card-modal.component.scss',
})
export class AddProductToCardModalComponent implements OnInit {

  constructor(private modalService: ModalService, private modalDataService: ModalDataService) { }
  product: any;
  showNotification: boolean = false;
  existingProductStore: any;

  selectedColor: any;
  selectedSize: any;
  colorWithSizesSelected: any;
  size: any;
  sizeQuantities: any;
  productQuantity: number = 0;
  userSelectedQuantity!: number;

  ngOnInit() {
    const modalData = this.modalDataService.getData();
    this.product = modalData.product;
    // this.product = {
    //   id: '7a734dd3-3cf8-4ec1-b7ad-7a8912d0a03b',
    //   colorWithSizes: [
    //     {
    //       color: {
    //         id: 36,
    //         name: 'Dark green',
    //         hexaCode: '006400',
    //         quantity: -1,
    //       },
    //       sizes: [
    //         {
    //           id: 4,
    //           name: 'XL',
    //           quantity: 5,
    //         },
    //       ],
    //     },
    //   ],
    //   sizes: [],
    //   quantity: -1,
    // };
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

  // Method to handle the button click and store productId in localStorage
  storeProductInLocalStorageWithoutNavigate(product: any): void {
    // Retrieve the existing products array from localStorage
    const existingProductsString = localStorage.getItem('products');
    let existingProducts: any[] = [];

    if (existingProductsString) {
      existingProducts = JSON.parse(existingProductsString);
    }
    let existingProductIndex = -1;
    if (product.quantity !== -1) {
      // Check if the product with the same ID and hexaCode already exists
       existingProductIndex = existingProducts.findIndex(existingProduct =>
        existingProduct.id === product.id);
    }
    if (product.colorWithSizes.length > 0) {
      // Check if the product with the same ID and hexaCode already exists
       existingProductIndex = existingProducts.findIndex(existingProduct =>
        existingProduct.id === product.id && existingProduct.hexColor === this.colorWithSizesSelected.color.hexaCode
      );
    }
    if (product.sizes.length > 0) {
      // Check if the product with the same ID and hexaCode already exists
       existingProductIndex = existingProducts.findIndex(existingProduct =>
        existingProduct.id === product.id && existingProduct.hexColor === this.colorWithSizesSelected.color.hexaCode
      );
    }


    if (existingProductIndex !== -1) {
      // If the product already exists, check if quantity update is allowed
      const existingProduct = existingProducts[existingProductIndex];
      this.existingProductStore = existingProduct;
      if (product.quantity !== -1 && product.quantity >= existingProduct.quantity + this.productQuantity) {
        // Update the existing product quantity
        existingProducts[existingProductIndex] = {
          ...existingProduct,
          // size: this.size.name,
          // sizeQuantity: this.size.quantity,
          quantity: existingProduct.quantity + this.productQuantity,
          // totalPrice: product.price.price,
          // priceAfterDiscount: product.price.priceAfterOffer,

        };
        this.onCloseModal();

      }
      else if (product.colorWithSizes && this.size.quantity >= existingProduct.quantity + this.productQuantity) {
        // Update the existing product quantity
        existingProducts[existingProductIndex] = {
          ...existingProduct,
          // size: this.size.name,
          // sizeQuantity: this.size.quantity,
          quantity: existingProduct.quantity + this.productQuantity,
          // totalPrice: product.price.price,
          // priceAfterDiscount: product.price.priceAfterOffer,

        };
        this.onCloseModal();

      }
      else if (product.sizes && product.sizes >= existingProduct.quantity + this.productQuantity) {
        // Update the existing product quantity
        existingProducts[existingProductIndex] = {
          ...existingProduct,
          // size: this.size.name,
          // sizeQuantity: this.size.quantity,
          quantity: existingProduct.quantity + this.productQuantity,
          // totalPrice: product.price.price,
          // priceAfterDiscount: product.price.priceAfterOffer,

        };
        this.onCloseModal();

      } else {
        // Show a snackbar error message with detailed information
        this.showCustomNotification();
        // this.snackBar.open(
        //   `Cannot update quantity. Available quantity: ${this.size.quantity}. You selected ${this.productQuantity}
        //   + in your store ${existingProduct.quantity}`,
        //   'Close',
        //   {
        //     duration: 5000, // Display duration in milliseconds
        //   }
        // );
      }
    } else {
      // If the product does not exist, check if a new product can be added
      if (product.quantity !== -1 && product.quantity >= this.productQuantity) {
        // Add a new product
        const newProduct = {
          id: product.id,
          name: product.name,
          sizeQuantity: product.quantity,
          quantity: this.productQuantity,
          totalPrice: product.price.price,
          priceAfterDiscount: product.price.priceAfterOffer,
          image: (product.images && product.images.length > 0) ? product.images[0].urlPreview : (product.image ? product.image.urlPreview : null)
        };

        // Push the new product to the existing array
        existingProducts.push(newProduct);
        this.onCloseModal();
      }
      else if (product.colorWithSizes && this.size.quantity >= this.productQuantity) {
        // Add a new product
        const newProduct = {
          id: product.id,
          name: product.name,
          hexColor: this.colorWithSizesSelected.color.hexaCode,
          colorId: this.colorWithSizesSelected.color.id,
          size: this.size.name,
          sizeQuantity: this.size.quantity,
          quantity: this.productQuantity,
          totalPrice: product.price.price,
          priceAfterDiscount: product.price.priceAfterOffer,
          image: (product.images && product.images.length > 0) ? product.images[0].urlPreview : (product.image ? product.image.urlPreview : null)
        };

        // Push the new product to the existing array
        existingProducts.push(newProduct);
        this.onCloseModal();

      }
      else if (product.sizes && product.sizes >= this.productQuantity) {
        // Add a new product
        const newProduct = {
          id: product.id,
          name: product.name,
          size: this.size?.name,
          sizeQuantity: this.size?.quantity,
          quantity: this.productQuantity,
          totalPrice: product.price.price,
          priceAfterDiscount: product.price.priceAfterOffer,
          image: (product.images && product.images.length > 0) ? product.images[0].urlPreview : (product.image ? product.image.urlPreview : null)
        };

        // Push the new product to the existing array
        existingProducts.push(newProduct);
        this.onCloseModal();

      } else {
        // Show a snackbar error message with detailed information
        this.showCustomNotification();

      }
    }

    // Store the updated products array in localStorage
    localStorage.setItem('products', JSON.stringify(existingProducts));
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
