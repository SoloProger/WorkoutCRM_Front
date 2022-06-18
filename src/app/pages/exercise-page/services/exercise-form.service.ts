import {Injectable} from "@angular/core";
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {Exercise} from "../../../models/Exercise";


@Injectable()
export class ExerciseFormService {
  constructor(private readonly fb: FormBuilder) {
  }

  public createForm(): FormGroup {
    return this.fb.group({
      exerciseName: [null, Validators.required],
      repeatsCount: [null],
      repeatsCountTimeout: [null]
    })
  }

  public fillForm(form: FormGroup, exercise: Exercise): void {
    if (!exercise) return;
    form.patchValue({
      ...exercise
    })
  }
}
