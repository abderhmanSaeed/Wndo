import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-order-process',
  templateUrl: './order-process.component.html',
  styleUrl: './order-process.component.scss',
  standalone: true,
  imports: [SharedModule],
})
export class OrderProcessComponent {
  products =  [
    {
      id: 787877,
      name: "Spray Bottle For Home",
      hexColor: "f00",
      state: "order placed",
      size: "xl",
      quantity: 2,
      description: "Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.",
      image: "https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg"
    },
    {
      id: 4324,
      name: "Spray Bottle For Home",
      hexColor: "000",
      size: "xxl",
      state: "order placed",
      quantity: 3,
      totalPrice: 30,
      priceAfterDiscount: 20,
      description: "Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.",
      image: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg"
    },
    {
      id: 2342,
      name: "Spray Bottle For Home",
      hexColor: "877211",
      size: "xxl",
      state: "order placed",
      quantity: 4,
      image: "https://m.media-amazon.com/images/I/717yp7Ut+xL._AC_SY879_.jpg"
    }
    ,
    {
      id: 2345342,
      name: "Spray Bottle For Home",
      hexColor: "236754",
      size: "xxl",
      state: "order placed",
      quantity: 4,
      image: "https://m.media-amazon.com/images/I/717yp7Ut+xL._AC_SY879_.jpg"
    }
  ]

}
