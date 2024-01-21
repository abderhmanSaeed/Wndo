import { MyOrdersService } from './../../../data/service/my-orders/my-orders.service';
import { Component, OnInit } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { SharedModule } from '../../../shared/shared.module';
import { Order, OrderItemState, OrderState, OrderStatistics } from '../../../shared/models';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss',
  standalone: true,
  imports: [SharedModule, SvgIconComponent],
})
export class MyOrdersComponent implements OnInit {
  constructor(private myOrdersService: MyOrdersService) { }
  myOrders: Order[] = [];
  orderState: OrderState[] = [];
  orderItemState: OrderItemState[] = [];
  orderStatistics!: OrderStatistics;
  orderStatisticsCount: string[] = [];
  ordersCount: number | undefined;
  ordersState: number | undefined;
  ngOnInit(): void {
    this.getMyOrders();
    this.getOrderStatistics();
  }

  getMyOrders() {
    // Example usage without optional parameters
    this.myOrdersService.myOrders().subscribe(
      (response) => {
        this.myOrders = response?.responseData?.items
        this.ordersState = 1;
        console.log('API call successful');
        console.log('Response:', response);

      },
      (error) => {
        console.error('API call failed:', error);
      }
    );
  }
  getOrderStatistics() {
    this.myOrdersService.getOrderStatistics().subscribe(
      (response) => {
        this.orderStatistics = response.responseData;
        this.ordersCount = response.responseData.placed
        console.log('Order statistics response:', response);
      },
      (error) => {
        console.error('Error fetching order statistics:', error);
      }
    );
  }
  currentTab: string = 'ordered';
  myOrderStatus = ['ordered', 'shipping', 'delivered', 'returned', 'cancelled'];

  // myOrders = [
  //   {
  //     name: '385',
  //     description: '385',
  //     price: 385,
  //     date: '28 June , 6 PM',
  //     statues: 'ordered',
  //     images: [
  //       {
  //         id: 45084,
  //         imageId: '51',
  //         urlThumbnail:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/50caa500-eced-4803-9800-2fac3798ab6b.jpg',
  //         urlPreview:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/50caa500-eced-4803-9800-2fac3798ab6b.jpg',
  //       },
  //       {
  //         id: 3424,
  //         imageId: '51',
  //         urlThumbnail:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/50caa500-eced-4803-9800-2fac3798ab6b.jpg',
  //         urlPreview:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/50caa500-eced-4803-9800-2fac3798ab6b.jpg',
  //       },
  //     ],
  //     videos: [
  //       {
  //         id: 17203,
  //         videoId: '9e1097f7-111e-4cf3-b2ff-d4bcbf82c87d',
  //         urlThumbnail:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/a6ad2173-f649-4c7c-abc5-5f71d0b48e13.png',
  //         urlPreview:
  //           'https://wndovodstack-source71e471f1-12o7ase9r16a7.s3.eu-west-3.amazonaws.com/assets01/9e1097f7-111e-4cf3-b2ff-d4bcbf82c87d.3gp',
  //         isMain: true,
  //         name: 'Main',
  //         description: 'Main',
  //       },
  //     ],
  //     items: [
  //       {
  //         id: 5345,
  //         name: 'Classic Radio Golon F10',
  //       },
  //       {
  //         id: 56546,
  //         name: 'Classic Radio Golon F10',
  //       },
  //       {
  //         id: 543243,
  //         name: 'Classic Radio Golon F10',
  //       },
  //     ],

