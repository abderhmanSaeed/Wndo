import { Component, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-video-modal',
  templateUrl: './video-modal.component.html',
  styleUrl: './video-modal.component.scss'
})
export class VideoModalComponent {
  @Input() videoUrl: string = '';

  constructor(public bsModalRef: BsModalRef) {}
}
