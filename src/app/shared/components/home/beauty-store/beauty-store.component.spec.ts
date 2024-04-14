import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyStoreComponent } from './beauty-store.component';

describe('BeautyStoreComponent', () => {
  let component: BeautyStoreComponent;
  let fixture: ComponentFixture<BeautyStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeautyStoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeautyStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
