import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnxLoginComponent } from './bnx-login.component';

describe('BnxLoginComponent', () => {
  let component: BnxLoginComponent;
  let fixture: ComponentFixture<BnxLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnxLoginComponent]
    });
    fixture = TestBed.createComponent(BnxLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
