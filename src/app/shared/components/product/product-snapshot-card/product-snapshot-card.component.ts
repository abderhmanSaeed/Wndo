import { Component, Input } from '@angular/core';
import { AddProductToCardModalComponent } from '../../modals/add-product-to-card-modal/add-product-to-card-modal.component';
import { ModalService } from '../../modal/modal.service';
import { ModalDataService } from '../../modal/modal.data.service';

@Component({
  selector: 'app-product-snapshot-card',
  templateUrl: './product-snapshot-card.component.html',
  styleUrl: './product-snapshot-card.component.scss'
})
export class ProductSnapshotCardComponent {
  @Input() product: any;

  // Variable to control the visibility of the copied message
  showCopiedMessage: boolean = false;

  constructor(private modalService: ModalService, private modalDataService: ModalDataService) { }

  // Method to copy the share URL and additional product information to the clipboard and show the message
  shareProduct() {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');

    // Concatenate product information into a formatted string
    const productInfo = `URL: ${this.product.shareUrl}\n` +
      `Name: ${this.product?.name || 'N/A'}\n` +
      `Description: ${this.product?.description || 'N/A'}\n` +
      `Image URL: ${this.product?.image?.urlPreview || 'N/A'}`;

    // Set the value of the textarea to the concatenated product information
    textarea.value = productInfo;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    // Show the copied message
    this.showCopiedMessage = true;

    // Hide the message after a delay (e.g., 3 seconds)
    setTimeout(() => {
      this.showCopiedMessage = false;
    }, 3000);
  }


  openAddProductToCardModal(product: any) {
    this.modalDataService.setData({ product: product });
    this.modalService.open(AddProductToCardModalComponent, {
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
