import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { OrderItemState, OrderTrackState } from '../../../shared/models';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderStateService } from '../../../shared/services/order-state.service';
import { MyOrdersService } from '../../../data/service/my-orders/my-orders.service';
import { OrderState } from '../../../shared/models';

@Component({
  standalone: true,
  imports: [SharedModule],
  selector: 'app-order-process',
  templateUrl: './order-process.component.html',
  styleUrl: './order-process.component.scss',
})
export class OrderProcessComponent implements OnInit {
  orderItemState = OrderItemState;
  orderDetails: any;
  orderNumber: any;
  OrderTrackState = OrderTrackState; // Expose enum to the template
  currentStep: number | undefined;

  constructor(
    private route: ActivatedRoute, private orderStateService: OrderStateService,
    private myOrdersService: MyOrdersService,
    private router: Router,) { }

  products = [
    {
      id: 787877,
      name: "Spray Bottle For Home",
      seller: {
        name: "Mohamed Aly",
        image: "https://static.vecteezy.com/system/resources/thumbnails/002/406/611/small_2x/business-man-cartoon-character-vector.jpg",
        items: [
          {
            id: 1,
            name: "Item 1",
            state: 1
          },
          {
            id: 2,
            name: "Spray Bottle For Home",
            state: 4
          },
          {
            id: 3,
            name: "Item 3",
            state: 4
          }
        ]
      },
      hexColor: "f00",
      state: 1,
      size: "xl",
      quantity: 2,
      createdAt: '28 June , 6 PM',
      description: "Virgil Abloh's Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.",
      image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
      id: 4324,
      name: "Spray Bottle For Home",
      seller: {
        name: "Mohamed Aly",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO9LsfxzeNuWjjU1ypO87haePq_bzC3DlL48z83HtC3Jk6BX3kMn9vAqBszXnRbj3IjyA&usqp=CAU",
        items: [
          {
            id: 1,
            name: "Item 1",
            state: 1
          },
          {
            id: 3,
            name: "Item 3",
            state: 6
          }
        ]
      },
      hexColor: "000",
      size: "xxl",
      state: 1,
      quantity: 3,
      totalPrice: 30,
      priceAfterDiscount: 20,
      createdAt: '28 June , 6 PM',
      description: "Virgil Abloh's Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.",
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
    },
    {
      id: 2342,
      name: "Spray Bottle For Home",
      seller: {
        name: "Mohamed Aly",
        image: "data:image/jpeg;base64,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",
        items: [
          {
            id: 1,
            name: "Item 1",
            state: 1
          }
        ]
      },
      hexColor: "877211",
      size: "xxl",
      state: 1,
      quantity: 4,
      image: "https://m.media-amazon.com/images/I/717yp7Ut+xL._AC_SY879_.jpg",
      createdAt: '28 June , 6 PM',
    }
    ,
    {
      id: 2345342,
      name: "Spray Bottle For Home",
      createdAt: '28 June , 6 PM',
      seller: {
        name: "Mohamed Aly",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ-o939iXSHPgdSqKGJ4-Ymi2e6VXMbxu0txD4P-eRGq-X5Vtsrg4qZICcXirfCNPGJ3w&usqp=CAU",
        items: [
          {
            id: 1,
            name: "Item 1",
            state: 1
          }
        ]
      },
      hexColor: "236754",
      size: "xxl",
      state: 6,
      quantity: 4,
      image: "https://m.media-amazon.com/images/I/717yp7Ut+xL._AC_SY879_.jpg"
    }
  ]

