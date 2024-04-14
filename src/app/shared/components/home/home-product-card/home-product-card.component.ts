import { Component, Input } from '@angular/core';
import { Mousewheel, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home-product-card',
  templateUrl: './home-product-card.component.html',
  styleUrl: './home-product-card.component.scss',
})
export class HomeProductCardComponent {
  @Input() products: any[] = [
    {
      id: 1,
      name: 'Sprint Planing Period 02 in Okt 2021',
      rate: 5,
      price: 62.1,
      priceAfterOffer: 69,
      image: {
        urlPreview:
          'https://m.media-amazon.com/images/I/71thf4WNuPL._AC_SY695_.jpg',
      },
      offerPercentage: 20,
    },
    {
      id: 1,
      name: 'Sprint Planing Period 02 in Okt 2021',
      rate: 5,
      price: 62.1,
      priceAfterOffer: 69,
      image: {
        urlPreview:
          'https://m.media-amazon.com/images/I/71thf4WNuPL._AC_SY695_.jpg',
      },
      offerPercentage: 20,
    },
    {
      id: 1,
      name: 'Sprint Planing Period 02 in Okt 2021',
      rate: 5,
      price: 62.1,
      priceAfterOffer: 69,
      image: {
        urlPreview:
          'https://m.media-amazon.com/images/I/71thf4WNuPL._AC_SY695_.jpg',
      },
      offerPercentage: 20,
    },
    {
      id: 1,
      name: 'Sprint Planing Period 02 in Okt 2021',
      rate: 5,
      price: 62.1,
      priceAfterOffer: 69,
      image: {
        urlPreview:
          'https://m.media-amazon.com/images/I/71thf4WNuPL._AC_SY695_.jpg',
      },
      offerPercentage: 20,
    },
    {
      id: 1,
      name: 'Sprint Planing Period 02 in Okt 2021',
      rate: 5,
      price: 62.1,
      priceAfterOffer: 69,
      image: {
        urlPreview:
          'https://m.media-amazon.com/images/I/71thf4WNuPL._AC_SY695_.jpg',
      },
      offerPercentage: 20,
    },
    {
      id: 1,
      name: 'Sprint Planing Period 02 in Okt 2021',
      rate: 5,
      price: 62.1,
      priceAfterOffer: 69,
      image: {
        urlPreview:
          'https://m.media-amazon.com/images/I/71thf4WNuPL._AC_SY695_.jpg',
      },
      offerPercentage: 20,
    },
  ];

  showCopiedMessage: boolean = false;

  swiperProductCardConfig: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 16,
    mousewheel: true,
    modules: [Navigation, Mousewheel, Pagination],
    navigation: {
      nextEl: '.slider__next-product-card',
      prevEl: '.slider__prev-product-card',
      disabledClass: 'slider__nav_disabled-product-card',
    },

    breakpoints: {
      0: {
        spaceBetween: 16,
        slidesPerView: 1.5,
      },
      768: {
        spaceBetween: 16,
        slidesPerView: 2.5,
      },
      1440: {
        spaceBetween: 16,
        slidesPerView: 5.5,
      },
    },
  };

  getArray(num: number): number[] {
    return Array.from(Array(num).keys());
  }
}
