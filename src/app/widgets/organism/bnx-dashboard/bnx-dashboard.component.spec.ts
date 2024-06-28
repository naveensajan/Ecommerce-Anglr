import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnxDashboardComponent } from './bnx-dashboard.component';

describe('BnxDashboardComponent', () => {
  let component: BnxDashboardComponent;
  let fixture: ComponentFixture<BnxDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BnxDashboardComponent]
    });
    fixture = TestBed.createComponent(BnxDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
