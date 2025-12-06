import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConfirmMrComponent } from './get-confirm-mr.component';

describe('GetConfirmMrComponent', () => {
  let component: GetConfirmMrComponent;
  let fixture: ComponentFixture<GetConfirmMrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetConfirmMrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetConfirmMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
