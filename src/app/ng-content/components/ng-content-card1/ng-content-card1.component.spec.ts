import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentCard1Component } from './ng-content-card1.component';

describe('NgContentCard1Component', () => {
  let component: NgContentCard1Component;
  let fixture: ComponentFixture<NgContentCard1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentCard1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContentCard1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
