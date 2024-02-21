import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddAddressService {

  constructor() { }

  private addressData = {
    name: '',
    street: '',
    buildingNo: 0,
    cityId: 0,
    icon: 0,
    districtId: 0,
    zoneId: 0,
  };

  // Existing methods to set and get the whole address object
  setAddressData(data: {
    name: string;
    street: string;
    buildingNo: number;
    cityId: number;
    icon: number;
    districtId: number;
    zoneId: number;
  }) {
    this.addressData = { ...this.addressData, ...data };
  }

  getAddressData() {
    return this.addressData;
  }

  // New methods to set individual pieces of data
  setName(name: string) {
    this.addressData.name = name;
  }

  setStreet(street: string) {
    this.addressData.street = street;
  }

  setBuildingNo(buildingNo: number) {
    this.addressData.buildingNo = buildingNo;
  }

  setCityId(cityId: number) {
    this.addressData.cityId = cityId;
  }

  setDistrictId(districtId: number) {
    this.addressData.districtId = districtId;
  }

  setZoneId(zoneId: number) {
    this.addressData.zoneId = zoneId;
  }
}
