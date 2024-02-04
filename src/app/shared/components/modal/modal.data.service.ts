import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalDataService {
  private data: any;
  private orderNumber: any;
  private selectedReason: any = 3;
  private ItemOrOrder: any;

  setData(data: any) {
    this.data = data;
  }

  getData(): any {
    return this.data;
  }
  setOrderNumber(orderNumber: any) {
    this.orderNumber = orderNumber;
  }

  getOrderNumber(): any {
    return this.orderNumber;
  }
  setSelectedReason(selectedReason: any) {
    this.selectedReason = selectedReason;
  }

  getSelectedReason(): any {
    return this.selectedReason;
  }
  setItemOrOrder(data: any) {
    this.data = data;
  }

  getItemOrOrder(): any {
    return this.data;
  }
}
