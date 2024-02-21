import { Component, Input } from '@angular/core';
type ClassesProps = {
  base?: string
}
@Component({
  selector: 'app-confirmation-details',
  templateUrl: './confirmation-details.component.html',
  styleUrl: './confirmation-details.component.scss'
})
export class ConfirmationDetailsComponent {
  @Input() haveACoupon: boolean = false;
  @Input() address: any;
  @Input() orderDetails: any;
  @Input() classes?: ClassesProps;
}
