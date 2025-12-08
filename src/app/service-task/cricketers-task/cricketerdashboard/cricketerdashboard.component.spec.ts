import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerdashboardComponent } from './cricketerdashboard.component';

describe('CricketerdashboardComponent', () => {
  let component: CricketerdashboardComponent;
  let fixture: ComponentFixture<CricketerdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketerdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketerdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
