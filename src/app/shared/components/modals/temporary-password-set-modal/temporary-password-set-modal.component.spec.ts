import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporaryPasswordSetModalComponent } from './temporary-password-set-modal.component';

describe('TemporaryPasswordSetModalComponent', () => {
  let component: TemporaryPasswordSetModalComponent;
  let fixture: ComponentFixture<TemporaryPasswordSetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemporaryPasswordSetModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemporaryPasswordSetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
