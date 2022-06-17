import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutLoadTableComponent } from './workout-load-table.component';

describe('WorkoutLoadTableComponent', () => {
  let component: WorkoutLoadTableComponent;
  let fixture: ComponentFixture<WorkoutLoadTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkoutLoadTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutLoadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
