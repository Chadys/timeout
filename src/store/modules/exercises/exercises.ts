import { Module } from "vuex";

import {
  Exercise,
  ExerciseCategories,
  ExercisesState
} from "@/store/modules/exercises/exercises.type";

export const getters = {
  getExercisesFilteredByCategories(
    state: ExercisesState
  ): (categories: ExerciseCategories[]) => Exercise[] {
    return categories => {
      return [...state.exercisesMap.values()].filter(exercise =>
        categories.every(category => exercise.categories.has(category))
      );
    };
  }
};

const moduleExercises: Module<ExercisesState, any> = {
  state: () => ({
    exercisesMap: new Map([
      [
        1,
        {
          id: 1,
          img: "001_mountain_climber",
          name: "Mountain Climber",
          isSymmetrical: false,
          defaultSecondsDuration: 50,
          defaultSecondsBreak: 10,
          tips: "",
          categories: new Set([
            ExerciseCategories.Legs,
            ExerciseCategories.Butt,
            ExerciseCategories.Shoulder,
            ExerciseCategories.Back,
            ExerciseCategories.Abdos,
            ExerciseCategories.Cardio
          ])
        }
      ],
      [
        2,
        {
          id: 2,
          img: "002_push_up",
          name: "Push Up",
          isSymmetrical: false,
          defaultSecondsDuration: 50,
          defaultSecondsBreak: 10,
          tips: "",
          categories: new Set([
            ExerciseCategories.Arms,
            ExerciseCategories.Shoulder
          ])
        }
      ],
      [
        3,
        {
          id: 3,
          img: "003_quadriceps_extension",
          name: "Quadriceps Extension",
          isSymmetrical: true,
          defaultSecondsDuration: 45,
          defaultSecondsBreak: 5,
          tips: "",
          categories: new Set([
            ExerciseCategories.Legs,
            ExerciseCategories.Stretch
          ])
        }
      ]
    ])
  }),
  getters
};

export default moduleExercises;
