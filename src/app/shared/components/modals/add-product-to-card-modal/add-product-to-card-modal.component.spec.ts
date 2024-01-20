import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductToCardModalComponent } from './add-product-to-card-modal.component';

describe('AddProductToCardModalComponent', () => {
  let component: AddProductToCardModalComponent;
  let fixture: ComponentFixture<AddProductToCardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddProductToCardModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddProductToCardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
