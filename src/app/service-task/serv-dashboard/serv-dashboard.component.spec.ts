import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServDashboardComponent } from './serv-dashboard.component';

describe('ServDashboardComponent', () => {
  let component: ServDashboardComponent;
  let fixture: ComponentFixture<ServDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
