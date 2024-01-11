import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { SvgIconComponent, provideAngularSvgIcon } from 'angular-svg-icon';
@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss',
  standalone: true,
  imports: [SharedModule, SvgIconComponent],
})
export class MyOrdersComponent {
  myOrderStatus = ['ordered', 'shipping', 'delivered', 'returned', 'cancelled'];

  orders = [
    {
      statues: 'ordered',
      id: 234,
      price: 1000,
      date: '28 June , 6 PM',
      items: [
        {
          id: 'd9c4bc36-2eac-486b-b3cf-89d6b797ced9',
          name: '145',
          image: {
            id: 45087,
            imageId: '60',
            urlThumbnail:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlPreview:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlDownload:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
          },
          price: 145,
          priceAfterOffer: 0,
          offerPercentage: 0,
          description: 'Classic Radio Golon F10',
          shareUrl:
            'https://store.wndo.com/product/d9c4bc36-2eac-486b-b3cf-89d6b797ced9',
        },
        {
          id: 'd9c4bc36-2eac-486b-b3cf-89d6b797ced659',
          name: '145',
          image: {
            id: 45087,
            imageId: '60',
            urlThumbnail:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlPreview:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlDownload:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
          },
          price: 145,
          priceAfterOffer: 0,
          offerPercentage: 0,
          description: 'Classic Radio Golon F10',
          shareUrl:
            'https://store.wndo.com/product/d9c4bc36-2eac-486b-b3cf-89d6b797ced9',
        },
      ],
    },
    {
      statues: 'shipping',
      id: 234,
      price: 1000,
      date: '28 June , 6 PM',
      items: [
        {
          id: 'd9c4bc36-2eac-486b-b3cf-89d6b797ced9',
          name: '145',
          image: {
            id: 45087,
            imageId: '60',
            urlThumbnail:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlPreview:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlDownload:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
          },
          price: 145,
          priceAfterOffer: 0,
          offerPercentage: 0,
          description: 'Classic Radio Golon F10',
          shareUrl:
            'https://store.wndo.com/product/d9c4bc36-2eac-486b-b3cf-89d6b797ced9',
        },
        {
          id: 'd9c4bc36-2eac-486b-b3cf-89d6b797ced659',
          name: '145',
          image: {
            id: 45087,
            imageId: '60',
            urlThumbnail:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlPreview:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlDownload:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
          },
          price: 145,
          priceAfterOffer: 0,
          offerPercentage: 0,
          description: 'Classic Radio Golon F10',
          shareUrl:
            'https://store.wndo.com/product/d9c4bc36-2eac-486b-b3cf-89d6b797ced9',
        },
      ],
    },

    {
      statues: 'delivered',
      id: 234,
      price: 1000,
      date: '28 June , 6 PM',
      items: [
        {
          id: 'd9c4bc36-2eac-486b-b3cf-89d6b797ced9',
          name: '145',
          image: {
            id: 45087,
            imageId: '60',
            urlThumbnail:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlPreview:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlDownload:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
          },
          price: 145,
          priceAfterOffer: 0,
          offerPercentage: 0,
          description: 'Classic Radio Golon F10',
          shareUrl:
            'https://store.wndo.com/product/d9c4bc36-2eac-486b-b3cf-89d6b797ced9',
        },
        {
          id: 'd9c4bc36-2eac-486b-b3cf-89d6b797ced659',
          name: '145',
          image: {
            id: 45087,
            imageId: '60',
            urlThumbnail:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlPreview:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlDownload:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
          },
          price: 145,
          priceAfterOffer: 0,
          offerPercentage: 0,
          description: 'Classic Radio Golon F10',
          shareUrl:
            'https://store.wndo.com/product/d9c4bc36-2eac-486b-b3cf-89d6b797ced9',
        },
      ],
    },

    {
      statues: 'returned',
      id: 234,
      price: 1000,
      date: '28 June , 6 PM',
      items: [
        {
          id: 'd9c4bc36-2eac-486b-b3cf-89d6b797ced9',
          name: '145',
          image: {
            id: 45087,
            imageId: '60',
            urlThumbnail:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlPreview:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlDownload:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
          },
          price: 145,
          priceAfterOffer: 0,
          offerPercentage: 0,
          description: 'Classic Radio Golon F10',
          shareUrl:
            'https://store.wndo.com/product/d9c4bc36-2eac-486b-b3cf-89d6b797ced9',
        },
        {
          id: 'd9c4bc36-2eac-486b-b3cf-89d6b797ced659',
          name: '145',
          image: {
            id: 45087,
            imageId: '60',
            urlThumbnail:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlPreview:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlDownload:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
          },
          price: 145,
          priceAfterOffer: 0,
          offerPercentage: 0,
          description: 'Classic Radio Golon F10',
          shareUrl:
            'https://store.wndo.com/product/d9c4bc36-2eac-486b-b3cf-89d6b797ced9',
        },
      ],
    },

    {
      statues: 'cancelled',
      id: 234,
      price: 1000,
      date: '28 June , 6 PM',
      items: [
        {
          id: 'd9c4bc36-2eac-486b-b3cf-89d6b797ced9',
          name: '145',
          image: {
            id: 45087,
            imageId: '60',
            urlThumbnail:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlPreview:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlDownload:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
          },
          price: 145,
          priceAfterOffer: 0,
          offerPercentage: 0,
          description: 'Classic Radio Golon F10',
          shareUrl:
            'https://store.wndo.com/product/d9c4bc36-2eac-486b-b3cf-89d6b797ced9',
        },
        {
          id: 'd9c4bc36-2eac-486b-b3cf-89d6b797ced659',
          name: '145',
          image: {
            id: 45087,
            imageId: '60',
            urlThumbnail:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlPreview:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
            urlDownload:
              'https://wndoprobucket.s3.eu-west-3.amazonaws.com/cfaec020-9bf4-4c0e-a2e3-dd0a6b7d8c0b.jpg',
          },
          price: 145,
          priceAfterOffer: 0,
          offerPercentage: 0,
          description: 'Classic Radio Golon F10',
          shareUrl:
            'https://store.wndo.com/product/d9c4bc36-2eac-486b-b3cf-89d6b797ced9',
        },
      ],
    },
  ];

  getItems(status: string) {
    let items: any[];
    items = this.orders.filter((order) => order.statues === status);
    return items;
  }

  getStyleAndIcon(status: string) {
    switch (status) {
      case 'ordered':
        return {
          ButtonBg:
            'tab-btn--ordered',
          lengthSpan: 'text-lightBlue-500',
          icon: 'ordered-note',
        };
      case 'shipping':
        return {
          ButtonBg:
            'tab-btn--shipping',
          lengthSpan: 'text-orange-700',
          icon: 'out-for-delivery-one',
        };
      case 'delivered':
        return {
          ButtonBg:
            'tab-btn--delivered',
          lengthSpan: 'text-green-600',
          icon: 'deliverytruck',
        };

      case 'returned':
        return {
          ButtonBg:
            'tab-btn--returned',
          lengthSpan: 'text-yellow-500',
          icon: 'returned',
        };
      case 'cancelled':
        return {
          ButtonBg:
            'tab-btn--cancelled',
          lengthSpan: 'text-red-600',
          icon: 'canceled',
        };
      default:
        return {
          ButtonBg: '',
          lengthSpan: '',
          icon: '',
        };
    }
  }
}
