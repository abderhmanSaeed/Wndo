import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { OrderConfirmedModal } from '../../../shared/components/modals/order-confirmed-modal/order-confirmed-modall.component';
import { TemporaryPasswordSetModalComponent } from '../../../shared/components/modals/temporary-password-set-modal/temporary-password-set-modal.component';

@Component({
  selector: 'app-product-orders',
  templateUrl: './product-orders.component.html',
  styleUrl: './product-orders.component.scss',
  standalone: true,
  imports:[SharedModule]
})
export class ProductOrdersComponent {
  constructor(private modalService: ModalService) {}


//Modal
@ViewChild('temporaryPasswordModal', { static: true, read: ViewContainerRef })
vcr!: ViewContainerRef;


openConfirmedModal() {
  this.modalService.open(OrderConfirmedModal , {
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
  this.modalService.open(TemporaryPasswordSetModalComponent , {
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
}
