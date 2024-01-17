import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPhonePasswordComponent } from './login-phone-password.component';

describe('LoginPhonePasswordComponent', () => {
  let component: LoginPhonePasswordComponent;
  let fixture: ComponentFixture<LoginPhonePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginPhonePasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginPhonePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
