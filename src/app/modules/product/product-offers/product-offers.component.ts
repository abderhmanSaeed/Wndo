import { SvgIconComponent } from 'angular-svg-icon';
import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-product-offers',
  templateUrl: './product-offers.component.html',
  styleUrl: './product-offers.component.scss',
  standalone: true,
  imports: [SharedModule, SvgIconComponent],
})
export class ProductOffersComponent {
  products: any = {
    totalCount: 18,
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
        description: '145',
        shareUrl:
          'https://store.wndo.com/product/d9c4bc36-2eac-486b-b3cf-89d6b797ced9',
      },
      {
        id: '70432224-1dcf-4847-88c2-4162a43576e6',
        name: '395',
        image: {
          id: 45086,
          imageId: '57',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/e1a9998c-76ba-45f1-9b64-2f44248ccf15.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/e1a9998c-76ba-45f1-9b64-2f44248ccf15.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/e1a9998c-76ba-45f1-9b64-2f44248ccf15.jpg',
        },
        price: 395,
        priceAfterOffer: 350,
        offerPercentage: 10,
        description: '395',
        shareUrl:
          'https://store.wndo.com/product/70432224-1dcf-4847-88c2-4162a43576e6',
      },
      {
        id: '598fba57-6af6-47fd-9fe0-6410b5d3f461',
        name: '390',
        image: {
          id: 45085,
          imageId: '54',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/63aa12f6-4929-459b-b60b-fc1ec1e54744.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/63aa12f6-4929-459b-b60b-fc1ec1e54744.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/63aa12f6-4929-459b-b60b-fc1ec1e54744.jpg',
        },
        price: 390,
        priceAfterOffer: 300,
        offerPercentage: 20,
        description: '390',
        shareUrl:
          'https://store.wndo.com/product/598fba57-6af6-47fd-9fe0-6410b5d3f461',
      },
      {
        id: '14c6f5a4-d5b9-408b-9360-53ba4a9e6aee',
        name: '285',
        image: {
          id: 45083,
          imageId: '48',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/b67ebf0a-bfd5-437e-bb94-c79f0d45f392.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/b67ebf0a-bfd5-437e-bb94-c79f0d45f392.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/b67ebf0a-bfd5-437e-bb94-c79f0d45f392.jpg',
        },
        price: 285,
        priceAfterOffer: 0,
        offerPercentage: 0,
        description: '285',
        shareUrl:
          'https://store.wndo.com/product/14c6f5a4-d5b9-408b-9360-53ba4a9e6aee',
      },
      {
        id: '058d72a1-0e19-4f86-8068-f0ced40a3a3e',
        name: '280',
        image: {
          id: 45082,
          imageId: '45',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/70be8144-5a17-4e68-811b-85668aa7eda9.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/70be8144-5a17-4e68-811b-85668aa7eda9.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/70be8144-5a17-4e68-811b-85668aa7eda9.jpg',
        },
        price: 280,
        priceAfterOffer: 0,
        offerPercentage: 0,
        description: '280',
        shareUrl:
          'https://store.wndo.com/product/058d72a1-0e19-4f86-8068-f0ced40a3a3e',
      },
      {
        id: 'cda8a58d-56ad-4547-ac2d-ecc00404ddfd',
        name: '275',
        image: {
          id: 45081,
          imageId: '42',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/87ae5304-9750-4c7a-847f-6c9c5e7d2aee.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/87ae5304-9750-4c7a-847f-6c9c5e7d2aee.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/87ae5304-9750-4c7a-847f-6c9c5e7d2aee.jpg',
        },
        price: 275,
        priceAfterOffer: 0,
        offerPercentage: 0,
        description: '275',
        shareUrl:
          'https://store.wndo.com/product/cda8a58d-56ad-4547-ac2d-ecc00404ddfd',
      },
      {
        id: '499b9b29-b509-407a-a695-01abbb13ae1c',
        name: '200',
        image: {
          id: 45080,
          imageId: '39',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/9e9be780-2059-4096-93b3-a3303998c4fa.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/9e9be780-2059-4096-93b3-a3303998c4fa.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/9e9be780-2059-4096-93b3-a3303998c4fa.jpg',
        },
        price: 200,
        priceAfterOffer: 0,
        offerPercentage: 0,
        description: '200',
        shareUrl:
          'https://store.wndo.com/product/499b9b29-b509-407a-a695-01abbb13ae1c',
      },
      {
        id: '3d237068-dd25-429d-8859-90ee9eede93a',
        name: '195',
        image: {
          id: 45079,
          imageId: '36',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/f48ff3e3-c7b0-42fb-9ffa-9651b2c023ee.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/f48ff3e3-c7b0-42fb-9ffa-9651b2c023ee.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/f48ff3e3-c7b0-42fb-9ffa-9651b2c023ee.jpg',
        },
        price: 195,
        priceAfterOffer: 0,
        offerPercentage: 0,
        description: '195',
        shareUrl:
          'https://store.wndo.com/product/3d237068-dd25-429d-8859-90ee9eede93a',
      },
      {
        id: 'f0e33eda-b92a-4497-9795-41c1411e2821',
        name: '190',
        image: {
          id: 45078,
          imageId: '33',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/acfe64bb-8cdc-4567-b67a-ca08c8ce0603.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/acfe64bb-8cdc-4567-b67a-ca08c8ce0603.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/acfe64bb-8cdc-4567-b67a-ca08c8ce0603.jpg',
        },
        price: 190,
        priceAfterOffer: 0,
        offerPercentage: 0,
        description: '190',
        shareUrl:
          'https://store.wndo.com/product/f0e33eda-b92a-4497-9795-41c1411e2821',
      },
      {
        id: 'ffe78125-4dc5-4d01-a36e-cad20e263d5b',
        name: '165',
        image: {
          id: 45077,
          imageId: '30',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/52124591-b8d5-48b0-89e5-ec4323d20d4f.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/52124591-b8d5-48b0-89e5-ec4323d20d4f.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/52124591-b8d5-48b0-89e5-ec4323d20d4f.jpg',
        },
        price: 165,
        priceAfterOffer: 0,
        offerPercentage: 0,
        description: '165',
        shareUrl:
          'https://store.wndo.com/product/ffe78125-4dc5-4d01-a36e-cad20e263d5b',
      },
      {
        id: 'ac1e4a5a-a8fb-4c80-b624-53d8b5b43e24',
        name: '160',
        image: {
          id: 45076,
          imageId: '27',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/41ca9e3f-8daf-4a49-8ca4-5dd4000f7db0.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/41ca9e3f-8daf-4a49-8ca4-5dd4000f7db0.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/41ca9e3f-8daf-4a49-8ca4-5dd4000f7db0.jpg',
        },
        price: 160,
        priceAfterOffer: 0,
        offerPercentage: 0,
        description: '160',
        shareUrl:
          'https://store.wndo.com/product/ac1e4a5a-a8fb-4c80-b624-53d8b5b43e24',
      },
      {
        id: '5170eb4c-f91e-4caf-b203-d1c2f5f6ec51',
        name: '155',
        image: {
          id: 45075,
          imageId: '24',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/0090596f-567a-4e69-ac33-75f2e0540a1b.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/0090596f-567a-4e69-ac33-75f2e0540a1b.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/0090596f-567a-4e69-ac33-75f2e0540a1b.jpg',
        },
        price: 155,
        priceAfterOffer: 0,
        offerPercentage: 0,
        description: '155',
        shareUrl:
          'https://store.wndo.com/product/5170eb4c-f91e-4caf-b203-d1c2f5f6ec51',
      },
      {
        id: '510a01bd-bd15-4cf6-abe1-ec98116b2a93',
        name: '125',
        image: {
          id: 45074,
          imageId: '21',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/f3ef9926-0dfa-47ab-b9c8-a5f9391bf7e3.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/f3ef9926-0dfa-47ab-b9c8-a5f9391bf7e3.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/f3ef9926-0dfa-47ab-b9c8-a5f9391bf7e3.jpg',
        },
        price: 125,
        priceAfterOffer: 0,
        offerPercentage: 0,
        description: '125',
        shareUrl:
          'https://store.wndo.com/product/510a01bd-bd15-4cf6-abe1-ec98116b2a93',
      },
      {
        id: '8eb47b9a-cf79-431f-90a9-ea0ae0f429db',
        name: '120',
        image: {
          id: 45073,
          imageId: '18',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/0b46bd7c-36ff-4f2b-b9e7-43264343fc92.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/0b46bd7c-36ff-4f2b-b9e7-43264343fc92.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/0b46bd7c-36ff-4f2b-b9e7-43264343fc92.jpg',
        },
        price: 120,
        priceAfterOffer: 0,
        offerPercentage: 0,
        description: '120',
        shareUrl:
          'https://store.wndo.com/product/8eb47b9a-cf79-431f-90a9-ea0ae0f429db',
      },
      {
        id: '7188cea4-5cfc-4ba7-8280-b0dd35401b43',
        name: '110',
        image: {
          id: 45072,
          imageId: '15',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/bf2f830a-1a04-4d99-96ce-eb6358089d4b.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/bf2f830a-1a04-4d99-96ce-eb6358089d4b.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/bf2f830a-1a04-4d99-96ce-eb6358089d4b.jpg',
        },
        price: 110,
        priceAfterOffer: 0,
        offerPercentage: 0,
        description: '110',
        shareUrl:
          'https://store.wndo.com/product/7188cea4-5cfc-4ba7-8280-b0dd35401b43',
      },
      {
        id: 'e4540f3d-051c-406a-891b-035dd286d922',
        name: '550',
        image: {
          id: 45071,
          imageId: '12',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/84d9424e-6c04-4300-90af-367a35a109c6.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/84d9424e-6c04-4300-90af-367a35a109c6.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/84d9424e-6c04-4300-90af-367a35a109c6.jpg',
        },
        price: 550,
        priceAfterOffer: 0,
        offerPercentage: 0,
        description: '550',
        shareUrl:
          'https://store.wndo.com/product/e4540f3d-051c-406a-891b-035dd286d922',
      },
      {
        id: '4532c8f0-63c9-452f-aeef-c34f5735dd69',
        name: '500',
        image: {
          id: 45070,
          imageId: '9',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/1cfb748a-07b4-4caf-b6dc-3892153aa13c.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/1cfb748a-07b4-4caf-b6dc-3892153aa13c.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/1cfb748a-07b4-4caf-b6dc-3892153aa13c.jpg',
        },
        price: 500,
        priceAfterOffer: 0,
        offerPercentage: 0,
        description: '500',
        shareUrl:
          'https://store.wndo.com/product/4532c8f0-63c9-452f-aeef-c34f5735dd69',
      },
      {
        id: '7288bca8-958f-44ad-8994-34b1241dd0d0',
        name: '450',
        image: {
          id: 45069,
          imageId: '6',
          urlThumbnail:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/1eddfb28-4e11-4b34-ba5e-7a1f70d98268.jpg',
          urlPreview:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/1eddfb28-4e11-4b34-ba5e-7a1f70d98268.jpg',
          urlDownload:
            'https://wndoprobucket.s3.eu-west-3.amazonaws.com/1eddfb28-4e11-4b34-ba5e-7a1f70d98268.jpg',
        },
        price: 450,
        priceAfterOffer: 0,
        offerPercentage: 0,
        description: '450',
        shareUrl:
          'https://store.wndo.com/product/7288bca8-958f-44ad-8994-34b1241dd0d0',
      },
    ],
  };


  offers = this.products.items.filter((product: any)=> product.offerPercentage > 0)
}
