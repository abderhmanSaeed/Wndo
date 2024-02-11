import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShippingAddressService {
  private apiEndPoint = '';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
  }


  getAddresses(): Observable<any> {
    return this.http.get<{responseData: { items: any[] }}>(`${this.apiEndPoint}/address`).pipe(
      map(response => response.responseData.items.map(item => ({
        label: item.name,
        value: item.id,
      })))
    );
  }

  getCities(): Observable<any> {
    return this.http.get<{responseData: { items: any[] }}>(`${this.apiEndPoint}/city/cities`).pipe(
      map(response => response.responseData.items.map(item => ({
        label: item.name,
        value: item.id,
      })))
    );
  }

  getDistrictsAndZones(cityId: number): Observable<any> {
    return this.http.get<{responseData: { districts: any[] }}>(`${this.apiEndPoint}/city/districts-and-zones/${cityId}`).pipe(
      map(response => response.responseData.districts.map(item => ({
        label: item.name,
        value: item.id,
      })))
    );
  }

}
