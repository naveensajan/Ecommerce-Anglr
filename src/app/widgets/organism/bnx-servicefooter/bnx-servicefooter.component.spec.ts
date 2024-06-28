import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnxServicefooterComponent } from './bnx-servicefooter.component';

describe('BnxServicefooterComponent', () => {
  let component: BnxServicefooterComponent;
  let fixture: ComponentFixture<BnxServicefooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnxServicefooterComponent]
    });
    fixture = TestBed.createComponent(BnxServicefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
