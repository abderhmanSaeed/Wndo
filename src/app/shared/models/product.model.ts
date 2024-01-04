// product-response.model.ts
export class Seller {
  id: string = '';
  userName: string = '';
  name: string = '';
  email: string = '';
  imagePath: string = '';
  isRemoved: boolean = false;
  numberOfItems: number | null = null;
  shareUrl: string = '';
}

export class Image {
  id: number = 0;
  imageId: string = '';
  urlThumbnail: string = '';
  urlPreview: string = '';
}

// ... (similar changes for other classes)

export class ProductResponse {
  isSuccess: boolean;
  errorMessage: null | string;
  statusCode: number;
  responseData: {
    name: string;
    description: string;
    seller: Seller;
    images: Image[];
    // ... (other properties)
  };

  constructor() {
    this.isSuccess = false;
    this.errorMessage = null;
    this.statusCode = 0;
    this.responseData = {
      name: '',
      description: '',
      seller: new Seller(),
      images: [],
      // ... (initialize other properties)
    };
  }
}

