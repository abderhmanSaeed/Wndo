import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ProductResponse } from '../../../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiEndPoint = '';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
  }
  getProductDetails(productId: string): Observable<ProductResponse> {
    const url = `${this.apiEndPoint}/product-details-for-web/${productId}`;

    return this.http.get<ProductResponse>(url)
      .pipe(
        map(response => this.handleSuccess(response)),
        catchError(error => this.handleError(error))
      );
  }

  private handleSuccess(response: ProductResponse): ProductResponse {
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
