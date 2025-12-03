import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeDashboardComponent } from './pipe-dashboard.component';

describe('PipeDashboardComponent', () => {
  let component: PipeDashboardComponent;
  let fixture: ComponentFixture<PipeDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
