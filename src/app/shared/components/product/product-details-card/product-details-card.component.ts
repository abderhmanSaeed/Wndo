import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrl: './product-details-card.component.scss',
})
export class ProductDetailsCardComponent implements OnInit {
  showNotification: boolean = false;
  existingProductStore: any;

  sizeQuantities: any;
  // Product

  @Input() product: any;
  @Input() productColorAndSizesResponse: any;

  @Input() responseData: any;
  showAddTocardMessage: boolean = false;

  colorNotselect: boolean = false;
  sizeNotselect: boolean = false;
  quantityNotselect: boolean = false;


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
  colorWithQuantity: any;
  constructor(private router: Router) {
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
    if (product.quantity !== -1 && this.productQuantity === 0) {
      this.quantityNotselect = true;
    }
    else if (product.colorWithSizes.length > 0) {
      if (!this.colorWithQuantity) {
        this.colorNotselect = true;
      }
      else if (this.colorWithSizesSelected?.sizes) {
        if (!this.size) {
          this.sizeNotselect = true;
        }
        else if (this.userSelectedQuantity === 0) {
          this.quantityNotselect = true;

        }
        else {

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
              existingProduct.id === product.id && existingProduct.hexColor === this.colorWithQuantity.hexaCode
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
            if (product.quantity !== -1 && product.quantity >= this.productQuantity) {
              // Add a new product
              const newProduct = {
                id: product.id,
                name: product.name,
                sizeQuantity: product.quantity,
                quantity: this.productQuantity,
                sellerId: product?.seller?.id,
                totalPrice: product.price.price,
                priceAfterDiscount: product.price.priceAfterOffer,
                image: product.images[0].urlPreview
              };

              // Push the new product to the existing array
              existingProducts.push(newProduct);
            }
            // If the product does not exist, check if a new product can be added
            else if (product.colorWithSizes && this.size?.quantity >= this.productQuantity) {
              // Add a new product
              const newProduct = {
                id: product.id,
                name: product.name,
                hexColor: this.colorWithSizesSelected.color.hexaCode,
                colorId: this.colorWithSizesSelected.color.id,
                size: this.size.name,
                sizeId: this.size.id,
                sizeQuantity: this.size.quantity,
                sellerId: product?.seller?.id,
                quantity: this.productQuantity,
                totalPrice: product.price.price,
                priceAfterDiscount: product.price.priceAfterOffer,
                image: product.images[0].urlPreview
              };

              // Push the new product to the existing array
              existingProducts.push(newProduct);
              this.showAddTocardMessage = true
            }
            // If the product does not exist, check if a new product can be added
            else if (product.colorWithSizes && this.colorWithQuantity.quantity >= this.productQuantity) {
              // Add a new product
              const newProduct = {
                id: product.id,
                name: product.name,
                hexColor: this.colorWithQuantity.hexaCode,
                colorId: this.colorWithQuantity.id,
                sizeQuantity: this.colorWithQuantity.quantity,
                sellerId: product?.seller?.id,
                quantity: this.productQuantity,
                totalPrice: product.price.price,
                priceAfterDiscount: product.price.priceAfterOffer,
                image: product.images[0].urlPreview
              };

              // Push the new product to the existing array
              existingProducts.push(newProduct);
              this.showAddTocardMessage = true
            }
            else if (product.sizes && this.size?.quantity >= this.productQuantity) {
              // Add a new product
              const newProduct = {
                id: product.id,
                name: product.name,
                size: this.size?.name,
                sizeQuantity: this.size?.quantity,
                quantity: this.productQuantity,
                sellerId: product?.seller?.id,
                totalPrice: product.price.price,
                priceAfterDiscount: product.price.priceAfterOffer,
                image: product.images[0].urlPreview
              };

              // Push the new product to the existing array
              existingProducts.push(newProduct);
              this.showAddTocardMessage = true


            } else {
              // Show a snackbar error message with detailed information
              this.showCustomNotification();

              // this.snackBar.open(
              //   `Cannot add new product. Available quantity: ${this.size.quantity}. You selected ${this.productQuantity}.`,
              //   'Close',
              //   {
              //     duration: 5000, // Display duration in milliseconds
              //   }
              // );
              // console.log('Cannot add new product. Not enough available.');
            }
          }

          // Store the updated products array in localStorage
          localStorage.setItem('products', JSON.stringify(existingProducts));

          // Navigate to the 'product/productOrders' URL
          this.router.navigate(['/product/productOrders']);

        }

      }
      else if (this.colorWithQuantity?.quantity !== -1 && this.productQuantity === 0) {
        this.quantityNotselect = true;
      }

      else {

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
            existingProduct.id === product.id && existingProduct.hexColor === this.colorWithQuantity.hexaCode
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
          if (product.quantity !== -1 && product.quantity >= this.productQuantity) {
            // Add a new product
            const newProduct = {
              id: product.id,
              name: product.name,
              sizeQuantity: product.quantity,
              quantity: this.productQuantity,
              sellerId: product?.seller?.id,
              totalPrice: product.price.price,
              priceAfterDiscount: product.price.priceAfterOffer,
              image: product.images[0].urlPreview
            };

            // Push the new product to the existing array
            existingProducts.push(newProduct);
          }
          // If the product does not exist, check if a new product can be added
          else if (product.colorWithSizes && this.size?.quantity >= this.productQuantity) {
            // Add a new product
            const newProduct = {
              id: product.id,
              name: product.name,
              hexColor: this.colorWithSizesSelected.color.hexaCode,
              colorId: this.colorWithSizesSelected.color.id,
              size: this.size.name,
              sizeId: this.size.id,
              sizeQuantity: this.size.quantity,
              sellerId: product?.seller?.id,
              quantity: this.productQuantity,
              totalPrice: product.price.price,
              priceAfterDiscount: product.price.priceAfterOffer,
              image: product.images[0].urlPreview
            };

            // Push the new product to the existing array
            existingProducts.push(newProduct);
            this.showAddTocardMessage = true
          }
          // If the product does not exist, check if a new product can be added
          else if (product.colorWithSizes && this.colorWithQuantity.quantity >= this.productQuantity) {
            // Add a new product
            const newProduct = {
              id: product.id,
              name: product.name,
              hexColor: this.colorWithQuantity.hexaCode,
              colorId: this.colorWithQuantity.id,
              sizeQuantity: this.colorWithQuantity.quantity,
              sellerId: product?.seller?.id,
              quantity: this.productQuantity,
              totalPrice: product.price.price,
              priceAfterDiscount: product.price.priceAfterOffer,
              image: product.images[0].urlPreview
            };

            // Push the new product to the existing array
            existingProducts.push(newProduct);
            this.showAddTocardMessage = true
          }
          else if (product.sizes && this.size?.quantity >= this.productQuantity) {
            // Add a new product
            const newProduct = {
              id: product.id,
              name: product.name,
              size: this.size?.name,
              sizeQuantity: this.size?.quantity,
              quantity: this.productQuantity,
              sellerId: product?.seller?.id,
              totalPrice: product.price.price,
              priceAfterDiscount: product.price.priceAfterOffer,
              image: product.images[0].urlPreview
            };

            // Push the new product to the existing array
            existingProducts.push(newProduct);
            this.showAddTocardMessage = true


          } else {
            // Show a snackbar error message with detailed information
            this.showCustomNotification();

            // this.snackBar.open(
            //   `Cannot add new product. Available quantity: ${this.size.quantity}. You selected ${this.productQuantity}.`,
            //   'Close',
            //   {
            //     duration: 5000, // Display duration in milliseconds
            //   }
            // );
            // console.log('Cannot add new product. Not enough available.');
          }
        }

        // Store the updated products array in localStorage
        localStorage.setItem('products', JSON.stringify(existingProducts));

        // Navigate to the 'product/productOrders' URL
        this.router.navigate(['/product/productOrders']);

      }
    }
    else {

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
          existingProduct.id === product.id && existingProduct.hexColor === this.colorWithQuantity.hexaCode
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
        if (product.quantity !== -1 && product.quantity >= this.productQuantity) {
          // Add a new product
          const newProduct = {
            id: product.id,
            name: product.name,
            sizeQuantity: product.quantity,
            quantity: this.productQuantity,
            sellerId: product?.seller?.id,
            totalPrice: product.price.price,
            priceAfterDiscount: product.price.priceAfterOffer,
            image: product.images[0].urlPreview
          };

          // Push the new product to the existing array
          existingProducts.push(newProduct);
        }
        // If the product does not exist, check if a new product can be added
        else if (product.colorWithSizes && this.size?.quantity >= this.productQuantity) {
          // Add a new product
          const newProduct = {
            id: product.id,
            name: product.name,
            hexColor: this.colorWithSizesSelected.color.hexaCode,
            colorId: this.colorWithSizesSelected.color.id,
            size: this.size.name,
            sizeId: this.size.id,
            sizeQuantity: this.size.quantity,
            sellerId: product?.seller?.id,
            quantity: this.productQuantity,
            totalPrice: product.price.price,
            priceAfterDiscount: product.price.priceAfterOffer,
            image: product.images[0].urlPreview
          };

          // Push the new product to the existing array
          existingProducts.push(newProduct);
          this.showAddTocardMessage = true
        }
        // If the product does not exist, check if a new product can be added
        else if (product.colorWithSizes && this.colorWithQuantity.quantity >= this.productQuantity) {
          // Add a new product
          const newProduct = {
            id: product.id,
            name: product.name,
            hexColor: this.colorWithQuantity.hexaCode,
            colorId: this.colorWithQuantity.id,
            sizeQuantity: this.colorWithQuantity.quantity,
            sellerId: product?.seller?.id,
            quantity: this.productQuantity,
            totalPrice: product.price.price,
            priceAfterDiscount: product.price.priceAfterOffer,
            image: product.images[0].urlPreview
          };

          // Push the new product to the existing array
          existingProducts.push(newProduct);
          this.showAddTocardMessage = true
        }
        else if (product.sizes && this.size?.quantity >= this.productQuantity) {
          // Add a new product
          const newProduct = {
            id: product.id,
            name: product.name,
            size: this.size?.name,
            sizeQuantity: this.size?.quantity,
            quantity: this.productQuantity,
            sellerId: product?.seller?.id,
            totalPrice: product.price.price,
            priceAfterDiscount: product.price.priceAfterOffer,
            image: product.images[0].urlPreview
          };

          // Push the new product to the existing array
          existingProducts.push(newProduct);
          this.showAddTocardMessage = true


        } else {
          // Show a snackbar error message with detailed information
          this.showCustomNotification();

          // this.snackBar.open(
          //   `Cannot add new product. Available quantity: ${this.size.quantity}. You selected ${this.productQuantity}.`,
          //   'Close',
          //   {
          //     duration: 5000, // Display duration in milliseconds
          //   }
          // );
          // console.log('Cannot add new product. Not enough available.');
        }
      }

      // Store the updated products array in localStorage
      localStorage.setItem('products', JSON.stringify(existingProducts));
      // Navigate to the 'product/productOrders' URL
      this.router.navigate(['/product/productOrders']);

    }


  }

  // Method to handle the button click and store productId in localStorage
  storeProductInLocalStorageWithoutNavigate(product: any): void {
    if (product.quantity !== -1 && this.productQuantity === 0) {
      this.quantityNotselect = true;
    }
    else if (product.colorWithSizes.length > 0) {
      if (!this.colorWithQuantity) {
        this.colorNotselect = true;
      }
      else if (this.colorWithSizesSelected?.sizes) {
        if (!this.size) {
          this.sizeNotselect = true;
        }
        else if (this.userSelectedQuantity === 0) {
          this.quantityNotselect = true;

        }
        else {

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
              existingProduct.id === product.id && existingProduct.hexColor === this.colorWithQuantity.hexaCode
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
            if (product.quantity !== -1 && product.quantity >= this.productQuantity) {
              // Add a new product
              const newProduct = {
                id: product.id,
                name: product.name,
                sizeQuantity: product.quantity,
                quantity: this.productQuantity,
                sellerId: product?.seller?.id,
                totalPrice: product.price.price,
                priceAfterDiscount: product.price.priceAfterOffer,
                image: product.images[0].urlPreview
              };

              // Push the new product to the existing array
              existingProducts.push(newProduct);
            }
            // If the product does not exist, check if a new product can be added
            else if (product.colorWithSizes && this.size?.quantity >= this.productQuantity) {
              // Add a new product
              const newProduct = {
                id: product.id,
                name: product.name,
                hexColor: this.colorWithSizesSelected.color.hexaCode,
                colorId: this.colorWithSizesSelected.color.id,
                size: this.size.name,
                sizeId: this.size.id,
                sizeQuantity: this.size.quantity,
                sellerId: product?.seller?.id,
                quantity: this.productQuantity,
                totalPrice: product.price.price,
                priceAfterDiscount: product.price.priceAfterOffer,
                image: product.images[0].urlPreview
              };

              // Push the new product to the existing array
              existingProducts.push(newProduct);
              this.showAddTocardMessage = true
            }
            // If the product does not exist, check if a new product can be added
            else if (product.colorWithSizes && this.colorWithQuantity.quantity >= this.productQuantity) {
              // Add a new product
              const newProduct = {
                id: product.id,
                name: product.name,
                hexColor: this.colorWithQuantity.hexaCode,
                colorId: this.colorWithQuantity.id,
                sizeQuantity: this.colorWithQuantity.quantity,
                sellerId: product?.seller?.id,
                quantity: this.productQuantity,
                totalPrice: product.price.price,
                priceAfterDiscount: product.price.priceAfterOffer,
                image: product.images[0].urlPreview
              };

              // Push the new product to the existing array
              existingProducts.push(newProduct);
              this.showAddTocardMessage = true
            }
            else if (product.sizes && this.size?.quantity >= this.productQuantity) {
              // Add a new product
              const newProduct = {
                id: product.id,
                name: product.name,
                size: this.size?.name,
                sizeQuantity: this.size?.quantity,
                quantity: this.productQuantity,
                sellerId: product?.seller?.id,
                totalPrice: product.price.price,
                priceAfterDiscount: product.price.priceAfterOffer,
                image: product.images[0].urlPreview
              };

              // Push the new product to the existing array
              existingProducts.push(newProduct);
              this.showAddTocardMessage = true


            } else {
              // Show a snackbar error message with detailed information
              this.showCustomNotification();

              // this.snackBar.open(
              //   `Cannot add new product. Available quantity: ${this.size.quantity}. You selected ${this.productQuantity}.`,
              //   'Close',
              //   {
              //     duration: 5000, // Display duration in milliseconds
              //   }
              // );
              // console.log('Cannot add new product. Not enough available.');
            }
          }

          // Store the updated products array in localStorage
          localStorage.setItem('products', JSON.stringify(existingProducts));

        }

      }
      else if (this.colorWithQuantity?.quantity !== -1 && this.productQuantity === 0) {
        this.quantityNotselect = true;
      }

      else {

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
            existingProduct.id === product.id && existingProduct.hexColor === this.colorWithQuantity.hexaCode
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
          if (product.quantity !== -1 && product.quantity >= this.productQuantity) {
            // Add a new product
            const newProduct = {
              id: product.id,
              name: product.name,
              sizeQuantity: product.quantity,
              quantity: this.productQuantity,
              sellerId: product?.seller?.id,
              totalPrice: product.price.price,
              priceAfterDiscount: product.price.priceAfterOffer,
              image: product.images[0].urlPreview
            };

            // Push the new product to the existing array
            existingProducts.push(newProduct);
          }
          // If the product does not exist, check if a new product can be added
          else if (product.colorWithSizes && this.size?.quantity >= this.productQuantity) {
            // Add a new product
            const newProduct = {
              id: product.id,
              name: product.name,
              hexColor: this.colorWithSizesSelected.color.hexaCode,
              colorId: this.colorWithSizesSelected.color.id,
              size: this.size.name,
              sizeId: this.size.id,
              sizeQuantity: this.size.quantity,
              sellerId: product?.seller?.id,
              quantity: this.productQuantity,
              totalPrice: product.price.price,
              priceAfterDiscount: product.price.priceAfterOffer,
              image: product.images[0].urlPreview
            };

            // Push the new product to the existing array
            existingProducts.push(newProduct);
            this.showAddTocardMessage = true
          }
          // If the product does not exist, check if a new product can be added
          else if (product.colorWithSizes && this.colorWithQuantity.quantity >= this.productQuantity) {
            // Add a new product
            const newProduct = {
              id: product.id,
              name: product.name,
              hexColor: this.colorWithQuantity.hexaCode,
              colorId: this.colorWithQuantity.id,
              sizeQuantity: this.colorWithQuantity.quantity,
              sellerId: product?.seller?.id,
              quantity: this.productQuantity,
              totalPrice: product.price.price,
              priceAfterDiscount: product.price.priceAfterOffer,
              image: product.images[0].urlPreview
            };

            // Push the new product to the existing array
            existingProducts.push(newProduct);
            this.showAddTocardMessage = true
          }
          else if (product.sizes && this.size?.quantity >= this.productQuantity) {
            // Add a new product
            const newProduct = {
              id: product.id,
              name: product.name,
              size: this.size?.name,
              sizeQuantity: this.size?.quantity,
              quantity: this.productQuantity,
              sellerId: product?.seller?.id,
              totalPrice: product.price.price,
              priceAfterDiscount: product.price.priceAfterOffer,
              image: product.images[0].urlPreview
            };

            // Push the new product to the existing array
            existingProducts.push(newProduct);
            this.showAddTocardMessage = true


          } else {
            // Show a snackbar error message with detailed information
            this.showCustomNotification();

            // this.snackBar.open(
            //   `Cannot add new product. Available quantity: ${this.size.quantity}. You selected ${this.productQuantity}.`,
            //   'Close',
            //   {
            //     duration: 5000, // Display duration in milliseconds
            //   }
            // );
            // console.log('Cannot add new product. Not enough available.');
          }
        }

        // Store the updated products array in localStorage
        localStorage.setItem('products', JSON.stringify(existingProducts));

      }
    }
    else {

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
          existingProduct.id === product.id && existingProduct.hexColor === this.colorWithQuantity.hexaCode
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
        if (product.quantity !== -1 && product.quantity >= this.productQuantity) {
          // Add a new product
          const newProduct = {
            id: product.id,
            name: product.name,
            sizeQuantity: product.quantity,
            quantity: this.productQuantity,
            sellerId: product?.seller?.id,
            totalPrice: product.price.price,
            priceAfterDiscount: product.price.priceAfterOffer,
            image: product.images[0].urlPreview
          };

          // Push the new product to the existing array
          existingProducts.push(newProduct);
        }
        // If the product does not exist, check if a new product can be added
        else if (product.colorWithSizes && this.size?.quantity >= this.productQuantity) {
          // Add a new product
          const newProduct = {
            id: product.id,
            name: product.name,
            hexColor: this.colorWithSizesSelected.color.hexaCode,
            colorId: this.colorWithSizesSelected.color.id,
            size: this.size.name,
            sizeId: this.size.id,
            sizeQuantity: this.size.quantity,
            sellerId: product?.seller?.id,
            quantity: this.productQuantity,
            totalPrice: product.price.price,
            priceAfterDiscount: product.price.priceAfterOffer,
            image: product.images[0].urlPreview
          };

          // Push the new product to the existing array
          existingProducts.push(newProduct);
          this.showAddTocardMessage = true
        }
        // If the product does not exist, check if a new product can be added
        else if (product.colorWithSizes && this.colorWithQuantity.quantity >= this.productQuantity) {
          // Add a new product
          const newProduct = {
            id: product.id,
            name: product.name,
            hexColor: this.colorWithQuantity.hexaCode,
            colorId: this.colorWithQuantity.id,
            sizeQuantity: this.colorWithQuantity.quantity,
            sellerId: product?.seller?.id,
            quantity: this.productQuantity,
            totalPrice: product.price.price,
            priceAfterDiscount: product.price.priceAfterOffer,
            image: product.images[0].urlPreview
          };

          // Push the new product to the existing array
          existingProducts.push(newProduct);
          this.showAddTocardMessage = true
        }
        else if (product.sizes && this.size?.quantity >= this.productQuantity) {
          // Add a new product
          const newProduct = {
            id: product.id,
            name: product.name,
            size: this.size?.name,
            sizeQuantity: this.size?.quantity,
            quantity: this.productQuantity,
            sellerId: product?.seller?.id,
            totalPrice: product.price.price,
            priceAfterDiscount: product.price.priceAfterOffer,
            image: product.images[0].urlPreview
          };

          // Push the new product to the existing array
          existingProducts.push(newProduct);
          this.showAddTocardMessage = true


        } else {
          // Show a snackbar error message with detailed information
          this.showCustomNotification();

          // this.snackBar.open(
          //   `Cannot add new product. Available quantity: ${this.size.quantity}. You selected ${this.productQuantity}.`,
          //   'Close',
          //   {
          //     duration: 5000, // Display duration in milliseconds
          //   }
          // );
          // console.log('Cannot add new product. Not enough available.');
        }
      }

      // Store the updated products array in localStorage
      localStorage.setItem('products', JSON.stringify(existingProducts));

    }

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

  logColor(colorWithSizes: any): void {
    this.colorNotselect = false;
    console.log(colorWithSizes);
    this.colorWithQuantity = colorWithSizes?.color;
    this.selectedColor = colorWithSizes?.color?.id;
    if (colorWithSizes?.color?.quantity !== -1) {
      // Check if the size already exists in sizeQuantities, if not, initialize it to 0
      if (this.sizeQuantities > colorWithSizes?.color?.quantity && this.userSelectedQuantity > colorWithSizes?.color?.quantity) {
        this.productQuantity = colorWithSizes?.color?.quantity;

      }
      this.sizeQuantities = colorWithSizes?.color?.quantity;

    } else {
      this.colorWithSizesSelected = colorWithSizes;
    }
  }
  logSize(size: any): void {
    this.sizeNotselect = false;

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
    if (newQuantity > 0)
      this.quantityNotselect = false;

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
  images = [
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

  // Method to check if a string is a valid date
  isValidDate(dateString: string): boolean {
    if (!dateString) {
      return false; // Returns false if the string is empty or undefined
    }
    const date = new Date(dateString);
    return !isNaN(date.getTime()); // Checks if the date is valid
  }

  // Method to calculate days until expiry, given an expiry date
  calculateDaysUntilExpiry(expiryDate: string): number {
    if (!expiryDate) return 0; // Return 0 if no expiry date is provided

    const currentDate = new Date();
    const expiry = new Date(expiryDate);
    const timeDiff = expiry.getTime() - currentDate.getTime();
    const daysUntilExpiry = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysUntilExpiry;
  }
}
