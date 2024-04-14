import { Component } from '@angular/core';
import { Mousewheel, Navigation, Pagination, Thumbs } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrl: './home-banner.component.scss',
})
export class HomeBannerComponent {
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    autoplay:true,
    pagination: {
      el: '#containerForBullets',
      type: 'bullets',
      bulletClass: 'swiper-custom-bullet',
      bulletActiveClass: 'swiper-custom-bullet-active',
      clickable: true,
    },
    // navigation: true,
    mousewheel: true,
    modules: [Navigation, Thumbs, Mousewheel, Pagination],
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev',
      disabledClass: "slider__nav_disabled"
    },
  };
}
