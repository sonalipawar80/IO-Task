import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeMrDashboardComponent } from './pipe-mr-dashboard.component';

describe('PipeMrDashboardComponent', () => {
  let component: PipeMrDashboardComponent;
  let fixture: ComponentFixture<PipeMrDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeMrDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipeMrDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
