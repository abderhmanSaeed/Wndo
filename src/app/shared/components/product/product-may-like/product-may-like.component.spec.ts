import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMayLikeComponent } from './product-may-like.component';

describe('ProductMayLikeComponent', () => {
  let component: ProductMayLikeComponent;
  let fixture: ComponentFixture<ProductMayLikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductMayLikeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductMayLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
