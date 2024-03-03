import { Component } from '@angular/core';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-empty-cart-modal',
  templateUrl: './empty-cart-modal.component.html',
  styleUrl: './empty-cart-modal.component.scss'
})
export class EmptyCartModalComponent {
  constructor(private modalService: ModalService) { }
  onCloseModal() {
    this.modalService.close()
  }

}
