import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnxAfourcardComponent } from './bnx-afourcard.component';

describe('BnxAfourcardComponent', () => {
  let component: BnxAfourcardComponent;
  let fixture: ComponentFixture<BnxAfourcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnxAfourcardComponent]
    });
    fixture = TestBed.createComponent(BnxAfourcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
