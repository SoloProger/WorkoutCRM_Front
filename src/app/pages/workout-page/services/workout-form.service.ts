import {Injectable} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Workout} from "../../../models/Workout";


@Injectable()
export class WorkoutFormService {
  constructor(private readonly fb: FormBuilder) {
  }

  public createForm(): FormGroup {
    return this.fb.group({
      workoutName: [null, Validators.required],
      exerciseTimeout: [null],
      setsCountTimeout: [null],
      cyclesCountTimeout: [null],
      cyclesCount: [null],
      setsCount: [null],
      workoutTypeId: [null],
      exercises: [null, Validators.required]
    });
  }

  public fillForm(form: FormGroup, workout: Workout): void {
    if (!workout) return;
    form.patchValue({
      ...workout,
    })
  }
}
