import { Component } from '@angular/core';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-order-confirmed-modal',
  templateUrl: './order-confirmed-modal.component.html',
  styleUrl: './order-confirmed-modal.component.scss'
})
export class OrderConfirmedModal {
  constructor(private modalService: ModalService) {}

  close() {
    this.modalService.close();
  }
}