  sellers = [
    {
        sellerId: "e1bccaf2-bfc9-59bd-5041-3a0216e524be",
        name: "متجر أموله",
        userName: "Us_472402",
        imagePath: "https://s3.eu-west-3.amazonaws.com/wndobucket/5c9da6f7-cc96-4357-b6d4-0ca4bbab03df.jpg",
        noOfItems: 1,
        products: [{ name: "test", orderItemState: 1 }],
        stateOfSellerOrder: 1,
        overAllTrackState: 1,
        outPickUpDate: "06/02, 10:26 AM",
        pickUpDate: "17/11, 02:00 PM",
        outDeliveryDate: "18/11, 02:00 PM",
        deliveryDate: "19/11, 02:00 PM"
    },
    {
        sellerId: "ecf9f54f-2307-f5b1-88e9-3a04dae44d58",
        name: "Elegant Rose",
        userName: "Elegant",
        imagePath: "https://s3.eu-west-3.amazonaws.com/wndoprobucket/eb9cc3b5-7dcb-4415-9b5b-f8c178a9bb94.jpg",
        noOfItems: 2,
        products: [
            { name: "باليت ايشادو ارت سكين ", orderItemState: 1 },
            { name: "مخمريه ايمليا", orderItemState: 1 }
        ],
        stateOfSellerOrder: 4,
        overAllTrackState: 1,
        outPickUpDate: "06/02, 10:26 AM",
        pickUpDate: "17/11, 02:00 PM",
        outDeliveryDate: "18/11, 02:00 PM",
        deliveryDate: "19/11, 02:00 PM"
    },
    {
      sellerId: "e1bccaf2-bfc9-59bd-5041-3a0216e524be",
      name: "متجر أموله",
      userName: "Us_472402",
      imagePath: "https://s3.eu-west-3.amazonaws.com/wndobucket/5c9da6f7-cc96-4357-b6d4-0ca4bbab03df.jpg",
      noOfItems: 1,
      products: [{ name: "test", orderItemState: 1 }],
      stateOfSellerOrder: 5,
      overAllTrackState: 1,
      outPickUpDate: "06/02, 10:26 AM",
      pickUpDate: "17/11, 02:00 PM",
      outDeliveryDate: "18/11, 02:00 PM",
      deliveryDate: "19/11, 02:00 PM"
  },
  {
    sellerId: "e1bccaf2-bfc9-59bd-5041-3a0216e524be",
    name: "متجر أموله",
    userName: "Us_472402",
    imagePath: "https://s3.eu-west-3.amazonaws.com/wndobucket/5c9da6f7-cc96-4357-b6d4-0ca4bbab03df.jpg",
    noOfItems: 1,
    products: [{ name: "test", orderItemState: 1 }],
    stateOfSellerOrder: 6,
    overAllTrackState: 1,
    outPickUpDate: "06/02, 10:26 AM",
    pickUpDate: "17/11, 02:00 PM",
    outDeliveryDate: "18/11, 02:00 PM",
    deliveryDate: "19/11, 02:00 PM"
},
];
  orderStatsObject = {
    ordered: {
      key: OrderState.OrderPlaced,
      label: 'my-orders.ordered',
      color: '#4EA3F8',
    },
    shipping: {
      key: OrderState.Shipping,
      label: 'my-orders.shipping',
      color: '#fca908',

    },
    delivered: {
      key: OrderState.Delivered,
      label: 'my-orders.delivered',
      color: '#02A207',

    },
    returned: {
      key: OrderState.Returned,
      label: 'my-orders.returned',
      color: '#F4D014',

    },
    refund: {
      key: OrderState.Refund,
      label: 'my-orders.returned',
      color: '#F4D014',

    },
    cancelled: {
      key: OrderState.Canceled,
      label: 'my-orders.cancelled',
      color: '#FA0029',
    }
  }

  ngOnInit(): void {
    const orderNumber = this.route.snapshot.paramMap.get('orderNumber');
    console.log(`order ditais order Number is ${orderNumber}`);
    this.orderNumber = orderNumber;
    if (orderNumber) {
      console.log(`Order details for order Number: ${orderNumber}`);
      this.trackOrder(orderNumber);
    } else {
      console.error('Order number is null');
      // Handle the case where orderNumber is null, maybe redirect or show an error message
    }
  }
  trackOrder(orderNumber: string): void {
    this.myOrdersService.trackOrder(orderNumber).subscribe({
      next: (data) => {
        this.orderDetails = data?.responseData;
        console.log(this.orderDetails);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
  getTextColorClass(item: any): string {
    return this.orderStateService.getIOrderItemState(item);
  }
  navigateOrderDetails() {
    this.router.navigate(['/product/myOrdersDetails', { orderNumber: this.orderNumber }]);
  }
  shouldShowStep(sellerState: OrderTrackState, stepState: OrderTrackState): boolean {
    return sellerState === stepState;
  }
  isActiveStep(sellerState: number, stepState: OrderTrackState): boolean {
    console.log(sellerState === stepState);
    return sellerState === stepState;
  }

  updateCurrentStep(stateOfSellerOrder: any): void {
    switch(stateOfSellerOrder) {
      case OrderTrackState.placed:
        this.currentStep = OrderTrackState.placed; // Assuming the first step is 0
        break;
      case OrderTrackState.pickup:
        this.currentStep = OrderTrackState.pickup;
        break;
      case OrderTrackState.outdelivery:
        this.currentStep = OrderTrackState.outdelivery;
        break;
      case OrderTrackState.delivered:
        this.currentStep = OrderTrackState.delivered;
        break;
      default:
        this.currentStep = 0; // Default or initial step
    }
  }
}
