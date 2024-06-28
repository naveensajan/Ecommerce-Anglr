import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnxNavbarComponent } from './bnx-navbar.component';

describe('BnxNavbarComponent', () => {
  let component: BnxNavbarComponent;
  let fixture: ComponentFixture<BnxNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnxNavbarComponent]
    });
    fixture = TestBed.createComponent(BnxNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
