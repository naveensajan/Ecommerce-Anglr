import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnxCategorycardComponent } from './bnx-categorycard.component';

describe('BnxCategorycardComponent', () => {
  let component: BnxCategorycardComponent;
  let fixture: ComponentFixture<BnxCategorycardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnxCategorycardComponent]
    });
    fixture = TestBed.createComponent(BnxCategorycardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
