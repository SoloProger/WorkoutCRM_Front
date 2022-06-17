import {Component, OnInit} from '@angular/core';
import {WorkoutStateService} from "../services/workout-state.service";
import {WorkoutStateHandlerService} from "../services/workout-state-handler.service";


@Component({
  selector: 'app-workout-create-form',
  templateUrl: './workout-create-form.component.html',
  styleUrls: ['./workout-create-form.component.scss']
})
export class WorkoutCreateFormComponent implements OnInit {

  public types$ = this.state.workoutTypes$;

  constructor(
    private readonly state: WorkoutStateService,
    private readonly stateHandler: WorkoutStateHandlerService,
  ) {

  }

  ngOnInit(): void {
    this.stateHandler.handlerTypes();
  }

}
