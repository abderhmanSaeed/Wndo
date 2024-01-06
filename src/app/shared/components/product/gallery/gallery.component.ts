import { Mousewheel, Navigation, Thumbs } from 'swiper/modules';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { Image } from '../../../models';
import { SwiperContainer } from 'swiper/element';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  @Input() items: Image[] = [
    {
      id: 45084,
      imageId: "53453",
      urlPreview: "https://swiperjs.com/demos/images/nature-1.jpg",
      urlThumbnail: "https://swiperjs.com/demos/images/nature-1.jpg"
    },
    {
      id: 45085,
      imageId: "53453",
      urlPreview: "https://swiperjs.com/demos/images/nature-2.jpg",
      urlThumbnail: "https://swiperjs.com/demos/images/nature-2.jpg"
    },
    {
      id: 45086,
      imageId: "4353",
      urlPreview: "https://swiperjs.com/demos/images/nature-3.jpg",
      urlThumbnail: "https://swiperjs.com/demos/images/nature-3.jpg"
    },
    {
      id: 45087,
      imageId: "453",
      urlPreview: "https://swiperjs.com/demos/images/nature-4.jpg",
      urlThumbnail: "https://swiperjs.com/demos/images/nature-4.jpg"
    }
  ]
  imags: any[] = [
    {
      id: 45084,
      imageId: "53453",
      urlPreview: "https://swiperjs.com/demos/images/nature-1.jpg",
      urlThumbnail: "https://swiperjs.com/demos/images/nature-1.jpg"
    },
    {
      id: 45085,
      imageId: "53453",
      urlPreview: "https://swiperjs.com/demos/images/nature-2.jpg",
      urlThumbnail: "https://swiperjs.com/demos/images/nature-2.jpg"
    },
    {
      id: 45086,
      imageId: "4353",
      urlPreview: "https://swiperjs.com/demos/images/nature-3.jpg",
      urlThumbnail: "https://swiperjs.com/demos/images/nature-3.jpg"
    },
    {
      id: 45087,
      imageId: "453",
      urlPreview: "https://swiperjs.com/demos/images/nature-4.jpg",
      urlThumbnail: "https://swiperjs.com/demos/images/nature-4.jpg"
    }
  ]
  @ViewChild('swiper') swiper!: ElementRef<SwiperContainer>;
  @ViewChild('swiperThumbs') swiperThumbs!: ElementRef<SwiperContainer>;
  urlPreview: any;
  swiperConfig: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 32,
    mousewheel: true,
    modules: [Navigation, Thumbs, Mousewheel],
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev',
    },
    breakpoints: {
      0: {
        spaceBetween: 0,
      },
      768: {
        spaceBetween: 0,
      },
      1440: {
        spaceBetween: 32,
      },
    },
  };

  swiperConfigThumbs: SwiperOptions = {
    spaceBetween: 24,
    slidesPerView: 3,
    direction: 'vertical',
    navigation: {
      nextEl: '.slider__next',
      prevEl: '.slider__prev',
    },
    breakpoints: {
      0: {
        direction: 'horizontal',
      },
      768: {
        direction: 'vertical',
      },
    },
    modules: [Navigation, Thumbs],
  };

  index = 0;

  // ngAfterViewInit() {
  //   this.swiper.nativeElement.addEventListener('slidechange', (evt) => this.slideChange(evt));
  // }
  ngOnInit(): void {
    this.urlPreview = this.imags[0].urlPreview;
  }
  ngAfterViewInit() {
    if (this.swiper && this.swiperThumbs) {
      this.swiper.nativeElement.swiper.controller.control = this.swiperThumbs.nativeElement.swiper;
      this.swiperThumbs.nativeElement.swiper.controller.control = this.swiper.nativeElement.swiper;
    }
  }


  // slideChange(swiperRef: any) {
  //   this.index = swiperRef.detail[0].activeIndex;
  // }

  slideChange(swiperRef: any) {
    console.log("slideChange", swiperRef);
    this.urlPreview = swiperRef.urlPreview
    this.index = swiperRef.activeIndex;
  }
}
