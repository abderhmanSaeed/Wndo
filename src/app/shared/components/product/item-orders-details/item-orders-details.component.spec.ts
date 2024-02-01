import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOrdersDetailsComponent } from './item-orders-details.component';

describe('ItemOrdersDetailsComponent', () => {
  let component: ItemOrdersDetailsComponent;
  let fixture: ComponentFixture<ItemOrdersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemOrdersDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemOrdersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
