import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrl: './product-details-card.component.scss',
})
export class ProductDetailsCardComponent implements OnInit {
  sizeQuantities: any;
  // Product

  @Input() product: any;
  @Input() productColorAndSizesResponse: any;

  @Input() responseData: any;

  productQuantity: number = 0;
  userSelectedQuantity!: number;
  colorWithSizesSelected: any;
  selectedColor: any; // Assuming your color object has a specific type, replace 'any' with the actual type
  selectedSize: any; // Assuming your color object has a specific type, replace 'any' with the actual type
  size: any;
  productColor = [
    {
      color: {
        "id": 36,
        "name": "Dark green",
        "hexaCode": "006400",
        "quantity": -1
      },
      sizes: [
        {
          "id": 4,
          "name": "L",
          "quantity": 4
        },
        {
          "id": 5,
          "name": "XL",
          "quantity": 5
        },
        {
          "id": 6,
          "name": "XXL",
          "quantity": 6
        }
      ]
    },
    {
      color: {
        "id": 37,
        "name": "yellow green",
        "hexaCode": "FFFF00",
        "quantity": -1
      },
      sizes: [
        {
          "id": 5,
          "name": "XXL",
          "quantity": 4
        }
      ]
    },
    {
      color: {
        "id": 38,
        "name": "red green",
        "hexaCode": "006400",
        "quantity": -1
      },
      sizes: [
        {
          "id": 6,
          "name": "L",
          "quantity": 6
        }
      ]
    }
  ]
  colorWithSizes: any;
  constructor(private router: Router, private snackBar: MatSnackBar) {
    // Your constructor logic here
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.selectedColor = this.productColor[0]; // Assuming productColor is an array
    this.selectedColor = this.product?.colorWithSizes[0]; // Assuming productColor is an array
    if (this.selectedColor) {
      this.logColor(this.selectedColor);
    }
    // You can add additional logic or error checking as needed
  }


  // storeProductInLocalStorage(product: any): void {

  //   const existingProductsString = localStorage.getItem('products');
  //   let existingProducts: any[] = [];

  //   if (existingProductsString) {
  //     existingProducts = JSON.parse(existingProductsString);
  //   }

  //   const newProduct = {
  //     id: product.id,
  //     name: product.name,
  //     hexColor: this.colorWithSizesSelected.color.hexaCode,
  //     size: this.size.name,
  //     sizeQuantity: this.size.quantity,
  //     quantity: this.productQuantity,
  //     totalPrice: product.price.price,
  //     priceAfterDiscount: product.price.priceAfterOffer,
  //     image: product.images[0].urlPreview
  //   };


  //   existingProducts.push(newProduct);

  //   localStorage.setItem('products', JSON.stringify(existingProducts));


  //   this.router.navigate(['/product/productOrders']);
  // }


  // Method to handle the button click and store productId in localStorage
  storeProductInLocalStorage(product: any): void {
    // Retrieve the existing products array from localStorage
    const existingProductsString = localStorage.getItem('products');
    let existingProducts: any[] = [];

    if (existingProductsString) {
      existingProducts = JSON.parse(existingProductsString);
    }

    // Check if the product with the same ID and hexaCode already exists
    const existingProductIndex = existingProducts.findIndex(existingProduct =>
      existingProduct.id === product.id && existingProduct.hexColor === this.colorWithSizesSelected.color.hexaCode
    );

    if (existingProductIndex !== -1) {
      // If the product already exists, check if quantity update is allowed
      const existingProduct = existingProducts[existingProductIndex];

      if (this.size.quantity >= existingProduct.quantity + this.productQuantity) {
        // Update the existing product quantity
        existingProducts[existingProductIndex] = {
          ...existingProduct,
          // size: this.size.name,
          // sizeQuantity: this.size.quantity,
          quantity: existingProduct.quantity + this.productQuantity,
          // totalPrice: product.price.price,
          // priceAfterDiscount: product.price.priceAfterOffer,
        };
      } else {
        // Show a snackbar error message with detailed information
        this.snackBar.open(
          `Cannot update quantity. Available quantity: ${this.size.quantity}. You selected ${this.productQuantity}
        + in your store ${existingProduct.quantity}`,
          'Close',
          {
            duration: 5000, // Display duration in milliseconds
          }
        );
      }
    } else {
      // If the product does not exist, check if a new product can be added
      if (this.size.quantity >= this.productQuantity) {
        // Add a new product
        const newProduct = {
          id: product.id,
          name: product.name,
          hexColor: this.colorWithSizesSelected.color.hexaCode,
          size: this.size.name,
          sizeQuantity: this.size.quantity,
          quantity: this.productQuantity,
          totalPrice: product.price.price,
          priceAfterDiscount: product.price.priceAfterOffer,
          image: product.images[0].urlPreview
        };

        // Push the new product to the existing array
        existingProducts.push(newProduct);
      } else {
        // Show a snackbar error message with detailed information
        this.snackBar.open(
          `Cannot add new product. Available quantity: ${this.size.quantity}. You selected ${this.productQuantity}.`,
          'Close',
          {
            duration: 5000, // Display duration in milliseconds
          }
        );
        // console.log('Cannot add new product. Not enough available.');
      }
    }

    // Store the updated products array in localStorage
    localStorage.setItem('products', JSON.stringify(existingProducts));

    // Navigate to the 'product/productOrders' URL
    this.router.navigate(['/product/productOrders']);
  }

