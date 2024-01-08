import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderConfirmedModal } from './order-confirmed-modall.component';



describe('OrderConfirmedModal', () => {
  let component: OrderConfirmedModal;
  let fixture: ComponentFixture<OrderConfirmedModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderConfirmedModal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderConfirmedModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
