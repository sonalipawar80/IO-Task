import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlighComponent } from './highligh.component';

describe('HighlighComponent', () => {
  let component: HighlighComponent;
  let fixture: ComponentFixture<HighlighComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighlighComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighlighComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
