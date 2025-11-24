import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServFormComponent } from './serv-form.component';

describe('ServFormComponent', () => {
  let component: ServFormComponent;
  let fixture: ComponentFixture<ServFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
