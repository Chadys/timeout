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
        new Exercise(
          1,
          "001_mountain_climber",
          "Mountain Climber",
          false,
          50,
          10,
          "",
          new Set([
            ExerciseCategories.Legs,
            ExerciseCategories.Butt,
            ExerciseCategories.Shoulder,
            ExerciseCategories.Back,
            ExerciseCategories.Abdos,
            ExerciseCategories.Cardio
          ])
        )
      ],
      [
        2,
        new Exercise(
          2,
          "002_push_up",
          "Push Up",
          false,
          50,
          10,
          "",
          new Set([ExerciseCategories.Arms, ExerciseCategories.Shoulder])
        )
      ],
      [
        3,
        new Exercise(
          3,
          "003_quadriceps_extension",
          "Quadriceps Extension",
          true,
          45,
          5,
          "",
          new Set([ExerciseCategories.Legs, ExerciseCategories.Stretch])
        )
      ]
    ])
  }),
  getters
};

export default moduleExercises;
