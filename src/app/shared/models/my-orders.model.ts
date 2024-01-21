export class Order {
  orderNumber!: number;
  orderState!: number;
  price!: number;
  noOfItems!: number;
  createdAt!: string;
  canBeRefunded!: boolean;
  isCancel!: boolean;
  items: OrderItem[] = [];
  images: string[] = [];
}

export class OrderItem {
  name!: string;
  itemState!: number;
}

export enum OrderState {
  OrderPlaced = 1,
  Shipping = 2,
  Delivered = 3,
  Canceled = 4,
  Refund = 5,
  Returned = 6,
}

export enum OrderItemState {
  OrderPlaced = 1,
  Shipping = 2,
  PickUpOnTheWay = 3,
  PickUp = 4,
  DeliveryOnTheWay = 5,
  Delivered = 6,
  Canceled = 7,
  Refund = 8,
  Returned = 9
}



export class OrderStatistics {
  placed!: number;
  shipped!: number;
  delivered!: number;
  returned!: number;
  refund!: number;
  cancelled!: number;
}