  // Method to handle the button click and store productId in localStorage
  storeProductInLocalStorageWithoutNavigate(product: any): void {
    // Retrieve the existing products array from localStorage
    const existingProductsString = localStorage.getItem('products');
    let existingProducts: any[] = [];

    if (existingProductsString) {
      existingProducts = JSON.parse(existingProductsString);
    }

    // Check if the product with the same ID and hexaCode already exists
    const existingProductIndex = existingProducts.findIndex(existingProduct =>
      existingProduct.id === product.id && existingProduct.hexColor === this.colorWithSizesSelected.color.hexaCode
    );

    if (existingProductIndex !== -1) {
      // If the product already exists, check if quantity update is allowed
      const existingProduct = existingProducts[existingProductIndex];

      if (this.size.quantity >= existingProduct.quantity + this.productQuantity) {
        // Update the existing product quantity
        existingProducts[existingProductIndex] = {
          ...existingProduct,
          // size: this.size.name,
          // sizeQuantity: this.size.quantity,
          quantity: existingProduct.quantity + this.productQuantity,
          // totalPrice: product.price.price,
          // priceAfterDiscount: product.price.priceAfterOffer,
        };
      } else {
        // Show a snackbar error message with detailed information
        this.snackBar.open(
          `Cannot update quantity. Available quantity: ${this.size.quantity}. You selected ${this.productQuantity}
          + in your store ${existingProduct.quantity}`,
          'Close',
          {
            duration: 5000, // Display duration in milliseconds
          }
        );
      }
    } else {
      // If the product does not exist, check if a new product can be added
      if (this.size.quantity >= this.productQuantity) {
        // Add a new product
        const newProduct = {
          id: product.id,
          name: product.name,
          hexColor: this.colorWithSizesSelected.color.hexaCode,
          size: this.size.name,
          sizeQuantity: this.size.quantity,
          quantity: this.productQuantity,
          totalPrice: product.price.price,
          priceAfterDiscount: product.price.priceAfterOffer,
          image: product.images[0].urlPreview
        };

        // Push the new product to the existing array
        existingProducts.push(newProduct);
      } else {
        // Show a snackbar error message with detailed information
        this.snackBar.open(
          `Cannot add new product. Available quantity: ${this.size.quantity}. You selected ${this.productQuantity}.`,
          'Close',
          {
            duration: 5000, // Display duration in milliseconds
          }
        );
        // console.log('Cannot add new product. Not enough available.');
      }
    }

    // Store the updated products array in localStorage
    localStorage.setItem('products', JSON.stringify(existingProducts));

  }


  logColor(colorWithSizes: any): void {
    console.log(colorWithSizes);
    this.selectedColor = colorWithSizes;
    this.colorWithSizesSelected = colorWithSizes;
  }
  logSize(size: any): void {
    this.size = size;
    console.log(size);

    // Check if the size already exists in sizeQuantities, if not, initialize it to 0
    if (this.sizeQuantities > size.quantity && this.userSelectedQuantity > size.quantity) {
      this.productQuantity = size.quantity;

    }
    this.selectedSize = size.id;
    this.sizeQuantities = size.quantity;

    // You can add more logic or use this data as needed
  }
  onQuantityChange(newQuantity: number): void {
    // Update your logic here based on the new quantity
    // For example, you can check if newQuantity > sizeQuantities and update accordingly
    this.userSelectedQuantity = newQuantity;
  }

  videos = [{
    id: 17203,
    videoId: "9e1097f7-111e-4cf3-b2ff-d4bcbf82c87d",
    urlThumbnail: "https://wndoprobucket.s3.eu-west-3.amazonaws.com/a6ad2173-f649-4c7c-abc5-5f71d0b48e13.png",
    urlPreview: "https://wndovodstack-source71e471f1-12o7ase9r16a7.s3.eu-west-3.amazonaws.com/assets01/9e1097f7-111e-4cf3-b2ff-d4bcbf82c87d.3gp",
    isMain: true,
    name: "Main",
    description: "Main"
  }
  ]
  images= [
    {
      id: 45084,
      imageId: "53453",
      urlPreview: "https://swiperjs.com/demos/images/nature-1.jpg",
      urlThumbnail: "https://swiperjs.com/demos/images/nature-1.jpg"
    },
    {
      id: 45085,
      imageId: "53453",
      urlPreview: "https://swiperjs.com/demos/images/nature-2.jpg",
      urlThumbnail: "https://swiperjs.com/demos/images/nature-2.jpg"
    },
    {
      id: 45086,
      imageId: "4353",
      urlPreview: "https://swiperjs.com/demos/images/nature-3.jpg",
      urlThumbnail: "https://swiperjs.com/demos/images/nature-3.jpg"
    },
    {
      id: 45087,
      imageId: "453",
      urlPreview: "https://swiperjs.com/demos/images/nature-4.jpg",
      urlThumbnail: "https://swiperjs.com/demos/images/nature-4.jpg"
    }
  ]

}
