import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Goal} from "../../../models/Goal";

@Injectable({
  providedIn: 'root'
})
export class GoalsFormService {

  constructor(private readonly fb: FormBuilder) {
  }

  public createForm(): FormGroup {
    return this.fb.group({
      goalTitle: [null, Validators.required],
      status: [null],
    })
  }

  public fillForm(form: FormGroup, goal: Goal): void {
    if (!goal) return;
    form.patchValue({
      ...goal
    })
  }
}
