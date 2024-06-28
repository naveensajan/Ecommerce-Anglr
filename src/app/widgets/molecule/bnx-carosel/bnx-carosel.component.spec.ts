import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnxCaroselComponent } from './bnx-carosel.component';

describe('BnxCaroselComponent', () => {
  let component: BnxCaroselComponent;
  let fixture: ComponentFixture<BnxCaroselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnxCaroselComponent]
    });
    fixture = TestBed.createComponent(BnxCaroselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
