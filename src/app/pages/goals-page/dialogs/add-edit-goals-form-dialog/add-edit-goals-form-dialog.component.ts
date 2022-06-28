import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {GoalsFormService} from "../../services/goals-form.service";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {Goal} from "../../../../models/Goal";

@Component({
  selector: 'app-add-edit-goals-form-dialog',
  templateUrl: './add-edit-goals-form-dialog.component.html',
  styleUrls: ['./add-edit-goals-form-dialog.component.scss']
})
export class AddEditGoalsFormDialogComponent implements OnInit {

  public goalForm!: FormGroup;

  constructor(
    private readonly form: GoalsFormService,
    private readonly config: DynamicDialogConfig,
    private readonly ref: DynamicDialogRef
  ) {
  }

  ngOnInit(): void {
    this.goalForm = this.form.createForm();
    this.form.fillForm(this.goalForm, this.config.data?.goal)
  }

  public submitForm(): void {
    this.dialogClose({
      ...this.goalForm.value,
    })
  }

  public dialogClose(goal?: Goal): void {
    this.ref.close(goal);
  }

}
