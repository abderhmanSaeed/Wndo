import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ProductApiAlsoResponse, ProductColorAndSizesResponse, ProductResponse } from '../../../shared/models/index';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiEndPoint = '';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
  }
  getProductDetails(productId: string): Observable<ProductResponse> {
    const url = `${this.apiEndPoint}/product-web/product-details-for-web/${productId}`;

    return this.http.get<ProductResponse>(url)
      .pipe(
        map(response => this.handleSuccess(response)),
        catchError(error => this.handleError(error))
      );
  }

  getProductAlsoLikeDetails(productId: string): Observable<ProductApiAlsoResponse> {
    const url = `${this.apiEndPoint}/product-web/may-also-like/${productId}`;

    return this.http.get<ProductApiAlsoResponse>(url)
      .pipe(
        map(response => this.handleSuccess(response)),
        catchError(error => this.handleError(error))
      );
  }

  getProductColorAndSizes(productId: string): Observable<ProductColorAndSizesResponse> {
    const url = `${this.apiEndPoint}/product-web/product-color-and-sizes-when-add-to-cart-clicked/${productId}`;

    return this.http.get<ProductColorAndSizesResponse>(url)
      .pipe(
        map(response => this.handleSuccess(response)),
        catchError(error => this.handleError(error))
      );
  }

  private handleSuccess(response: any): any {
    if (response.isSuccess && response.statusCode === 200) {
      return response;
    } else {
      throw new Error(response.errorMessage || 'Unknown error occurred.');
    }
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 400 || error.status === 401 || error.status === 404) {
      console.error('Client error:', error);
      return throwError('Client error occurred.');
    } else if (error.status === 500) {
      console.error('Server error:', error);
      return throwError('Server error occurred.');
    } else {
      console.error('Unknown error:', error);
      return throwError('Unknown error occurred.');
    }
  }
}
