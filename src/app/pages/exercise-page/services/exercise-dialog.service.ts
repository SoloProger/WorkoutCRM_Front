import {Injectable} from "@angular/core";
import {DialogService} from "primeng/dynamicdialog";
import {Exercise} from "../../../models/Exercise";
import {filter, Observable} from "rxjs";
import {
  AddEditExerciseFormDialogComponent
} from "../dialogs/add-edit-exercise-form-dialog/add-edit-exercise-form-dialog.component";


@Injectable()
export class ExerciseDialogService {
  constructor(private readonly dialogService: DialogService) {
  }

  public openExerciseDialog(exercise?: Exercise): Observable<Exercise> {
    return this.dialogService.open(AddEditExerciseFormDialogComponent, {
      header: `${exercise ? 'Редактировать' : 'Добавить'} упражнение`,
      data: {exercise}
    }).onClose.pipe(
      filter(value => !!value)
    );
  }
}
