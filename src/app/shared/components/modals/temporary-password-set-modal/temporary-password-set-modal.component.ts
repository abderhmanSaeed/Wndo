import { Component } from '@angular/core';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-temporary-password-set-modal',
  templateUrl: './temporary-password-set-modal.component.html',
  styleUrl: './temporary-password-set-modal.component.scss'
})
export class TemporaryPasswordSetModalComponent {
  constructor(private modalService: ModalService) {}

  close() {
    this.modalService.close();
  }
}
