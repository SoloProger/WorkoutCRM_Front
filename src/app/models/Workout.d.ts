import {Exercise} from "./Exercise";

export interface Workout {
  id: number;
  workoutName: number;
  workoutType: string;
  exerciseSetTimeout: number;
  cycleCount: number;
  exercises: Array<Exercise>
}
