import { Component } from '@angular/core';
import { Mousewheel, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-beauty-store',
  templateUrl: './beauty-store.component.html',
  styleUrl: './beauty-store.component.scss',
  animations: [
    trigger('toggleSubmenu', [
      state('closed', style({
        height: '0',
        opacity: '0',
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: '1'
      })),
      transition('closed <=> open', animate('300ms ease-in-out'))
    ])
  ]
})
export class BeautyStoreComponent {
  stores = [
    {
      id: 1,
      icon: 'skincare',
      name: 'Care',
    },
    {
      id: 2,
      icon: 'devices-coloring',
      name: 'Devices',
    },
    {
      id: 3,
      icon: 'gifts',
      name: 'Gifts',
    },

    {
      id: 4,
      icon: 'contact-lens',
      name: 'Lenses',
    },
    {
      id: 5,
      icon: 'cosmetics',
      name: 'Make up',
    },
    {
      id: 6,
      icon: 'nail-polish',
      name: 'Nails',
    },
    {
      id: 7,
      icon: 'fragrance',
      name: 'Perfume',
    },
    {
      id: 8,
      icon: 'nail-polish',
      name: 'Nails',
    },
    {
      id: 9,
      icon: 'nail-polish',
      name: 'Nails',
    },
  ];

  swiperBeautyStoreConfig: SwiperOptions = {
    slidesPerView: 5.5,
    spaceBetween: 16,
    // autoplay: true,
    // navigation: true,
    mousewheel: true,
    modules: [Navigation, Thumbs, Mousewheel, Pagination],
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev',
      disabledClass: 'slider__nav_disabled',
    },

    breakpoints: {
      0: {
        spaceBetween: 16,
        slidesPerView: 4,
      },
      768: {
        spaceBetween: 16,
        slidesPerView: 8,
      },
      1440: {
        spaceBetween: 16,
        slidesPerView: 9,
      },
    },
  };
}
