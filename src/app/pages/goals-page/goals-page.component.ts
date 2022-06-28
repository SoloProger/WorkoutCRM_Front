import {Component, OnInit} from '@angular/core';
import {GoalsStateService} from "./services/goals-state.service";
import {GoalsStateHandlerService} from "./services/goals-state-handler.service";
import {GoalsDialogService} from "./services/goals-dialog.service";
import {Goal} from "../../models/Goal";

@Component({
  selector: 'app-goals-page',
  templateUrl: './goals-page.component.html',
  styleUrls: ['./goals-page.component.scss']
})
export class GoalsPageComponent implements OnInit {

  public goals$ = this.state.state$;

  constructor(
    private readonly state: GoalsStateService,
    private readonly handler: GoalsStateHandlerService,
    private readonly dialog: GoalsDialogService
  ) {
  }

  ngOnInit(): void {
    this.handler.getGoals();
  }

  public openGoalsDialog(goal: Goal): void {
    this.dialog.openGoalsDialog(goal).subscribe(
      rawGoal =>
        goal
          ? this.onUpdateGoal(rawGoal, goal.id)
          : this.onAddGoal(rawGoal)
    );
  }

  public onAddGoal(goal: Goal): void {
    this.handler.getGoals();
  }

  public onUpdateGoal(goal: Goal, id: number): void {
    this.handler.updateGoal(goal, id);
  }

  public onDeleteGoal(id: number): void {
    this.handler.deleteGoal(id);
  }

}
