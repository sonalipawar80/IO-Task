import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentDashboardComponent } from './ng-content-dashboard.component';

describe('NgContentDashboardComponent', () => {
  let component: NgContentDashboardComponent;
  let fixture: ComponentFixture<NgContentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
