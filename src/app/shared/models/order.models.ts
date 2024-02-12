export class Order {
  pickUpTime: number;
  paymentMethod: number;
  addressId: number;
  voucherCode: string;
  totalOrderPrice: number;
  shippingFees: number;
  orderItems: OrderItem[];

  constructor(
    pickUpTime: number,
    paymentMethod: number,
    addressId: number,
    voucherCode: string,
    totalOrderPrice: number,
    shippingFees: number,
    orderItems: OrderItem[]
  ) {
    this.pickUpTime = pickUpTime;
    this.paymentMethod = paymentMethod;
    this.addressId = addressId;
    this.voucherCode = voucherCode;
    this.totalOrderPrice = totalOrderPrice;
    this.shippingFees = shippingFees;
    this.orderItems = orderItems;
  }
}
export class OrderItem {
  productId: string;
  sellerId: string;
  sizeId: number;
  colorId: number;
  quantity: number;

  constructor(
    productId: string,
    sellerId: string,
    sizeId: number,
    colorId: number,
    quantity: number
  ) {
    this.productId = productId;
    this.sellerId = sellerId;
    this.sizeId = sizeId;
    this.colorId = colorId;
    this.quantity = quantity;
  }
}

