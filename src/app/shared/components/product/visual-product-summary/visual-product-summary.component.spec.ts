import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualProductSummaryComponent } from './visual-product-summary.component';

describe('VisualProductSummaryComponent', () => {
  let component: VisualProductSummaryComponent;
  let fixture: ComponentFixture<VisualProductSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisualProductSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisualProductSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
