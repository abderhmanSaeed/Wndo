import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Modal } from 'flowbite';

type ClassesProps = {
  toggleButton?: string
  base?: string
  backdrop?: string
  title?: string
  closeBtn?: string
  header?: string
  content?: string
  footer?: string
  cancelBtn?: string
  mainBtn?: string
  subtitle?: string
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  private $modalElement: any;
  private modal: any;

  constructor(private el: ElementRef) {
    this.$modalElement = this.el.nativeElement.querySelector('#modalEl');
  }

  @Input() modalId: string = 'default-modal'
  @Input() toggleModalName: string = 'Open Modal'
  @Input() classes?: ClassesProps;
  @Input() placement: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left' | 'center' = 'top-left';
  @Input() title: string = "";
  @Input() hasCancelBtn: boolean = false;
  @Input() isAction: boolean = false;
  @Input() actionLabel: string = '';
  @Input() subtitle: string = '';
  @Input() width: string = 'w-[577px]';

  @Output() actionClick: EventEmitter<void> = new EventEmitter<void>();

  onActionClick(): void {
    this.actionClick.emit();
  }

  placementStyle = {
    'top-left': 'justify-start',
    'top-right': 'justify-end',
    'bottom-right': 'items-end justify-end',
    'bottom-left': 'items-end justify-start',
    'center': 'items-center justify-center'
  }

  ngOnInit() {
    const modalOptions: any = {
      placement: "center",
      backdrop: 'dynamic',
      backdropClasses: 'bg-gray-900/50 fixed inset-0 z-40',
      onHide: () => {
        console.log('modal is hidden');
      },
      onShow: () => {
        console.log('modal is shown');
      },
      onToggle: () => {
        console.log('modal has been toggled');
      }
    };

    this.modal = new Modal(this.$modalElement, modalOptions);
    this.modal.show();
  }
}
