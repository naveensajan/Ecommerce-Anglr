import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnxButtonComponent } from './bnx-button.component';

describe('BnxButtonComponent', () => {
  let component: BnxButtonComponent;
  let fixture: ComponentFixture<BnxButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnxButtonComponent]
    });
    fixture = TestBed.createComponent(BnxButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
