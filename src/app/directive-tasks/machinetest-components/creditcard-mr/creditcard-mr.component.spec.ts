import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardMrComponent } from './creditcard-mr.component';

describe('CreditcardMrComponent', () => {
  let component: CreditcardMrComponent;
  let fixture: ComponentFixture<CreditcardMrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditcardMrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditcardMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
