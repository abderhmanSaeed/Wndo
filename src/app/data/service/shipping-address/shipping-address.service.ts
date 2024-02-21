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

  postAddress(data: {
    name: string;
    street: string;
    buildingNo: any;
    cityId: number;
    icon: number;
    districtId: number;
    zoneId: number;
  }) {
    return this.http.post(`${this.apiEndPoint}/address`, data);
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
    return this.http.get<{responseData: { districts: any[], zones: any[] }}>(`${this.apiEndPoint}/city/districts-and-zones/${cityId}`).pipe(
      map(response => {
        const districts = response.responseData.districts.map(item => ({
          label: item.name,
          value: item.id,
          type: 'district'
        }));
        const zones = response.responseData.zones.map(item => ({
          label: item.name,
          value: item.id,
          type: 'zone'
        }));
        return { districts, zones };
      })
    );
  }

}
