import { MyOrdersService } from './../../../data/service/my-orders/my-orders.service';
import { Component, OnInit } from '@angular/core';
import { SvgIconComponent } from 'angular-svg-icon';
import { SharedModule } from '../../../shared/shared.module';
import {
  Order,
  OrderItemState,
  OrderState,
  OrderStatistics,
} from '../../../shared/models';
import { SellerProductsOffersService } from '../../../data/service/seller-products-offers/seller-products-offers.service';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss',
  standalone: true,
  imports: [SharedModule, SvgIconComponent],
})
export class MyOrdersComponent implements OnInit {
  constructor(
    private myOrdersService: MyOrdersService,
    private sellerProductsOffersService: SellerProductsOffersService
  ) {}
  myOrders: Order[] = [];
  orderState: OrderState[] = [];
  orderItemState: OrderItemState[] = [];
  orderStatistics!: OrderStatistics;
  orderStatisticsCount: string[] = [];
  ordersCount: number | undefined;
  ordersState: number | undefined;
  OrderStateValue = OrderState;

  sellersData: any;
  selectedUserId: string | undefined;
  selectedSeller: boolean = false;
  ngOnInit(): void {
    this.getMyOrders();
    this.getSeller();
  }

  getMyOrders(sellerId?: string) {
    // Example usage without optional parameters
    this.myOrdersService.myOrders(sellerId).subscribe(
      (response) => {
        this.myOrders = response?.responseData?.items;
        if (!this.ordersState) {
          this.ordersState = 1;
          this.ordersCount = response?.responseData?.items.filter(
            (order: { orderState: number }) => order.orderState === 1
          ).length;
        } else {
          this.ordersState = this.ordersState;
          this.ordersCount = response?.responseData?.items.filter(
            (order: { orderState: number }) =>
              order.orderState === this.ordersState
          ).length;
        }
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
        this.ordersCount = response.responseData.placed;
        console.log('Order statistics response:', response);
      },
      (error) => {
        console.error('Error fetching order statistics:', error);
      }
    );
  }

  getSeller() {
    // Call the getSellers method when the component is initialized
    this.sellerProductsOffersService.getSellers().subscribe(
      (data) => {
        this.sellersData = data?.responseData?.items;
        console.log('Sellers Data:', this.sellersData);

      },
      (error) => {
        console.error('Error fetching sellers data:', error);
      }
    );
  }
  onSellerSelected(event: any) {
    // Your logic here
    if (!event) {
      this.selectedSeller = false;
      this.getMyOrders(undefined);
    }
    else {
      this.selectedSeller = true;
      this.selectedUserId = event;
      this.getMyOrders(event.userId);
    }
    console.log('Selected userId:', this.selectedUserId); // event contains the selected seller's data
  }
  currentTab: string = 'ordered';
  myOrderStatus = ['ordered', 'shipping', 'delivered', 'returned', 'cancelled'];

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
      // return this.orderStatistics.delivered;
      // this.ordersCount = this.myOrders.filter(order => order.orderState === 3).length;
      return this.myOrders.filter((order) => order.orderState === 3).length;
    } else if (status === 'cancelled') {
      // return this.orderStatistics.cancelled + this.orderStatistics.refund;
      // this.ordersCount = this.myOrders.filter(order => order.orderState === 4 || order.orderState === 5).length;
      return this.myOrders.filter(
        (order) => order.orderState === 4 || order.orderState === 5
      ).length;
    } else if (status === 'shipping') {
      // return this.orderStatistics.shipped;
      // this.ordersCount = this.myOrders.filter(order => order.orderState === 2).length;
      return this.myOrders.filter((order) => order.orderState === 2).length;
    } else if (status === 'ordered') {
      // this.ordersCount = this.myOrders.filter(order => order.orderState === 1).length;
      // return this.orderStatistics.placed;
      return this.myOrders.filter((order) => order.orderState === 1).length;
    } else if (status === 'returned') {
      // return this.orderStatistics.returned;
      // this.ordersCount = this.myOrders.filter(order => order.orderState === 6).length;
      return this.myOrders.filter((order) => order.orderState === 6).length;
    } else {
      // Return undefined if the status is not found
      return undefined;
    }
  }
  getIOrderState(state: string): number | undefined {
    // Check if the status exists in orderStatistics
    if (state === 'delivered') {
      return OrderState.Delivered;
    } else if (state === 'cancelled') {
      return OrderState.Canceled;
    } else if (state === 'cancelled') {
      return OrderState.Refund;
    } else if (state === 'shipping') {
      return OrderState.Shipping;
    } else if (state === 'ordered') {
      return OrderState.OrderPlaced;
    } else if (state === 'returned') {
      return OrderState.Returned;
    } else {
      // Return undefined if the status is not found
      return undefined;
    }
  }

  getStatusGradientBgButton(status: any): string {
    switch (status) {
      case 'ordered':
        return 'tab-btn--ordered';
      case 'shipping':
        return 'tab-btn--shipping';
      case 'delivered':
        return 'tab-btn--delivered';
      case 'returned':
        return 'tab-btn--returned';
      case 'cancelled':
        return 'tab-btn--cancelled';
      default:
        return 'Unknown State';
    }
  }

  getStatusTextColor(status: string): string {
    switch (status) {
      case 'ordered':
        return 'text-lightBlue-500';
      case 'shipping':
        return 'text-orange-700';
      case 'delivered':
        return 'text-green-600';
      case 'returned':
        return 'text-yellow-500';
      case 'cancelled':
        return 'text-red-600';
      default:
        return 'Unknown State';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'ordered':
        return 'ordered-note';
      case 'shipping':
        return 'out-for-delivery-one';
      case 'delivered':
        return 'deliverytruck';
      case 'returned':
        return 'returned';
      case 'cancelled':
        return 'canceled';
      default:
        return '';
    }
  }


}
