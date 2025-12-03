import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowercaseMrComponent } from './lowercase-mr.component';

describe('LowercaseMrComponent', () => {
  let component: LowercaseMrComponent;
  let fixture: ComponentFixture<LowercaseMrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LowercaseMrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowercaseMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
