import {Exercise} from "./Exercise";
import {WorkoutType} from "./WorkoutType";

export interface Workout {
  id: number;
  workoutName: string;
  exerciseTimeout: string;
  setsCountTimeout: string;
  cyclesCountTimeout: string;
  cyclesCount: number;
  setsCount: number;
  workoutType: WorkoutType;
  exercises: Exercise[];
}
