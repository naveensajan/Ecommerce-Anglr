import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnxProductcardComponent } from './bnx-productcard.component';

describe('BnxProductcardComponent', () => {
  let component: BnxProductcardComponent;
  let fixture: ComponentFixture<BnxProductcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnxProductcardComponent]
    });
    fixture = TestBed.createComponent(BnxProductcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
