import { Component, Input } from '@angular/core';
import { AddProductToCardModalComponent } from '../../modals/add-product-to-card-modal/add-product-to-card-modal.component';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-product-snapshot-card',
  templateUrl: './product-snapshot-card.component.html',
  styleUrl: './product-snapshot-card.component.scss'
})
export class ProductSnapshotCardComponent {
  @Input() product: any;

   // Variable to control the visibility of the copied message
   showCopiedMessage: boolean = false;

   constructor(private modalService: ModalService){}

   // Method to copy the share URL to the clipboard and show the message
   shareProduct() {
     // Create a temporary textarea element
     const textarea = document.createElement('textarea');
     textarea.value = this.product.shareUrl;

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

   openAddProductToCardModal() {
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
