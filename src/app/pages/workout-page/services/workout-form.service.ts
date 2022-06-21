import {Injectable} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


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
}
