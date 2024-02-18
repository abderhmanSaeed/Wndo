import { Component, OnInit } from '@angular/core';
import { ProductResponse } from '../../../models';
import { ProductService } from '../../../../data/service/product/product.service';
import { OrderService } from '../../../../data/service/order/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  products: any[] = []; // Assuming your products have a certain structure
  productsBackEnd: any[] = [];
  totalDetails = {
    totalActualPrice: 0,
    totalShippingFees: 0,
    totalVoucherAmount: 0,
    totalOrderPrice: 0,
  };
  // products = [
  //   {
  //     id: 787877,
  //     name: "Spray Bottle For Home",
  //     hexColor: "f00",
  //     size: "xl",
  //     quantity: 2,
  //     image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
  //   },
  //   {
  //     id: 4324,
  //     name: "Spray Bottle For Home",
  //     hexColor: "000",
  //     size: "xxl",
  //     quantity: 3,
  //     totalPrice: 30,
  //     priceAfterDiscount: 20,
  //     image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
  //   },
  //   {
  //     id: 2342,
  //     name: "Spray Bottle For Home",
  //     hexColor: "877211",
  //     size: "xxl",
  //     quantity: 4,
  //     image: "https://m.media-amazon.com/images/I/717yp7Ut+xL._AC_SY879_.jpg"
  //   }
  //   ,
  //   {
  //     id: 2345342,
  //     name: "Spray Bottle For Home",
  //     hexColor: "236754",
  //     size: "xxl",
  //     quantity: 4,
  //     image: "https://m.media-amazon.com/images/I/717yp7Ut+xL._AC_SY879_.jpg"
  //   }
  // ]
  constructor(private productService: ProductService, private orderService: OrderService) { }

  ngOnInit(): void {
    // Retrieve products from localStorage
    const storedProductsString = localStorage.getItem('products');

    if (storedProductsString) {
      this.products = JSON.parse(storedProductsString);
      // Extract product ids from the products array
      const productIds = this.products.map(product => product.id);

      // Call getProductByIds for each product id
      this.getProductByIds(productIds);
    }
  }
  getProductByIds(ids: string[]) {
    this.productService.getProductByIds(ids).subscribe(
      (response) => {
        // Handle the response from the API
        console.log(response);
        this.productsBackEnd = response.responseData;
        this.aggregateProductDetails(response.responseData);
      },
      (error) => {
        // Handle errors
        console.error(error);
      }
    );
  }

  aggregateProductDetails(products: any[]) {
    products.forEach(product => {
      const { price, shippingFees } = product.price;
      // Assuming voucherAmount needs to be calculated or fetched from somewhere
      const voucherAmount = 0; // Placeholder for voucher amount calculation

      this.totalDetails.totalActualPrice += price;
      this.totalDetails.totalShippingFees += shippingFees;
      // Assuming totalVoucherAmount is the sum of all voucher amounts (placeholder here)
      this.totalDetails.totalVoucherAmount += voucherAmount;
    });
    // Assuming totalOrderPrice is the sum of all actual prices and shipping fees minus voucher amounts
    this.totalDetails.totalOrderPrice = this.totalDetails.totalActualPrice + this.totalDetails.totalShippingFees - this.totalDetails.totalVoucherAmount;
    this.orderService.setTotalOrderPrice(this.totalDetails.totalOrderPrice);
  }
  removeAllItems(): void {
    // Remove products from localStorage
    localStorage.removeItem('products');
    window.location.reload();

    // Implement the removal logic here
  }

}
