import { Component } from '@angular/core';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrl: './login-modal.component.scss'
})
export class LoginModalComponent {
 constructor(private modalService: ModalService) {}

  close() {
    this.modalService.close();
  }
}
