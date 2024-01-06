import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  products =  [
    {
      id: 787877,
      name: "Spray Bottle For Home",
      hexColor: "f00",
      size: "xl",
      quantity: 2,
      image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
      id: 4324,
      name: "Spray Bottle For Home",
      hexColor: "000",
      size: "xxl",
      quantity: 3,
      totalPrice: 30,
      priceAfterDiscount: 20,
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
    },
    {
      id: 2342,
      name: "Spray Bottle For Home",
      hexColor: "877211",
      size: "xxl",
      quantity: 4,
      image: "https://m.media-amazon.com/images/I/717yp7Ut+xL._AC_SY879_.jpg"
    }
    ,
    {
      id: 2345342,
      name: "Spray Bottle For Home",
      hexColor: "236754",
      size: "xxl",
      quantity: 4,
      image: "https://m.media-amazon.com/images/I/717yp7Ut+xL._AC_SY879_.jpg"
    }
  ]
}
