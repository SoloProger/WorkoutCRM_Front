import {Component, OnInit} from '@angular/core';
import {WorkoutTypesDialogService} from "../../services/workout-types-dialog.service";

@Component({
  selector: 'app-workout-type-init',
  templateUrl: './workout-type-init.component.html',
  styleUrls: ['./workout-type-init.component.scss']
})
export class WorkoutTypeInitComponent implements OnInit {

  constructor(private readonly dialog: WorkoutTypesDialogService) {
  }

  ngOnInit(): void {
  }

  public openTableDialog(): void {
    this.dialog.openTableDialog();
  }
}
