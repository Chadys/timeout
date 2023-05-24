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

export class Exercise {
  id: number;
  img: string;
  name: string;
  isSymmetrical: boolean;
  defaultSecondsDuration: number;
  defaultSecondsBreak: number;
  tips: string;
  categories: Set<ExerciseCategories>;

  constructor(
    id: number,
    img: string,
    name: string,
    isSymmetrical: boolean,
    defaultSecondsDuration: number,
    defaultSecondsBreak: number,
    tips: string,
    categories: Set<ExerciseCategories>
  ) {
    this.id = id;
    this.img = img;
    this.name = name;
    this.isSymmetrical = isSymmetrical;
    this.defaultSecondsDuration = defaultSecondsDuration;
    this.defaultSecondsBreak = defaultSecondsBreak;
    this.tips = tips;
    this.categories = categories;
  }

  get imgSideUrl(): any {
    //can't use format string here because webpack needs to parse the require call
    return require("@/assets/exercises_img/" + this.img + "_view0.gif");
  }

  get imgFrontUrl(): any {
    return require("@/assets/exercises_img/" + this.img + "_view1.gif");
  }
}

export interface ExercisesState {
  exercisesMap: Map<number, Exercise>; //map's keys should be object ids
}

export interface FilledSelectedExercise {
  exercise: Exercise;
  secondsDuration: number;
  secondsBreak: number;
}
