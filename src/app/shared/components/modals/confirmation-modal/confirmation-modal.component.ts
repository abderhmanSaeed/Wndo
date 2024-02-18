import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalService } from '../../modal/modal.service';
import { ModalDataService } from '../../modal/modal.data.service';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrl: './confirmation-modal.component.scss'
})
export class ConfirmationModalComponent implements OnInit {
  productId: any;

  constructor(private modalService: ModalService , private modalDataService: ModalDataService) {}

  ngOnInit() {
    const modalData = this.modalDataService.getProductId();
    this.productId = modalData.productId;
  }
  Confirm() {
    console.log("Product ID:", this.productId);

    // Retrieve the products from local storage or default to an empty array if null
    const storedProducts = localStorage.getItem('products');
    let products = storedProducts ? JSON.parse(storedProducts) : [];

    if (products.length > 0) {
      // Find and remove the product with the matching ID
      const index = products.findIndex((product: { id: any; }) => product.id === this.productId);
      if (index !== -1) { // Check if the product was found
        products.splice(index, 1); // Remove the product from the array

        // Update local storage with the new array of products
        localStorage.setItem('products', JSON.stringify(products));
        console.log("Product removed successfully");
        window.location.reload();

      } else {
        console.log("Product not found");
      }
    } else {
      console.log("No products in local storage");
    }

    // Close the modal
    this.modalService.close();
  }


  cancel() {
    this.modalService.close();

  }

}
