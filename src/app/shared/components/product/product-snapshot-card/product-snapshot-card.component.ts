import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-snapshot-card',
  templateUrl: './product-snapshot-card.component.html',
  styleUrl: './product-snapshot-card.component.scss'
})
export class ProductSnapshotCardComponent {
  @Input() product: any;

   // Variable to control the visibility of the copied message
   showCopiedMessage: boolean = false;

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
}