  //     id: '7a734dd3-3cf8-4ec1-b7ad-7a8912d0a03b',
  //   },
  //   {
  //     name: '385',
  //     description: '385',
  //     price: 385,
  //     date: '28 June , 6 PM',
  //     statues: 'shipping',
  //     images: [
  //       {
  //         id: 45084,
  //         imageId: '51',
  //         urlThumbnail:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/50caa500-eced-4803-9800-2fac3798ab6b.jpg',
  //         urlPreview:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/50caa500-eced-4803-9800-2fac3798ab6b.jpg',
  //       },
  //     ],
  //     videos: [
  //       {
  //         id: 17203,
  //         videoId: '9e1097f7-111e-4cf3-b2ff-d4bcbf82c87d',
  //         urlThumbnail:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/a6ad2173-f649-4c7c-abc5-5f71d0b48e13.png',
  //         urlPreview:
  //           'https://wndovodstack-source71e471f1-12o7ase9r16a7.s3.eu-west-3.amazonaws.com/assets01/9e1097f7-111e-4cf3-b2ff-d4bcbf82c87d.3gp',
  //         isMain: true,
  //         name: 'Main',
  //         description: 'Main',
  //       },
  //     ],
  //     items: [
  //       {
  //         id: 5345,
  //         name: 'Classic Radio Golon F10',
  //       },
  //       {
  //         id: 56546,
  //         name: 'Classic Radio Golon F10',
  //       },
  //       {
  //         id: 543243,
  //         name: 'Classic Radio Golon F10',
  //       },
  //     ],

  //     id: '7a734dd3-3cf8-4ec1-b7ad-7a8912d0a22',
  //   },
  //   {
  //     name: '34556',
  //     description: '385',
  //     price: 385,
  //     date: '28 June , 6 PM',
  //     statues: 'delivered',
  //     images: [
  //       {
  //         id: 45084,
  //         imageId: '51',
  //         urlThumbnail:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/50caa500-eced-4803-9800-2fac3798ab6b.jpg',
  //         urlPreview:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/50caa500-eced-4803-9800-2fac3798ab6b.jpg',
  //       },
  //     ],
  //     videos: [
  //       {
  //         id: 17203,
  //         videoId: '9e1097f7-111e-4cf3-b2ff-d4bcbf82c87d',
  //         urlThumbnail:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/a6ad2173-f649-4c7c-abc5-5f71d0b48e13.png',
  //         urlPreview:
  //           'https://wndovodstack-source71e471f1-12o7ase9r16a7.s3.eu-west-3.amazonaws.com/assets01/9e1097f7-111e-4cf3-b2ff-d4bcbf82c87d.3gp',
  //         isMain: true,
  //         name: 'Main',
  //         description: 'Main',
  //       },
  //     ],
  //     items: [
  //       {
  //         id: 5345,
  //         name: 'Classic Radio Golon F10',
  //       },
  //       {
  //         id: 56546,
  //         name: 'Classic Radio Golon F10',
  //       },
  //       {
  //         id: 543243,
  //         name: 'Classic Radio Golon F10',
  //       },
  //     ],

  //     id: '7a734dd3-3cf8-4ec1-b7ad-7a8912d0a877',
  //   },
  //   {
  //     name: '5345',
  //     description: '385',
  //     price: 385,
  //     date: '28 June , 6 PM',
  //     statues: 'returned',
  //     images: [
  //       {
  //         id: 45084,
  //         imageId: '51',
  //         urlThumbnail:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/50caa500-eced-4803-9800-2fac3798ab6b.jpg',
  //         urlPreview:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/50caa500-eced-4803-9800-2fac3798ab6b.jpg',
  //       },
  //     ],
  //     videos: [
  //       {
  //         id: 17203,
  //         videoId: '9e1097f7-111e-4cf3-b2ff-d4bcbf82c87d',
  //         urlThumbnail:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/a6ad2173-f649-4c7c-abc5-5f71d0b48e13.png',
  //         urlPreview:
  //           'https://wndovodstack-source71e471f1-12o7ase9r16a7.s3.eu-west-3.amazonaws.com/assets01/9e1097f7-111e-4cf3-b2ff-d4bcbf82c87d.3gp',
  //         isMain: true,
  //         name: 'Main',
  //         description: 'Main',
  //       },
  //     ],
  //     items: [
  //       {
  //         id: 5345,
  //         name: 'Classic Radio Golon F10',
  //       },
  //       {
  //         id: 56546,
  //         name: 'Classic Radio Golon F10',
  //       },
  //       {
  //         id: 543243,
  //         name: 'Classic Radio Golon F10',
  //       },
  //     ],

