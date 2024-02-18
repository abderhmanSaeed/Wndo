import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPRoductToCartModalComponent } from './edit-product-to-cart-modal.component';

describe('EditPRoductToCartModalComponent', () => {
  let component: EditPRoductToCartModalComponent;
  let fixture: ComponentFixture<EditPRoductToCartModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditPRoductToCartModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditPRoductToCartModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
