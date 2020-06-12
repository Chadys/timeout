export enum ExerciseCategories {
  Cardio,
  Arms,
  Legs,
  Abdo,
  Stretch
}

export interface Exercise {
  id: number;
  imgSide: string;
  imgFront: string;
  name: string;
  isSymmetrical: boolean;
  defaultSecondsDuration: number;
  defaultSecondsBreak: number;
  tips: string;
  categories: Set<ExerciseCategories>;
}

export interface ExercisesState {
  exercisesList: Exercise[];
}
