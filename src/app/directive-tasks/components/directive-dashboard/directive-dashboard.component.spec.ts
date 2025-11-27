import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDashboardComponent } from './directive-dashboard.component';

describe('DirectiveDashboardComponent', () => {
  let component: DirectiveDashboardComponent;
  let fixture: ComponentFixture<DirectiveDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
