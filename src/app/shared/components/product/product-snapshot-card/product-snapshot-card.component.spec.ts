import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSnapshotCardComponent } from './product-snapshot-card.component';

describe('ProductSnapshotCardComponent', () => {
  let component: ProductSnapshotCardComponent;
  let fixture: ComponentFixture<ProductSnapshotCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductSnapshotCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductSnapshotCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
