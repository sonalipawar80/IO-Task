import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraditCardComponent } from './cradit-card.component';

describe('CraditCardComponent', () => {
  let component: CraditCardComponent;
  let fixture: ComponentFixture<CraditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CraditCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
