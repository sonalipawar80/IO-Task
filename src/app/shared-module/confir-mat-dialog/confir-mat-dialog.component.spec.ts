import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirMatDialogComponent } from './confir-mat-dialog.component';

describe('ConfirMatDialogComponent', () => {
  let component: ConfirMatDialogComponent;
  let fixture: ComponentFixture<ConfirMatDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirMatDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirMatDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