  //     id: '7a734dd3-3cf8-4ec1-b7ad-7a8912d0a000',
  //   },
  //   {
  //     name: '5345',
  //     description: '385',
  //     price: 385,
  //     date: '28 June , 6 PM',
  //     statues: 'cancelled',
  //     images: [
  //       {
  //         id: 45084,
  //         imageId: '51',
  //         urlThumbnail:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/50caa500-eced-4803-9800-2fac3798ab6b.jpg',
  //         urlPreview:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/50caa500-eced-4803-9800-2fac3798ab6b.jpg',
  //       },
  //     ],
  //     videos: [
  //       {
  //         id: 17203,
  //         videoId: '9e1097f7-111e-4cf3-b2ff-d4bcbf82c87d',
  //         urlThumbnail:
  //           'https://wndoprobucket.s3.eu-west-3.amazonaws.com/a6ad2173-f649-4c7c-abc5-5f71d0b48e13.png',
  //         urlPreview:
  //           'https://wndovodstack-source71e471f1-12o7ase9r16a7.s3.eu-west-3.amazonaws.com/assets01/9e1097f7-111e-4cf3-b2ff-d4bcbf82c87d.3gp',
  //         isMain: true,
  //         name: 'Main',
  //         description: 'Main',
  //       },
  //     ],
  //     items: [
  //       {
  //         id: 5345,
  //         name: 'Classic Radio Golon F10',
  //       },
  //       {
  //         id: 56546,
  //         name: 'Classic Radio Golon F10',
  //       },
  //       {
  //         id: 543243,
  //         name: 'Classic Radio Golon F10',
  //       },
  //     ],

  //     id: '7a734dd3-3cf8-4ec1-b7ad-7a8912d0a1g7',
  //   },
  // ];

  activeTab(item: string) {
    this.ordersCount = this.getItems(item);
    this.ordersState = this.getIOrderState(item);

    this.currentTab = item;
    // Additional logic if needed when a tab is activated
    console.log(`Tab ${item} is now active.`);
  }

  // getItems(status: string) {
  //   let items: any[];
  //   // items = this.myOrders.filter((order) => order.statues === status);
  //   return items;
  // }

  getItems(status: string): number | undefined {
    // Check if the status exists in orderStatistics
    if (status === 'delivered') {
      return this.orderStatistics.delivered;
    }
    else if (status === 'cancelled') {
      return this.orderStatistics.cancelled + this.orderStatistics.refund;
    }
    else if (status === 'shipping') {
      return this.orderStatistics.shipped;
    }
    else if (status === 'ordered') {
      return this.orderStatistics.placed;
    }
    else if (status === 'returned') {
      return this.orderStatistics.returned;
    }
    else {
      // Return undefined if the status is not found
      return undefined;
    }
  }
  getIOrderState(state: string): number | undefined {
    // Check if the status exists in orderStatistics
    if (state === 'delivered') {
      return OrderState.Delivered;
    }
    else if (state === 'cancelled') {
      return OrderState.Canceled + OrderState.Refund;
    }
    else if (state === 'shipping') {
      return OrderState.Shipping;
    }
    else if (state === 'ordered') {
      return OrderState.OrderPlaced;
    }
    else if (state === 'returned') {
      return OrderState.Returned;
    }
    else {
      // Return undefined if the status is not found
      return undefined;
    }
  }

  getStyleAndIcon(status: any) {
    switch (status) {
      case 'ordered':
        return {
          ButtonBg: 'tab-btn--ordered',
          lengthSpan: 'text-lightBlue-500',
          icon: 'ordered-note',
        };
      case 'shipping':
        return {
          ButtonBg: 'tab-btn--shipping',
          lengthSpan: 'text-orange-700',
          icon: 'out-for-delivery-one',
        };
      case 'delivered':
        return {
          ButtonBg: 'tab-btn--delivered',
          lengthSpan: 'text-green-600',
          icon: 'deliverytruck',
        };

      case 'returned':
        return {
          ButtonBg: 'tab-btn--returned',
          lengthSpan: 'text-yellow-500',
          icon: 'returned',
        };
      case 'cancelled':
        return {
          ButtonBg: 'tab-btn--cancelled',
          lengthSpan: 'text-red-600',
          icon: 'canceled',
        };
      default:
        return {
          ButtonBg: '',
          lengthSpan: '',
          icon: '',
        };
    }
  }
}
