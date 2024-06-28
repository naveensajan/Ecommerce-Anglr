import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnxFooterComponent } from './bnx-footer.component';

describe('BnxFooterComponent', () => {
  let component: BnxFooterComponent;
  let fixture: ComponentFixture<BnxFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnxFooterComponent]
    });
    fixture = TestBed.createComponent(BnxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
