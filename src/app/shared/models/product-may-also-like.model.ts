// product-api-response.model.ts

export class ProductApiAlsoResponse {
  isSuccess!: boolean;
  errorMessage!: string | null;
  statusCode!: number;
  responseData!: ProductResponseData;
}

export class ProductResponseData {
  totalCount!: number;
  items!: ProductItem[];
}

export class ProductItem {
  id!: string;
  name!: string;
  image!: ProductImage;
  price!: number;
  priceAfterOffer!: number;
  offerPercentage!: number;
  description!: string;
}

export class ProductImage {
  id!: number;
  imageId!: string;
  urlThumbnail!: string;
  urlPreview!: string;
  urlDownload!: string;
}
