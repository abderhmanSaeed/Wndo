import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCheckoutConfirmationComponent } from './order-checkout-confirmation.component';

describe('OrderCheckoutConfirmationComponent', () => {
  let component: OrderCheckoutConfirmationComponent;
  let fixture: ComponentFixture<OrderCheckoutConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderCheckoutConfirmationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrderCheckoutConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
