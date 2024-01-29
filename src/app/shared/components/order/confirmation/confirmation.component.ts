import { Component, Input } from '@angular/core';
type ClassesProps = {
  base?: string
}
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.scss'
})
export class ConfirmationComponent {
  @Input() haveACoupon:boolean = false;
  @Input() classes?: ClassesProps;
}
