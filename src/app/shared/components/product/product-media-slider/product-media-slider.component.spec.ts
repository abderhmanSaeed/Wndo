import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMediaSliderComponent } from './product-media-slider.component';

describe('ProductMediaSliderComponent', () => {
  let component: ProductMediaSliderComponent;
  let fixture: ComponentFixture<ProductMediaSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductMediaSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductMediaSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
