export enum ExerciseCategories {
  Cardio = "Cardio",
  Stretch = "Stretch",
  Stabilisation = "Stabilisation",

  Arms = "Arms",
  Shoulder = "Shoulder",
  Abdos = "Abdos",
  Back = "Back",
  Butt = "Butt",
  Legs = "Legs"
}

export interface Exercise {
  id: number;
  img: string;
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
