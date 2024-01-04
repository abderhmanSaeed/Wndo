import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details-card',
  templateUrl: './product-details-card.component.html',
  styleUrl: './product-details-card.component.scss',
})
export class ProductDetailsCardComponent {
// Product
product = {
  name: 'Off-White Odsy-1000 Low-Top Sneakers',
  price: 62.1,
  discount: 69,
  colors: [
    {
      name: 'Yellow',
      hex: '#F7FF04',
    },
    {
      name: 'black',
      hex: '#000',
    },
    {
      name: 'red',
      hex: '#f00',
    },
    {
      name: 'green',
      hex: '#1c943e',
    },
  ],
  sizes: [8, 9, 6, 10],

  desc: "Virgil Abloh's Off-White is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown Odsy-1000 low-top sneakers.",
};
}
