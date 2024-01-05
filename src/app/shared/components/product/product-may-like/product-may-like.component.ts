import { Component, Input } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { ProductItem } from '../../../models';

@Component({
  selector: 'app-product-may-like',
  templateUrl: './product-may-like.component.html',
  styleUrl: './product-may-like.component.scss',
})
export class ProductMayLikeComponent {
  @Input() items: ProductItem[] = [];

  swiperConfig: SwiperOptions = {
    slidesPerView: 5,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 5,
      },
      1700: {
        slidesPerView: 7,
      },
    },
  };
}
