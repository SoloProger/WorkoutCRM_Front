import {Injectable} from "@angular/core";
import {DialogService} from "primeng/dynamicdialog";

import {filter, Observable} from "rxjs";
import {
  AddEditGoalsFormDialogComponent
} from "../dialogs/add-edit-goals-form-dialog/add-edit-goals-form-dialog.component";
import {Goal} from "../../../models/Goal";

@Injectable()
export class GoalsDialogService {
  constructor(private readonly dialogService: DialogService) {
  }

  public openGoalsDialog(goal?: Goal): Observable<Goal> {
    return this.dialogService.open(AddEditGoalsFormDialogComponent, {
      header: `${goal ? 'Редактировать' : 'Добавить'} упражнение`,
      data: {goal}
    }).onClose.pipe(
      filter(value => !!value)
    );
  }
}
