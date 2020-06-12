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
  exercisesMap: Map<number, Exercise>; //map's keys should be object ids
}
