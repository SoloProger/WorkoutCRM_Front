import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditExerciseFormDialogComponent } from './add-edit-exercise-form-dialog.component';

describe('AddEditExerciseFormDialogComponent', () => {
  let component: AddEditExerciseFormDialogComponent;
  let fixture: ComponentFixture<AddEditExerciseFormDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditExerciseFormDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditExerciseFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
