import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMrComponent } from './dashboard-mr.component';

describe('DashboardMrComponent', () => {
  let component: DashboardMrComponent;
  let fixture: ComponentFixture<DashboardMrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardMrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
