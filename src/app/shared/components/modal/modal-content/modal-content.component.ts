import { Component, Input } from '@angular/core';
 import { ModalService } from '../modal.service';

 type ClassesProps = {
  title?: string;
 }

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
})
export class ModalContentComponent {
  @Input() title:string =  "";
  @Input() subtitle?:string =  "";
  @Input() classes?: ClassesProps;

  constructor(private modalService: ModalService) {}

  close() {
    this.modalService.close();
  }
}
