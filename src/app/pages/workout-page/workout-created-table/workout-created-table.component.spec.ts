import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutCreatedTableComponent } from './workout-created-table.component';

describe('WorkoutCreatedTableComponent', () => {
  let component: WorkoutCreatedTableComponent;
  let fixture: ComponentFixture<WorkoutCreatedTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutCreatedTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutCreatedTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
