import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToLowercaseComponent } from './to-lowercase.component';

describe('ToLowercaseComponent', () => {
  let component: ToLowercaseComponent;
  let fixture: ComponentFixture<ToLowercaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToLowercaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToLowercaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
