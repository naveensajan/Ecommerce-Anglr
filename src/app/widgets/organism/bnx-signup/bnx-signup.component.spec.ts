import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnxSignupComponent } from './bnx-signup.component';

describe('BnxSignupComponent', () => {
  let component: BnxSignupComponent;
  let fixture: ComponentFixture<BnxSignupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnxSignupComponent]
    });
    fixture = TestBed.createComponent(BnxSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
