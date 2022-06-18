import {Component, OnInit} from '@angular/core';
import {WorkoutTypesStateService} from "../../services/workout-types-state.service";
import {WorkoutTypesStateHandlerService} from "../../services/workout-types-state-handler.service";
import {Exercise} from "../../../../models/Exercise";


@Component({
  selector: 'app-workout-create-form',
  templateUrl: './workout-create-form.component.html',
  styleUrls: ['./workout-create-form.component.scss']
})
export class WorkoutCreateFormComponent implements OnInit {

  public types$ = this.state.workoutTypes$;

  public exerciseMock!: Exercise[];

  constructor(
    private readonly state: WorkoutTypesStateService,
    private readonly stateHandler: WorkoutTypesStateHandlerService,
  ) {

  }

  ngOnInit(): void {
    this.stateHandler.handlerTypes();
    this.exerciseMock = [
      {exerciseName: 'Прыжки', value: 'jumps'},
      {exerciseName: 'Бег', value: 'run'},
      {exerciseName: 'Подтягивания', value: 'pull ups'}
    ]
  }

}
