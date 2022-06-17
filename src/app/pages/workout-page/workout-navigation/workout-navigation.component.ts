import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-workout-navigation',
  templateUrl: './workout-navigation.component.html',
  styleUrls: ['./workout-navigation.component.scss']
})
export class WorkoutNavigationComponent implements OnInit {

  public workoutTabs!: MenuItem[];

  public activeWorkoutTab: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.workoutTabs = [
      {
        label: 'Создать тренировку', command: () => {
          this.activeWorkoutTab = 0
        }
      },
      {
        label: 'Список созданных тренировок', command: () => {
          this.activeWorkoutTab = 1
        }
      },
      {
        label: 'Список загруженных тренировок', command: () => {
          this.activeWorkoutTab = 2
        }
      }
    ]
  }

}
