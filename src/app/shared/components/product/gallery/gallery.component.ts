import { Mousewheel, Navigation, Thumbs } from 'swiper/modules';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { Image } from '../../../models';
import { SwiperContainer } from 'swiper/element';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { VideoModalComponent } from '../video-modal/video-modal.component';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  @Input() videoUrl: string = '';
  @Input() images: Image[] = [];
  // images: any[] = [
  //   {
  //     id: 45084,
  //     imageId: '53453',
  //     urlPreview: 'https://swiperjs.com/demos/images/nature-1.jpg',
  //     urlThumbnail: 'https://swiperjs.com/demos/images/nature-1.jpg',
  //   },
  //   {
  //     id: 45085,
  //     imageId: '53453',
  //     urlPreview: 'https://swiperjs.com/demos/images/nature-2.jpg',
  //     urlThumbnail: 'https://swiperjs.com/demos/images/nature-2.jpg',
  //   },
  //   {
  //     id: 45086,
  //     imageId: '4353',
  //     urlPreview: 'https://swiperjs.com/demos/images/nature-3.jpg',
  //     urlThumbnail: 'https://swiperjs.com/demos/images/nature-3.jpg',
  //   },
  //   {
  //     id: 45087,
  //     imageId: '453',
  //     urlPreview: 'https://swiperjs.com/demos/images/nature-4.jpg',
  //     urlThumbnail: 'https://swiperjs.com/demos/images/nature-4.jpg',
  //   },
  // ];
  videos: any[] = [
    {
      id: 17203,
      videoId: '9e1097f7-111e-4cf3-b2ff-d4bcbf82c87d',
      urlThumbnail:
        'https://wndoprobucket.s3.eu-west-3.amazonaws.com/a6ad2173-f649-4c7c-abc5-5f71d0b48e13.png',
      urlPreview:
        'https://wndovodstack-source71e471f1-12o7ase9r16a7.s3.eu-west-3.amazonaws.com/assets01/9e1097f7-111e-4cf3-b2ff-d4bcbf82c87d.3gp',
      isMain: true,
      name: 'Main',
      description: 'Main',
    },
  ];
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
  constructor(private modalService: BsModalService) {}
  ngOnInit(): void {
    this.urlPreview = this.images[0].urlPreview;
  }
  ngAfterViewInit() {
    if (this.swiper && this.swiperThumbs) {
      this.swiper.nativeElement.swiper.controller.control =
        this.swiperThumbs.nativeElement.swiper;
      this.swiperThumbs.nativeElement.swiper.controller.control =
        this.swiper.nativeElement.swiper;
    }
    console.log(this.index);
  }

  // closeModal() {
  //   this.bsModalRef.hide();
  // }
  // slideChange(swiperRef: any) {
  //   this.index = swiperRef.detail[0].activeIndex;
  // }

  slideChange(swiperRef: any) {
    console.log('🫠slideChange', swiperRef);
    this.urlPreview = swiperRef.urlPreview;
    this.index = this.images
      .concat(this.videos)
      .findIndex((item) => item.id === swiperRef.id);
    // if(this.swiperThumbs){
    //   console.log(this.images.concat(this.videos).findIndex((item) => item.id === swiperRef.id))
    // }
  }

  currentIframe: HTMLIFrameElement | null = null;

  openVideoInIframe(videoUrl: string, containerId: string) {
    // Close the existing iframe if one is open
    if (this.currentIframe) {
      this.closeIframe();
    }

    // Create and open the new iframe
    const iframe = document.createElement('iframe');
    iframe.src = videoUrl;
    iframe.width = '640';
    iframe.height = '360';
    iframe.allowFullscreen = true;

    // Store the reference to the current iframe
    this.currentIframe = iframe;

    // Append the iframe to the specified container
    const container = document.getElementById(containerId);
    if (container) {
      container.appendChild(iframe);
    } else {
      // Handle the case where the container with the specified ID is not found
      console.error(`Container with ID ${containerId} not found.`);
    }
  }
  // openVideoModal(videoUrl: string) {
  //   const initialState = {
  //     videoUrl: videoUrl,
  //   };
  //   this.modalService.show(VideoModalComponent, { initialState });
  // }
  closeIframe() {
    if (this.currentIframe) {
      this.currentIframe.remove();
      this.currentIframe = null;
    }
  }
}
