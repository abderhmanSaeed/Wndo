import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDetailsComponent } from './confirmation-details.component';

describe('ConfirmationDetailsComponent', () => {
  let component: ConfirmationDetailsComponent;
  let fixture: ComponentFixture<ConfirmationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConfirmationDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
