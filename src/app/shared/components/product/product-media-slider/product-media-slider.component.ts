import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import Swiper from 'swiper';
// import { Navigation, Thumbs, Mousewheel } from 'swiper/modules';

// import { SwiperContainer } from 'swiper/element/bundle';
// import { SwiperOptions } from 'swiper/types';


export interface Card {
  title: string;
  description: string;
  url: string;
}

@Component({
  selector: 'app-product-media-slider',
  templateUrl: './product-media-slider.component.html',
  styleUrl: './product-media-slider.component.scss',
})
export class ProductMediaSliderComponent {
  @Input() mediaItems: any[] = [];

  // ngOnInit(): void {

  // }
  // @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  // @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;

  // contents: Card[] = [
  //   {
  //     title: 'Computer',
  //     description: 'Description about computer...',
  //     url: 'https://picsum.photos/id/1/640/480',
  //   },
  //   {
  //     title: 'Building',
  //     description: 'Building description...',
  //     url: 'https://picsum.photos/id/101/640/480',
  //   },
  //   {
  //     title: 'Glass over a computer',
  //     description: 'Description of a glass over a computer',
  //     url: 'https://picsum.photos/id/201/640/480',
  //   },
  //   {
  //     title: 'Autumn',
  //     description: 'Description about autumn leaves',
  //     url: 'https://picsum.photos/id/301/640/480',
  //   },
  //   {
  //     title: 'Balloon',
  //     description: 'Coloured balloon',
  //     url: 'https://picsum.photos/id/401/640/480',
  //   },
  // ];

  // index = 0;

  // swiperConfig: SwiperOptions = {
  //   spaceBetween: 24,
  //   slidesPerView: 3,
  //   direction: 'vertical',
  //   navigation: {
  //     nextEl: '.slider__next',
  //     prevEl: '.slider__prev',
  //   },
  //   breakpoints: {
  //     0: {
  //       direction: 'horizontal',
  //     },
  //     768: {
  //       direction: 'vertical',
  //     },
  //   },
  //   modules: [Navigation, Thumbs],
  // };

  // swiperThumbsConfig: SwiperOptions = {
  //   freeMode: true,
  //   watchSlidesProgress: true,
  //   direction: 'horizontal',
  //   slidesPerView: 1,
  //   spaceBetween: 32,
  //   mousewheel: true,
  //   modules: [Navigation, Thumbs, Mousewheel],
  //   navigation: {
  //     nextEl: '.slider__next',
  //     prevEl: '.slider__prev',
  //   },
  //   breakpoints: {
  //     0: {
  //       direction: 'horizontal',
  //     },
  //     768: {
  //       direction: 'horizontal',
  //     },
  //   },
  // };

  // ngAfterViewInit() {
  //   this.swiper.nativeElement.swiper.activeIndex = this.index;
  //   this.swiperThumbs.nativeElement.swiper.activeIndex = this.index;
  //   console.log('Main Swiper Active Index:',  );
  // }

  // slideChange(swiper: any) {
  //   this.index = swiper.detail.activeIndex;
  //   console.log('Change:', this.index);
  // }

  //   settings = {
  //     counter: false,
  //     plugins: [lgZoom],
  // };
  // onBeforeSlide = (detail: BeforeSlideDetail): void => {
  //     const { index, prevIndex } = detail;
  //     console.log(index, prevIndex);
  // };
}

