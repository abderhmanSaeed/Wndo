// product-color-and-sizes-response.model.ts

export class ProductColorAndSizesResponse {
  isSuccess!: boolean;
  errorMessage!: string | null;
  statusCode!: number;
  responseData!: {
    id: string;
    colorWithSizes: {
      color: {
        id: number;
        name: string;
        hexaCode: string;
        quantity: number;
      };
      sizes: {
        id: number;
        name: string;
        quantity: number;
      }[];
    }[];
    sizes: {
      id: number;
      name: string;
      quantity: number;
    }[];
    quantity: number;
  };
}
