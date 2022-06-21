import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ExerciseFormService} from "../../services/exercise-form.service";
import {Exercise} from "../../../../models/Exercise";

@Component({
  selector: 'app-add-edit-exercise-form-dialogs',
  templateUrl: './add-edit-exercise-form-dialog.component.html',
  styleUrls: ['./add-edit-exercise-form-dialog.component.scss']
})
export class AddEditExerciseFormDialogComponent implements OnInit {

  public exerciseForm!: FormGroup;

  constructor(
    private readonly form: ExerciseFormService,
    private readonly config: DynamicDialogConfig,
    private readonly ref: DynamicDialogRef
  ) {
  }

  ngOnInit(): void {
    this.exerciseForm = this.form.createForm();
    this.form.fillForm(this.exerciseForm, this.config.data?.exercise)
  }

  public submitForm(): void {
    this.dialogClose({
      ...this.exerciseForm.value,
    })
  }

  public dialogClose(exercise?: Exercise): void {
    this.ref.close(exercise);
  }

}
