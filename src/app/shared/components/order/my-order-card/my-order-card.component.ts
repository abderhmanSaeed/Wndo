import {
  Component,
  ElementRef,
  Input,
} from '@angular/core';


@Component({
  selector: 'app-my-order-card',
  templateUrl: './my-order-card.component.html',
  styleUrl: './my-order-card.component.scss',
})
export class MyOrderCardComponent {
  urlPreview: any;
  index = 0;

  @Input() product: any;

  dropdownactions: any= [
    {
    label:"View Details",
    value: "viewDetails"
  },
  {
    label: "Tracking Order",
    value: "trackingOrder"
  },
  {
    label: "Cancel Order",
    value: "cancelOrder"
  }]

  getStyle(status: string) {
    switch (status) {
      case 'ordered':
        return {
          textColor: 'text-lightBlue-500',
        };
      case 'shipping':
        return {
          textColor: 'text-orange-700',
        };
      case 'delivered':
        return {
          textColor: 'text-green-600',
        };

      case 'returned':
        return {
          textColor: 'text-yellow-500',
        };
      case 'cancelled':
        return {
          textColor: 'text-red-600',
        };
      default:
        return {
          textColor: '',
        };
    }
  }


}
