import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { ShippingFeeRequest, apiResponse, productRecords } from '../../../shared/models/index';

@Injectable({
  providedIn: 'root'
})
export class ShippingFessService {
  private apiEndPoint = '';

  private productRecordsSource = new BehaviorSubject<productRecords[]>([]);


  private addressIdSource = new BehaviorSubject<number>(0);
  private shippingFee = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
  }

   // Method to update quantity
   updateProductQuantity(productId: string, quantity: number): void {
    const currentRecords = this.productRecordsSource.value;
    const index = currentRecords.findIndex(record => record.productId === productId);
    if (index !== -1) {
      currentRecords[index].quantity = quantity;
    } else {
      currentRecords.push({ productId, quantity });
    }
    this.productRecordsSource.next(currentRecords);
  }

  // Getter for productRecords
  get productRecords$() {
    return this.productRecordsSource.asObservable();
  }

  updateAddressId(addressId: number): void {
    this.addressIdSource.next(addressId);
    console.log(addressId);

  }

  updateShippingFee(shippingFee: number): void {
    this.shippingFee.next(shippingFee);

  }

  getShippingFee(): Observable<number> {
    return this.shippingFee.asObservable();
  }

  getShippingFeeRequest(): ShippingFeeRequest {
    const productRecords = this.productRecordsSource.getValue();
    const addressId = this.addressIdSource.getValue();

    return {
      productRecords,
      addressId
    };
  }


  getShippingFees(requestBody: ShippingFeeRequest): Observable<apiResponse> {
    const url = `${this.apiEndPoint}/product-web/shipping-fees`;

    return this.http.post<apiResponse>(url, requestBody)
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
