import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryPhoneCodeService {
  private apiEndPoint = '';

  constructor(private http: HttpClient) {
    this.apiEndPoint = environment.apiEndPoint;
  }

  getCountryPhoneCodes(): Observable<any> {
    const url = `${this.apiEndPoint}/general/country-phone-codes`;

    return this.http.get<any>(url);
  }
}
