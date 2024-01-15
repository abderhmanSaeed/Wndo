import { TestBed } from '@angular/core/testing';

import { SellerProductsOffersService } from './seller-products-offers.service';

describe('SellerProductsOffersService', () => {
  let service: SellerProductsOffersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SellerProductsOffersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
