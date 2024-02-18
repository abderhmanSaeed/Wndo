import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SellerProductsOffersService {
  private apiEndPoint = '';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
  }

  // Method to get seller products or offers based on the isOffers parameter
  getSellerProductsOrOffers(sellerId: string, isOffers: boolean): Observable<any> {
    // Construct the API endpoint based on the isOffers parameter
    const endpoint = isOffers ? 'seller-offers' : 'seller-products';

    // Construct the full URL
    const url = `${this.apiEndPoint}/product-web/seller-products-or-offers/${sellerId}?isOffers=${isOffers}`;

    // Make the API call
    return this.http.get(url);
  }

  // Method to get sellers from the API
  getSellers(): Observable<any> {
    const endpointUrl = `${this.apiEndPoint}/seller/sellers`;

    // Make the GET request and return the observable
    return this.http.get(endpointUrl);
  }

  getSellerProfile(sellerId: string): Observable<any> {
    const endpointUrl = `${this.apiEndPoint}/buyer/seller-profile/${sellerId}`;

    return this.http.get(endpointUrl);
  }
}
