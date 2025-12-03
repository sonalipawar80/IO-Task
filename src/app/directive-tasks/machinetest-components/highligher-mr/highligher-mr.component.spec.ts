import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighligherMrComponent } from './highligher-mr.component';

describe('HighligherMrComponent', () => {
  let component: HighligherMrComponent;
  let fixture: ComponentFixture<HighligherMrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighligherMrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighligherMrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
