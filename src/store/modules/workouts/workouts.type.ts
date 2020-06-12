export interface SelectedExercise {
  exerciseId: number;
  secondsDuration: number;
  secondsBreak: number;
}

export interface Workout {
  id: number;
  title: string;
  program: SelectedExercise[];
}

export interface WorkoutsState {
  workoutsMap: Map<number, Workout>; //map's keys should be object ids
}
