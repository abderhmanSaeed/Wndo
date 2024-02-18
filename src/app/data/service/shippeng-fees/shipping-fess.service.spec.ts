import { TestBed } from '@angular/core/testing';

import { ShippingFessService } from './shipping-fess.service';

describe('ShippingFessService', () => {
  let service: ShippingFessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShippingFessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
