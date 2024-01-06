import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderOfPageComponent } from './header-of-page.component';

describe('HeaderOfPageComponent', () => {
  let component: HeaderOfPageComponent;
  let fixture: ComponentFixture<HeaderOfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderOfPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderOfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
