import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { OrderConfirmedModal } from '../../../shared/components/modals/order-confirmed-modal/order-confirmed-modall.component';
import { TemporaryPasswordSetModalComponent } from '../../../shared/components/modals/temporary-password-set-modal/temporary-password-set-modal.component';
import { ProductService } from '../../../data/service/product/product.service';
import { ProductResponse } from '../../../shared/models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-orders',
  templateUrl: './product-orders.component.html',
  styleUrl: './product-orders.component.scss',
  standalone: true,
  imports: [SharedModule]
})
export class ProductOrdersComponent implements OnInit {
  productDetails: ProductResponse | null = null; // Initialize to null or default value


  constructor(private modalService: ModalService, private productService: ProductService, private router: Router) { }
  ngOnInit(): void {
    // this.getProductDetails();
  }

  //Modal
  @ViewChild('temporaryPasswordModal', { static: true, read: ViewContainerRef })
  vcr!: ViewContainerRef;


  openConfirmedModal() {
    this.modalService.open(OrderConfirmedModal, {
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

  openTemporaryPasswordModal() {
    this.modalService.open(TemporaryPasswordSetModalComponent, {
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

  close() {
    this.modalService.close();
  }

  getProductDetails() {
    // Retrieve the productId array from localStorage
    const storedProductIdString = localStorage.getItem('productId');

    if (storedProductIdString) {
      const productIdArray: string[] = JSON.parse(storedProductIdString);

      // Loop through each productId and make API calls
      productIdArray.forEach(productId => {
        this.productService.getProductDetails(productId)
          .subscribe(
            (data: ProductResponse) => {
              // Handle the API response data here
              this.productDetails = data;
              console.log('Product Color and Sizes Response for productId:', productId, data);
            },
            error => console.error('Error:', error)
          );
      });
    } else {
      console.error('No productId found in localStorage.');
    }
  }

  addMoreButton = {
    label: 'ADD MORE PRODUCT',
    action: () => this.addMore(),
    // Add any additional styling or properties you need for the button
  };

  addMore(): void {
    this.router.navigate(['/product/productDetails']);

  }
}
