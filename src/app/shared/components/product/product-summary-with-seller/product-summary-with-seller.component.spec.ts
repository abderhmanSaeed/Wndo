import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSummaryWithSellerComponent } from './product-summary-with-seller.component';

describe('ProductSummaryWithSellerComponent', () => {
  let component: ProductSummaryWithSellerComponent;
  let fixture: ComponentFixture<ProductSummaryWithSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductSummaryWithSellerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductSummaryWithSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
