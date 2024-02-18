export class  ShippingFeeRequest {
  productRecords: productRecords[] = [];
  addressId!: number;
}


export class productRecords {
  productId!: string;
  quantity!: number;
}
