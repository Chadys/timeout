export enum OPERATIONS {
  NEW_WORKOUT = "NEW_WORKOUT",
  DELETE_WORKOUT = "DELETE_WORKOUT",
  EDIT_WORKOUT_TITLE = "EDIT_WORKOUT_TITLE",
  ADD_EXERCISE = "ADD_EXERCISE"
}

export interface SelectedExercise {
  exerciseId: number;
  secondsDuration: number;
  secondsBreak: number;
}

export class Workout {
  id?: number;
  title = "";
  timeInSeconds = 0;
  readonly program: SelectedExercise[] = [];

  addExercise(exercise: SelectedExercise) {
    this.program.push(exercise);
    this.timeInSeconds += exercise.secondsDuration + exercise.secondsBreak;
  }

  removeExercise(index: number) {
    const exercise = this.program.splice(index, 1)[0];
    this.timeInSeconds -= exercise.secondsDuration + exercise.secondsBreak;
  }

  editExercise(index: number, secondsDuration?: number, secondsBreak?: number) {
    const exercise = this.program[index];
    if (secondsDuration != null) {
      this.timeInSeconds =
        this.timeInSeconds - exercise.secondsDuration + secondsDuration;
      exercise.secondsDuration = secondsDuration;
    }
    if (secondsBreak != null) {
      this.timeInSeconds =
        this.timeInSeconds - exercise.secondsBreak + secondsBreak;
      exercise.secondsBreak = secondsBreak;
    }
  }

  moveExercise(index: number, newIndex: number) {
    this.program.splice(newIndex, 0, this.program.splice(index, 1)[0]);
  }
}

export interface WorkoutsState {
  lastId: number;
  workoutsMap: Map<number, Workout>; //map's keys should be object ids
}
