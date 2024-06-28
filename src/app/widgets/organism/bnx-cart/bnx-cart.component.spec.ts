import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnxCartComponent } from './bnx-cart.component';

describe('BnxCartComponent', () => {
  let component: BnxCartComponent;
  let fixture: ComponentFixture<BnxCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnxCartComponent]
    });
    fixture = TestBed.createComponent(BnxCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
